// main imports of elements and dependencies
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import { FormDivider, FormRow, Text, View} from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters, getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import { getBoolean, set, toggle } from 'enmity/api/settings'

// main declaration of modules being altered by the plugin
const [
   Clipboard,
   LazyActionSheet
] = bulk(
   filters.byProps('setString'),
   filters.byProps("openLazy")
);

// initialization
const Patcher = create('dislate');
const Activity = getByProps('getStatus', 'getState')

const AccountInfo: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(LazyActionSheet, 'openLazy', (self, args, orig) => {

         // setting booleans for toggling buttons
         let masterDisableBool = getBoolean("AccountInfo", "masterDisable", false)

         // destructuring the object to make it easier to use the args inside of the object
         console.log(args)
         
         // main stylesheet for native element padding etc
         // const styles = StyleSheet.createThemedStyleSheet({
         //    container: {
         //       marginLeft: 15.5,
         //       marginRight: 15.5,
         //       marginTop: 17.5,
         //    },
         //    header: {
         //       color: Constants.ThemeColorMap.HEADER_SECONDARY,
         //       opacity: 0.975,
         //       fontFamily: Constants.Fonts.DISPLAY_BOLD,
         //       textTransform: 'uppercase',
         //       fontSize: 12.75,
         //       letterSpacing: 0.25
         //    },
         //    information: {
         //       borderRadius: 4,
         //       backgroundColor: Constants.ThemeColorMap.BACKGROUND_TERTIARY,
         //       marginTop: 10,
         //       marginBottom: 10
         //    },
         //    item: {
         //       color: Constants.ThemeColorMap.TEXT_MUTED
         //    },
         //    icon: {
         //       color: Constants.ThemeColorMap.INTERACTIVE_NORMAL,
         //    },
         //    switchArrow: {
         //       marginRight: 15.5
         //    }
         // });

         
         // main return statement of all edits
         // renders default header if the masterDisableBool is active
         return masterDisableBool ? <>{orig.apply(self, args)}</> : <>
            {orig.apply(self, args)}
            {}
         </>;
      });
   },

   onStop() {
      // unpatches everything
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   },
};

registerPlugin(AccountInfo);