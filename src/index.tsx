import { Constants, Moment, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { FormDivider, FormRow, Text, View } from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

const [
   Header,
   Members,
   Guilds,
   LastMessage,
   Router
] = bulk(
   filters.byDisplayName('UserProfileHeader', false),
   filters.byProps('getMember'),
   filters.byProps('getGuild'),
   filters.byProps('getLastMessage'),
   filters.byProps('transitionToGuild')
);

const Patcher = create('account-info');

const AccountInfo: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(Header, 'default', (self, args, orig) => {
         const [{ user, channel, type }] = args;

         console.log(LastMessage.getLastMessage(user.id))
         const image = user?.getAvatarURL?.(false, 4096, true);
         if (!image) return orig.apply(self, args);

         const discrim = user.discriminator % 5;
         const url = typeof image === 'number' ? `https://cdn.discordapp.com/embed/avatars/${discrim}.png` : image?.replace('.webp', '.png');

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
               color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
            }
         });

         const Pfp = getIDByName('img_nitro_profile_banner');
         const Add = getIDByName('ic_header_members_add_24px');
         const Joined = getIDByName('ic_leave_24px');

         const isGuild = channel?.guild_id;
         const member = isGuild && Members.getMember(channel.guild_id, user.id);
         const guild = isGuild && Guilds.getGuild(channel.guild_id);

         return <>
            {orig.apply(self, args)}
            <View style={styles.container}>
               <Text style={styles.header}>
                  Account Information
               </Text>
               <View style={styles.information}>
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
                  {isGuild && member && <>
                     <FormDivider />
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
               <Text style={styles.header}>
                  Account Assets
               </Text>
               <View style={styles.information}>
                  <FormRow
                     label={`${user.username}'s Profile Picture`}
                     leading={<FormRow.Icon style={styles.icon} source={Pfp} />}
                     onPress={() => {
                        Router.openURL(url)
                     }}
                  />
               </View>
            </View>
         </>;
      });
   },

   onStop() {
      Patcher.unpatchAll();
   },
};

registerPlugin(AccountInfo);