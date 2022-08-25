import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { registerCommands } from "enmity/api/commands";
import manifest from '../manifest.json';
import { Messages } from 'enmity/metro/common';
import { FormRow } from 'enmity/components';
import { editMessageCommand } from './commands/editmessage';

const Patcher = create('double-tap-to-edit');
const LazyActionSheet = getByProps('openLazy', 'hideActionSheet');
const getLastSelectedChannelId = getByProps('getLastSelectedChannelId');


const DoubleTapToEdit: Plugin = {
   ...manifest,

   onStart() {

      const unpatcher = Patcher.before(LazyActionSheet, 'openLazy', ({ hideActionSheet }, [component, sheet]) => {

         component.then(instance => {
            Patcher.after(instance, 'default', (_, args, res) => {
               const children = res.props.children[1].props.children;
               const messageId = res.props.children[0].props;
               const channelId = getLastSelectedChannelId.getChannelId();
            

               children.unshift(
                  <FormRow label='Edit Message Custom' onPress={() => {
                     alert(`1: ${children}`)
                     alert(`2: ${messageId}`)
                     alert(`3: ${channelId}`)
                     alert(`4: ${sheet}`)
                     // Messages.startEditMessage(channelId, messageId, messageContent)

                     hideActionSheet();
                  }} />,
               );

               res.props.children[1].props.children = children;
            });

            unpatcher();
         });

      });
   },


   onStop() {
      this.commands = [];
      Patcher.unpatchAll();
   },

   
};

registerPlugin(DoubleTapToEdit);