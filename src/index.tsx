import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { Image, Text, View } from 'enmity/components';
import { bulk, filters } from 'enmity/metro';

const Patcher = create('double-tap-to-edit');

const [
   MessagesModule,
] = bulk(
   filters.byProps("sendMessage"),
);

const DoubleTapToEdit: Plugin = {
   ...manifest,

   onStart() {
      Patcher.before(MessagesModule, "sendMessage", (self, args, res) => {
         alert('You are about to send a message :skull:!')
      });
   },

   onStop() {
      Patcher.unpatchAll();
   },
};

registerPlugin(DoubleTapToEdit);