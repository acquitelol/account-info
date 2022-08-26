import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
// import manifest from '../manifest.json';
import { Constants, Moment, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { FormDivider, FormRow, Text, View, Button, Alert } from 'enmity/components';

const Patcher = create('safe-open-link');
const openLink = getByProps("openURL");

const SafeOpenLink: Plugin = {
  name: "SafeOpenURL",
  version: "0.0.2",
  description: "Prompts you to open a URL like in Discord Desktop.",
  authors: [
     {
        "name": "acquite",
        "id": "581573474296791211"
     }
  ],

  onStart() {

    Patcher.instead(openLink, 'openURL', (self, args, orig) => {
        return <>
          {orig.apply(self, args)}
          <Alert>
            Clicked URL
          </Alert>
        </>
    })

  },



  onStop() {
    Patcher.unpatchAll();
  },

   
};

registerPlugin(SafeOpenLink);