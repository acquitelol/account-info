import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';


const Patcher = create('no-embed-fail');
const MessagesModule = getByProps("sendMessage");
const UploadsModule = getByProps("uploadLocalFiles");


const DoubleTapToEdit: Plugin = {
   ...manifest,
   patches: [],

   onStart() {
 
     Patcher.before(MessagesModule, "sendMessage", (_, args, __) => {
       args[1].content = args[1].content.replaceAll("media.discordapp.net", "cdn.discordapp.com")
     });
 
     Patcher.before(UploadsModule, "uploadLocalFiles", (_, args, __) => {
       args[3].content = args[3].content.replaceAll("media.discordapp.net", "cdn.discordapp.com")
     });
   },
 


   onStop() {
      this.commands = [];
      Patcher.unpatchAll();
   },

   
};

registerPlugin(DoubleTapToEdit);