const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const A=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const c=window.enmity.modules.common.Moment,{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const d=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const g=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const R=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const r=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function _(o){window.enmity.plugins.registerPlugin(o)}function b(o){return window.enmity.assets.getIDByName(o)}const u={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,t)=>window.enmity.modules.filters.byName(o,t),byTypeName:(o,t)=>window.enmity.modules.filters.byTypeName(o,t),byDisplayName:(o,t)=>window.enmity.modules.filters.byDisplayName(o,t)};function P(...o){return window.enmity.modules.bulk(...o)}window.enmity.modules.common;function D(o){return window.enmity.patcher.create(o)}var M="AccountInfo",x="1.1.5",B="Shows Account Information and Account Assets.",k=[{name:"acquite",id:"581573474296791211"}],V={name:M,version:x,description:B,authors:k};const[U,G,O,H]=P(u.byDisplayName("UserProfileHeader",!1),u.byProps("getMember"),u.byProps("getGuild"),u.byProps("transitionToGuild")),v=D("account-info"),z={...V,onStart(){v.instead(U,"default",(o,t,w)=>{var h,T;const[{user:i,channel:a,type:E}]=t;alert(i.lastMessage);const s=(h=i==null?void 0:i.getAvatarURL)==null?void 0:h.call(i,!1,4096,!0);if(!s)return w.apply(o,t);const C=i.discriminator%5,L=typeof s=="number"?`https://cdn.discordapp.com/embed/avatars/${C}.png`:s==null?void 0:s.replace(".webp",".png");if(E!==0)return w.apply(o,t);const m=I.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:l.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:l.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:l.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:l.ThemeColorMap.TEXT_MUTED},icon:{color:l.ThemeColorMap.INTERACTIVE_NORMAL}}),N=b("img_nitro_profile_banner"),f=b("ic_header_members_add_24px"),S=b("ic_leave_24px"),y=a==null?void 0:a.guild_id,p=y&&G.getMember(a.guild_id,i.id),F=y&&O.getGuild(a.guild_id);return n.createElement(n.Fragment,null,w.apply(o,t),n.createElement(g,{style:m.container},n.createElement(d,{style:m.header},"Account Information"),n.createElement(g,{style:m.information},n.createElement(r,{label:"Created",leading:n.createElement(r.Icon,{style:m.icon,source:f}),onPress:()=>{A.open({content:c(i.createdAt).format("LLL"),source:f})},trailing:()=>n.createElement(d,{style:m.item},c(i.createdAt).fromNow())}),y&&p&&n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement(r,{label:`Joined ${(T=F==null?void 0:F.name)!=null?T:""}`,leading:n.createElement(r.Icon,{style:m.icon,source:S}),onPress:()=>{A.open({content:c(p.joinedAt).format("LLL"),source:S})},trailing:()=>n.createElement(d,{style:m.item},c(p.joinedAt).fromNow())}))),n.createElement(d,{style:m.header},"Account Assets"),n.createElement(g,{style:m.information},n.createElement(r,{label:`${i}'s Profile Picture`,leading:n.createElement(r.Icon,{style:m.icon,source:N}),onPress:()=>{H.openURL(L)}}))))})},onStop(){v.unpatchAll()}};_(z);
