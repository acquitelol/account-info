const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const A=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const d=window.enmity.modules.common.Moment,{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const u=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const T=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const D=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const r=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function I(o){window.enmity.plugins.registerPlugin(o)}function w(o){return window.enmity.assets.getIDByName(o)}const a={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,t)=>window.enmity.modules.filters.byName(o,t),byTypeName:(o,t)=>window.enmity.modules.filters.byTypeName(o,t),byDisplayName:(o,t)=>window.enmity.modules.filters.byDisplayName(o,t)};function P(...o){return window.enmity.modules.bulk(...o)}window.enmity.modules.common;function M(o){return window.enmity.patcher.create(o)}var x="AccountInfo",B="0.0.2",k="Successor to UserDetails by eternal#1000",U=[{name:"acquite",id:"581573474296791211"}],V={name:x,version:B,description:k,authors:U};const[G,O,z,Y,H]=P(a.byDisplayName("UserProfileHeader",!1),a.byProps("getMember"),a.byProps("getGuild"),a.byName("ProfileBanner",!1),a.byProps("transitionToGuild")),E=M("account-info"),$={...V,onStart(){E.instead(G,"default",(o,t,y)=>{var h,f;const[{user:i,channel:s,type:C,bannerSource:p}]=t,c=(h=i==null?void 0:i.getAvatarURL)==null?void 0:h.call(i,!1,4096,!0);if(!c)return y.apply(o,t);const L=i.discriminator%5;if(typeof c=="number"?`${L}`:c==null||c.replace(".webp",".png"),C!==0||typeof(p==null?void 0:p.uri)!="string")return y.apply(o,t);const N=p.uri.replace(/(?:\?size=\d{3,4})?$/,"?size=4096").replace(".webp",".png"),m=R.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:l.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:l.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:l.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10},item:{color:l.ThemeColorMap.TEXT_MUTED},icon:{color:l.ThemeColorMap.INTERACTIVE_NORMAL}});w("friends_toast_icon");const _=w("img_nitro_profile_banner"),S=w("ic_header_members_add_24px"),F=w("ic_leave_24px"),g=s==null?void 0:s.guild_id,b=g&&O.getMember(s.guild_id,i.id),v=g&&z.getGuild(s.guild_id);return n.createElement(n.Fragment,null,y.apply(o,t),n.createElement(T,{style:m.container},n.createElement(u,{style:m.header},"Account Information"),n.createElement(T,{style:m.information},n.createElement(r,{label:"Created",leading:n.createElement(r.Icon,{style:m.icon,source:S}),onPress:()=>{A.open({content:d(i.createdAt).format("LLL"),source:S})},trailing:()=>n.createElement(u,{style:m.item},d(i.createdAt).fromNow())}),g&&b&&n.createElement(n.Fragment,null,n.createElement(D,null),n.createElement(r,{label:`Joined ${(f=v==null?void 0:v.name)!=null?f:""}`,leading:n.createElement(r.Icon,{style:m.icon,source:F}),onPress:()=>{A.open({content:d(b.joinedAt).format("LLL"),source:F})},trailing:()=>n.createElement(u,{style:m.item},d(b.joinedAt).fromNow())}))),n.createElement(u,{style:m.header},"Account Assets"),n.createElement(T,{style:m.information},n.createElement(r,{label:`${i.name}'s Banner`,leading:n.createElement(r.Icon,{style:m.icon,source:_}),onPress:()=>{H.openURL(N)}}))))})},onStop(){E.unpatchAll()}};I($);
