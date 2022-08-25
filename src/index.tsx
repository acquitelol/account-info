import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { Messages, Users } from 'enmity/metro/common';
import { FormRow } from 'enmity/components';
import { sendReply } from "enmity/api/clyde";
import { githubProfileCommand } from './commands/githubplugin';
import { getUserInfo, getRepoInfo } from './utils';

const Patcher = create('double-tap-to-edit');
const LazyActionSheet = getByProps('openLazy', 'hideActionSheet');
const getLastSelectedChannelId = getByProps('getLastSelectedChannelId');


const DoubleTapToEdit: Plugin = {
   ...manifest,

   onStart() {

      const unpatcher = Patcher.before(LazyActionSheet, 'openLazy', ({ hideActionSheet }, [component, sheet]) => {
         if (sheet !== 'LongPressUrl') return;

         component.then(instance => {
            Patcher.after(instance, 'default', (_, args, res) => {
               const children = res.props.children[1].props.children;
               const link = res.props.children[0].props.title;
               const channelId = getLastSelectedChannelId.getChannelId();
               const regex = /^https?:\/\/(www\.)?github.com\/([\w.-]+)\/?(([\w.-]+)?)/;
               const m = regex.exec(link);

               if (!m) return;

               const [, , owner, name] = m;

               if (name && owner) {
                  children.unshift(
                     <FormRow label='View Repo Stats' onPress={() => {
                        getRepoInfo(owner, name).then(embed => {
                           sendReply(channelId ?? "0", { embeds: [embed] },
                              "Github",
                              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png");
                        });

                        hideActionSheet();
                     }} />,
                  );
               }

               if (owner) {
                  children.unshift(
                     <FormRow label='View Profile Stats' onPress={() => {
                        getUserInfo(owner).then(embed => {
                           sendReply(channelId ?? "0", { embeds: [embed] },
                              "Github",
                              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png");
                        });
                        
                        hideActionSheet();
                     }} />,
                  );
               }

               res.props.children[1].props.children = children;
            });

            unpatcher();
         });

      });
   },


   onStop() {
      document.removeEventListener('dblclick', doubleclickFunc)
      Patcher.unpatchAll();
   },

   
};

registerPlugin(DoubleTapToEdit);