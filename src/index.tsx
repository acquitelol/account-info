// main imports of elements and dependencies
import { Constants, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { FormDivider, FormRow, FormSwitch, Text, View, Pressable, ScrollView } from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters, getByProps } from 'enmity/metro';
import { findInReactTree } from 'enmity/utilities'
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import { getBoolean, set, toggle } from 'enmity/api/settings'

// main declaration of modules being altered by the plugin
const [
   Header,
   Router,
   Clipboard,
   AvatarHeader,
   ProfileBanner
] = bulk(
   filters.byDisplayName('UserProfileHeader', false),
   filters.byProps('getMember'),
   filters.byProps('getGuild'),
   filters.byProps('transitionToGuild'),
   filters.byProps('setString'),
   filters.byName('HeaderAvatar', false),
   filters.byName('ProfileBanner', false)
);

// initialization
const Patcher = create('account-info');
const Activity = getByProps('getStatus', 'getState')

const AccountInfo: Plugin = {
   ...manifest,

   onStart() {
      Patcher.after(Header, 'default', (self, args, orig) => {
         // used for pfp button
         const [pfpState, setPfpState] = React.useState('Profile Picture')

         // setting booleans for toggling buttons
         let pfpBool = getBoolean("AccountInfo", 'pfpBtn', false)
         let statusBool = getBoolean("AccountInfo", "statusBtn", false)
		   let masterDisableBool = getBoolean("AccountInfo", "masterDisable", false)

         // destructuring the object to make it easier to use the args inside of the object
         const [{ user, type }] = args;

         // attempts to get the hash of the user's banner, but if they have none,
         // then set the pfpToggle to true, aka make it so they cannot access the banner button.
         try {
            var bannerHash = args[0].displayProfile.banner;
         } catch {
            set("AccountInfo", 'pfpToggle', true)
         }

         if (type !== 0) {
            return orig.apply(self, args);
         }
         
         // main stylesheet for native element padding etc
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
            switchArrow: {
               marginRight: 15.5
            }
         });

         // these are a few of the assets used in the buttons and toasts
         const Pfp = getIDByName('img_nitro_profile_banner');
         const ActivityToast = getIDByName('pending-alert');
         const ActivityForm = getIDByName('toast_copy_link');

         // get a user's pfp through the getAvatarURL method
         const image = user?.getAvatarURL?.(false, 4096, true);
         if (!image) return orig.apply(self, args);

         const discrim = user.discriminator % 5;
         const url = typeof image === 'number' ? `https://cdn.discordapp.com/embed/avatars/${discrim}.png` : image?.replace('.webp', '.png');
         
         // get a user's status through getActivities method
         const activityContent = Activity.getActivities(user.id).find(ac => ac.type === 4)
         

         // main return statement of all edits
         // renders default header if the masterDisableBool is active
         return masterDisableBool ? <>{orig.apply(self, args)}</> : <>
            {orig.apply(self, args)}
            <View style={styles.container}>
               {(pfpBool || statusBool) ? <>
                  <Text style={styles.header}>
                     Account Assets
                  </Text>
                  <View style={styles.information}>
                     {pfpBool && <>
                           <FormRow
                              label={`View ${user.username}'s ${pfpState}`}
                              leading={<FormRow.Icon style={styles.icon} source={Pfp} />}
                              trailing={FormRow.Arrow}
                              onPress={() => {
                                 // if theres a banner hash then allow the user to toggle to it, otherwise open the pfp link
                                 bannerHash ? getBoolean("AccountInfo", 'pfpToggle', true) ? Router.openURL(url) : Router.openURL(`https://cdn.discordapp.com/banners/${user.id}/${bannerHash}.${bannerHash.startsWith('a_')?'gif':'png'}?size=4096`) : Router.openURL(url)
                              }}
                              onLongPress={bannerHash ? () => {
                                 // toggles the text inside the button with the setState defined earlier if theres a banner hash,
                                 // otherwise say theres no banner if they attempt to longPress on the button
                                 toggle("AccountInfo", 'pfpToggle', true)
                                 Toasts.open({ content: `Switched to ${getBoolean('AccountInfo', 'pfpToggle', true) ? 'profile picture' : 'banner'} link.`, source: Pfp })
                                 setPfpState(pfpState=='Profile Picture' ? "Banner" : "Profile Picture")
                              }: () => {
                                 Toasts.open({ content: `${user.username} does not have a banner.`, source: Pfp })
                              }}
                           >
                           </FormRow>
                     </>
                     }
                     {pfpBool && statusBool && <FormDivider />}
                     {activityContent && statusBool && <>
                           <FormRow
                              label={`Copy ${user.username}'s Status`}
                              leading={<FormRow.Icon style={styles.icon} source={ActivityForm} />}
                              trailing={FormRow.Arrow}
                              onPress={() => {
                                 // check if theres an emoji in the status and declare it, otherwise do nothing
                                 try {
                                    var emojiName = activityContent.emoji.name
                                 } catch {
                                    
                                 }

                                 // set the status to clipboard and open a toast declaring success
                                 Clipboard.setString(`${emojiName ? `:${emojiName}:` : ""} ${activityContent.state ? activityContent.state : ""}`);
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
         let masterDisableBool = getBoolean("AccountInfo", "masterDisable", false)

         // gets the user pfp with the same getAvatarURL method user previously
         const image = user?.getAvatarURL?.(false, 4096, true);
         if (!image) return res;

         const discrim = user.discriminator % 5;
         const url = typeof image === 'number' ? `https://cdn.discordapp.com/embed/avatars/${discrim}.png` : image?.replace('.webp', '.png');

         // render the pressable with the main pfp inside, otherwise just render the pfp if any of the settings are toggled
         return masterDisableBool ? <>{res}</> : pfpBool ? <>{res}</> : <Pressable onPress={() => Router.openURL(url)}>
            {res}
         </Pressable>;
      })

      Patcher.after(ProfileBanner, 'default', (_, [{ bannerSource }], res) => {
         
         let pfpBool = getBoolean("AccountInfo", 'pfpBtn', false)
         let masterDisableBool = getBoolean("AccountInfo", "masterDisable", false)
         if (typeof bannerSource?.uri !== 'string' || !res) return res;
         
         // gets the banner uri which includes the whole url
         const image = bannerSource.uri

         // splits the uri into the bannerHash and userId of the uri to construct my own
         let bannerImageSplitBySlashes = image.split('/')
         let bannerHash = (bannerImageSplitBySlashes[5]).split('.')[0]
         let userId = bannerImageSplitBySlashes[4]
         
         // the final image construct using the variables extracted earlier, and check for gif
         const finalImage = `https://cdn.discordapp.com/banners/${userId}/${bannerHash}.${bannerHash.startsWith('a_')?'gif':'png'}?size=4096`

         // render the pressable with main banner inside, otherwise just render the banner if any of the settings are toggled
         return masterDisableBool ? <>{res}</> : pfpBool ? <>{res}</> : <Pressable onPress={() => Router.openURL(finalImage)}>
            {res}
         </Pressable>;
      });


      
      Patcher.after(Header, 'default', (_, __, res) => {
         // gets the status text element in the header
         const statusElem = findInReactTree(res, e => e?.props?.customStatusActivity)
         if (!statusElem) return res;

         // gets the other elements inside the tree
         const leftElems = findInReactTree(res, e => e?.[2]?.props?.customStatusActivity);
         if (!leftElems) return res;
       
         // gets the statusBool setting, and renders default header with 'return res' if this value is truthy.
         const statusBool = getBoolean("AccountInfo", "statusBtn", false);
         if (statusBool) return res;
       
         // gets the masterDisableBool setting, and renders default header with 'return res' if this value is truthy.
         const masterDisableBool = getBoolean("AccountInfo", "masterDisable", false);
         if (masterDisableBool) return res;

         // gets the status of a user and returns practically the same as getActivities(user.id)
         const activityContent = leftElems[2].props.customStatusActivity;
         const ActivityToast = getIDByName('pending-alert');
       
         // force replace the status component with a pressable with a statusElem inside
         leftElems[2] = <Pressable onPress={
           () => {
               // check if theres an emoji in the status and declare it, otherwise do nothing
               try {
                  var emojiName = activityContent.emoji.name
               } catch {
                  
               }

               // set the status to clipboard and open a toast declaring success
               Clipboard.setString(`${emojiName ? `:${emojiName}:` : ""} ${activityContent.state ? activityContent.state : ""}`);
               Toasts.open({ content: 'Copied to clipboard', source: ActivityToast });
           }
         }>
           { statusElem }
         </Pressable>;
       })
   },

   onStop() {
      // unpatches everything and clears the clipboard
      Patcher.unpatchAll();
      Clipboard.setString("");
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   },
};

registerPlugin(AccountInfo);