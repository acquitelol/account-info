import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { Constants, Messages, Users } from 'enmity/metro/common';

const Channels = getByProps('hasChannel');
const Patcher = create('double-tap-to-edit');



const DoubleTapToEdit: Plugin = {
   ...manifest,

   onStart() {

      Patcher.after(Messages, 'sendMessage', (self, args, orig) => {
         // const [channelId, opts] = args;
         // if (!opts?.content || !channelId) {
         //    return orig.apply(self, args);
         // }

         // const channel = Channels.getChannel(channelId);
         // if (!channel) {
         //    return orig.apply(self, args);
         // }


         // global.document.addEventListener('dblclick', () => {
         //    Messages.startEditMessage()
         // });
         alert(`Alert 1: ${args[0]}`)
         alert(`Alert 2: ${args[1]}`)
         alert(`Alert 3: ${args[2]}`)
         alert(`Alert 4: ${args[3]}`)
         alert(`Alert 5: ${args[4]}`)

         alert(`Self 1: ${self[0]}`)
         alert(`Self 2: ${self[1]}`)
         alert(`Self 3: ${self[2]}`)
         alert(`Self 4: ${self[3]}`)
         alert(`Self 5: ${self[4]}`)
      });
   },

   onStop() {
      document.removeEventListener('dblclick', () => {});
      Patcher.unpatchAll();
   },
};

registerPlugin(DoubleTapToEdit);