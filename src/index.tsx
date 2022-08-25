import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { Messages, Users } from 'enmity/metro/common';

const Channels = getByProps('hasChannel');
const Patcher = create('double-tap-to-edit');



const DoubleTapToEdit: Plugin = {
   ...manifest,

   onStart() {

      Patcher.after(Messages, 'sendMessage', (self, args, orig) => {
         const [channelId, opts] = args;
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
         alert(`Channel ID 1: ${channelId}`)
         alert(`Message ID: ${self}`)
         alert(`Message ID: ${orig}`)
         alert(`Message ID: ${self.id}`)
         alert(`Message ID: ${args}`)
         alert(`Message content: ${args[1].content}`)

      });
   },

   onStop() {
      document.removeEventListener('dblclick', () => {});
      Patcher.unpatchAll();
   },
};

registerPlugin(DoubleTapToEdit);