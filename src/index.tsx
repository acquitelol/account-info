import { Constants, Moment, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { FormDivider, FormRow, Text, View, Pressable } from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters, getByName, getByProps } from 'enmity/metro';
import { findInReactTree } from 'enmity/utilities'
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import { getBoolean } from 'enmity/api/settings'

const [
   Header,
   Members,
   Guilds,
   Router,
   Clipboard,
   AvatarHeader,
] = bulk(
   filters.byDisplayName('UserProfileHeader', false),
   filters.byProps('getMember'),
   filters.byProps('getGuild'),
   filters.byProps('transitionToGuild'),
   filters.byProps('setString'),
   filters.byName('HeaderAvatar', false),
);

const Patcher = create('account-info');
const Activity = getByProps('getStatus', 'getState')

const AccountInfo: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(Header, 'default', (self, args, orig) => {
         
         let pfpBool = getBoolean("AccountInfo", 'pfpBtn', false)
         let statusBool = getBoolean("AccountInfo", "statusBtn", false)
         let createBool = getBoolean("AccountInfo", "createBtn", true)
         let joinBool = getBoolean("AccountInfo", "joinBtn", true)
		   let masterDisableBool = getBoolean("AccountInfo", "masterDisable", false)

         const [{ user, channel, type }] = args;


         if (type !== 0) {
            return orig.apply(self, args);
         }
         
         const styles = StyleSheet.createThemedStyleSheet({
            container: {
               marginLeft: 15.5,
               marginRight: 15.5,
               marginTop: 17.5,
            },
            header: {
               color: Constants.ThemeColorMap.HEADER_SECONDARY,
               opacity: 0.975,
               fontFamily: Constants.Fonts.DISPLAY_BOLD,
               textTransform: 'uppercase',
               fontSize: 12.75,
               letterSpacing: 0.25
            },
            information: {
               borderRadius: 4,
               backgroundColor: Constants.ThemeColorMap.BACKGROUND_TERTIARY,
               marginTop: 10,
               marginBottom: 10
            },
            item: {
               color: Constants.ThemeColorMap.TEXT_MUTED
            },
            icon: {
               color: Constants.ThemeColorMap.INTERACTIVE_NORMAL,
            },
         });

         const Pfp = getIDByName('img_nitro_profile_banner');
         const ActivityToast = getIDByName('pending-alert');
         const ActivityForm = getIDByName('toast_copy_link');
         const Add = getIDByName('ic_header_members_add_24px');
         const Joined = getIDByName('ic_leave_24px');

         const isGuild = channel?.guild_id;
         const member = isGuild && Members.getMember(channel.guild_id, user.id);
         const guild = isGuild && Guilds.getGuild(channel.guild_id);

         const image = isGuild ? member?.getAvatarURL?.(false, 4096, true) || user?.getAvatarURL?.(false, 4096, true) : user?.getAvatarURL?.(false, 4096, true);
         if (!image) return orig.apply(self, args);

         const discrim = user.discriminator % 5;
         const url = typeof image === 'number' ? `https://cdn.discordapp.com/embed/avatars/${discrim}.png` : image?.replace('.webp', '.png');

         const activityContent = Activity.getActivities(user.id).find(ac => ac.type === 4)
         
         return masterDisableBool ? <>{orig.apply(self, args)}</> : <>
            {orig.apply(self, args)}
            <View style={styles.container}>
               {(createBool || joinBool) ? <>
                  <Text style={styles.header}>
                     Account Information
                  </Text>
                  
                  <View style={styles.information}>
                     {createBool && <>
                        <FormRow
                           label='Created'
                           leading={<FormRow.Icon style={styles.icon} source={Add} />}
                           onPress={() => {
                              Toasts.open({
                                 content: Moment(user.createdAt).format('LLL'),
                                 source: Add
                              });
                           }}
                           trailing={() => <Text style={styles.item}>
                              {Moment(user.createdAt).fromNow()}
                           </Text>}
                        />
                     </>}
                     {createBool && joinBool && isGuild && member && <FormDivider />}
                     {joinBool && isGuild && member &&<>
                        <FormRow
                           label={`Joined ${guild?.name ?? ''}`}
                           leading={<FormRow.Icon style={styles.icon} source={Joined} />}
                           onPress={() => {
                              Toasts.open({
                                 content: Moment(member.joinedAt).format('LLL'),
                                 source: Joined
                              });
                           }}
                           trailing={() => <Text style={styles.item}>
                              {Moment(member.joinedAt).fromNow()}
                           </Text>}
                        />
                     </>}
                  </View>
               </> : <></>}
               {(pfpBool || statusBool) ? <>
                  <Text style={styles.header}>
                     Account Assets
                  </Text>
                  <View style={styles.information}>
                     {pfpBool &&
                        <FormRow
                           label={`View ${user.username}'s Profile Picture`}
                           leading={<FormRow.Icon style={styles.icon} source={Pfp} />}
                           trailing={FormRow.Arrow}
                           onPress={() => {
                              Router.openURL(url)
                           }}
                        />
                     }
                     {pfpBool && statusBool && <FormDivider />}
                     {activityContent && statusBool && <>
                           <FormRow
                              label={`Copy ${user.username}'s Status`}
                              leading={<FormRow.Icon style={styles.icon} source={ActivityForm} />}
                              trailing={FormRow.Arrow}
                              onPress={() => {
                                 Clipboard.setString(`${activityContent.emoji.name ? `:${activityContent.emoji.name}:` : ""} ${activityContent.state ? activityContent.state : ""}`);
                                 Toasts.open({ content: 'Copied to clipboard', source: ActivityToast });
                              }}
                           />
                        </>
                     }
                  </View>
               </> : <></>}
            </View>
         </>;
      });

      Patcher.after(AvatarHeader, 'default', (_, [{ user }], res) => {
         let pfpBool = getBoolean("AccountInfo", 'pfpBtn', false)
         const image = user?.getAvatarURL?.(false, 4096, true);
         if (!image) return res;

         const discrim = user.discriminator % 5;
         const url = typeof image === 'number' ? `https://cdn.discordapp.com/embed/avatars/${discrim}.png` : image?.replace('.webp', '.png');

         return pfpBool ? <>{res}</> : <Pressable onPress={() => Router.openURL(url)}>
            {res}
         </Pressable>;
      })

	  /* ===============------------- */
	  /*   EXPERIMENTAL (doesnt work as expected)  */
	  /* ===============------------- */

      const unpatch = Patcher.after(Header, 'default', (_, __, res) => {
         const statusElem = findInReactTree(res, e => e?.props?.customStatusActivity)
         Patcher.instead(statusElem, 'props', (_, args, res) => {
            let statusBool = getBoolean("AccountInfo", "statusBtn", false)
            const ActivityToast = getIDByName('pending-alert');
            console.log(args)
            // const activityContent = args[0].find(ac => ac.type === 4)

            // return statusBool ? <>{res}</> : <>
            //    <Pressable onPress={() => {
            //       Clipboard.setString(`${activityContent.emoji.name ? `:${activityContent.emoji.name}:` : ""} ${activityContent.state ? activityContent.state : ""}`);
            //       Toasts.open({ content: 'Copied to clipboard', source: ActivityToast });
            //    }}>{res}</Pressable>
            // </>;
         })
            
         unpatch();
      })
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   },
};

registerPlugin(AccountInfo);