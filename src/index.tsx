import { Constants, Moment, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { FormDivider, FormRow, Text, View } from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

const [
   Header,
   Router
] = bulk(
   filters.byDisplayName('UserProfileHeader', false),
   filters.byProps('transitionToGuild')
);

const Patcher = create('external-user');

const ExternalUser: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(Header, 'default', (self, args, orig) => {
         const [{ user, channel, type }] = args;
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
               marginTop: 17.5
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
               marginTop: 10
            },
            item: {
               color: Constants.ThemeColorMap.TEXT_MUTED
            },
            icon: {
               color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
            }
         });

         const Pfp = getIDByName('img_nitro_server_avatar');

         return <>
            {orig.apply(self, args)}
            <View style={styles.container}>
               <Text style={styles.header}>
                  Information
               </Text>
               <View style={styles.information}>
                  <FormRow
                     label='Created'
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

registerPlugin(ExternalUser);