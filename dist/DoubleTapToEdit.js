function t(o){window.enmity.plugins.registerPlugin(o)}function s(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function d(o){return window.enmity.patcher.create(o)}var w="DoubleTapToEdit",l="0.0.8",a="Allows you to Double Tap on a message to Edit it.",c=[{name:"acquite",id:"581573474296791211"}],u={name:w,version:l,description:a,authors:c};window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const r=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment,s("hasChannel");const e=d("double-tap-to-edit"),y={...u,onStart(){e.after(r,"sendMessage",(o,n,m)=>{const[i,g]=n;alert(`Channel ID 1: ${i}`),alert(`Message ID: ${o}`),alert(`Message ID: ${m}`),alert(`Message ID: ${o.id}`),alert(`Message ID: ${n}`),alert(`Message content: ${n[1].content}`)})},onStop(){document.removeEventListener("dblclick",()=>{}),e.unpatchAll()}};t(y);
