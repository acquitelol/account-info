import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { Messages, Users } from 'enmity/metro/common';

const Channels = getByProps('hasChannel');
const Patcher = create('double-tap-to-edit');
const doubleclickFunc = (e) => handler(e);
const handler = (e) => {
   alert(e.target.closest('li > [class^=message]'))
}

const DoubleTapToEdit: Plugin = {
   ...manifest,

   onStart() {

      try {
			//Classes
			this.selectedClass = getByProps("message", "selected").selected;
			this.messagesWrapper = getByProps("empty", "messagesWrapper").messagesWrapper;

			//Reply functions
			this.replyToMessage = getByProps("replyToMessage").replyToMessage;
			this.getChannel = getByProps("getChannel", "getDMFromUserId").getChannel;

			//Stores
			this.MessageStore = getByProps("receiveMessage", "editMessage");
			this.CurrentUserStore = getByProps("getCurrentUser");

			//Settings
			this.SwitchItem = getByProps("SwitchItem");

			//Events
			global.document.addEventListener('dblclick', doubleclickFunc);

		}
		catch (err) {
			try {
				console.error("Attempting to stop after starting error...", err)
				this.stop();
			}
			catch (err) {
				console.error(this.getName() + ".stop()", err);
			}
		}
   },


   onStop() {
      document.removeEventListener('dblclick', doubleclickFunc)
      Patcher.unpatchAll();
   },

   
};

registerPlugin(DoubleTapToEdit);