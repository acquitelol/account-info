function a(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const u=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function i(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function y(e){return window.enmity.patcher.create(e)}var h="DoubleTapToEdit",p="0.1.1",g="Allows you to Double Tap on a message to Edit it.",S=[{name:"acquite",id:"581573474296791211"}],F={name:h,version:p,description:g,authors:S};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const T=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const t=y("double-tap-to-edit"),b=i("openLazy","hideActionSheet"),v=i("getLastSelectedChannelId"),C={...F,onStart(){const e=t.before(b,"openLazy",({hideActionSheet:d},[s,r])=>{r==="LongPressUrl"&&s.then(l=>{t.after(l,"default",(L,A,n)=>{const m=n.props.children[1].props.children,c=n.props.children[0].props,w=v.getChannelId();m.unshift(u.createElement(T,{label:"Edit Message",onPress:()=>{alert(m),alert(c),alert(w),d()}})),n.props.children[1].props.children=m}),e()})})},onStop(){this.commands=[],t.unpatchAll()}};a(C);
