import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { Constants, Moment, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { FormDivider, FormRow, Text, View, Button } from 'enmity/components';

const Patcher = create('safe-open-link');
const openLink = getByProps("openURL");

const SafeOpenLink: Plugin = {
   ...manifest,

  onStart() {

    Patcher.instead(openLink, 'openURL', (self, args, orig) => {
        const styles = StyleSheet.createThemedStyleSheet({
          container: {
            marginLeft: 15.5,
            marginRight: 15.5,
            marginTop: 17.5
          },
          header: {
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
            opacity: 0.975,
            fontFamily: Constants.Fonts.DISPLAY_BOLD,
            textTransform: 'uppercase',
            fontSize: 16,
            letterSpacing: 0.25
          },
          information: {
            borderRadius: 4,
            backgroundColor: Constants.ThemeColorMap.BRAND_EXPERIMENT,
            marginTop: 10
          },
          item: {
            color: Constants.ThemeColorMap.TEXT_MUTED
          }
      });
        return <>
          {orig.apply(self, args)}
          <View style={styles.container}>
              <Text style={styles.header}>
                Opening a Link...
              </Text>
              <View style={styles.information}>
                  <FormRow
                     label='Open Anyway'
                     onPress={() => {
                        <openLink />
                     }}
                  />
               </View>
          </View>
        </>
    })

  },



  onStop() {
    Patcher.unpatchAll();
  },

   
};

registerPlugin(SafeOpenLink);