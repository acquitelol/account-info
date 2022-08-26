const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const C=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const c=window.enmity.modules.common.Moment,{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const d=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const h=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const L=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const r=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function k(n){window.enmity.plugins.registerPlugin(n)}function u(n){return window.enmity.assets.getIDByName(n)}const w={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,m)=>window.enmity.modules.filters.byName(n,m),byTypeName:(n,m)=>window.enmity.modules.filters.byTypeName(n,m),byDisplayName:(n,m)=>window.enmity.modules.filters.byDisplayName(n,m)};function U(...n){return window.enmity.modules.bulk(...n)}window.enmity.modules.common;function V(n){return window.enmity.patcher.create(n)}var z="AccountInfo",O="1.1.1",G="Successor to UserDetails by eternal#1000",H=[{name:"acquite",id:"581573474296791211"}],$={name:z,version:O,description:G,authors:H};const[Y,j,K,N]=U(w.byDisplayName("UserProfileHeader",!1),w.byProps("getMember"),w.byProps("getGuild"),w.byProps("transitionToGuild")),_=V("account-info"),q={...$,onStart(){_.instead(Y,"default",(n,m,y)=>{var T,f;const[{user:i,channel:a,type:R,bannerSource:p}]=m,S=(A=>A.slice(0).charAt(0).toUpperCase()+A.slice(1))(i.username),s=(T=i==null?void 0:i.getAvatarURL)==null?void 0:T.call(i,!1,4096,!0);if(!s)return y.apply(n,m);const P=i.discriminator%5,D=typeof s=="number"?`https://cdn.discordapp.com/embed/avatars/${P}.png`:s==null?void 0:s.replace(".webp",".png");if(R!==0||typeof(p==null?void 0:p.uri)!="string")return y.apply(n,m);const I=p.uri.replace(/(?:\?size=\d{3,4})?$/,"?size=4096").replace(".webp",".png"),t=B.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:l.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:l.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:l.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:l.ThemeColorMap.TEXT_MUTED},icon:{color:l.ThemeColorMap.INTERACTIVE_NORMAL}}),x=u("friends_toast_icon"),M=u("img_nitro_profile_banner"),F=u("ic_header_members_add_24px"),E=u("ic_leave_24px"),g=a==null?void 0:a.guild_id,b=g&&j.getMember(a.guild_id,i.id),v=g&&K.getGuild(a.guild_id);return o.createElement(o.Fragment,null,y.apply(n,m),o.createElement(h,{style:t.container},o.createElement(d,{style:t.header},"Account Information"),o.createElement(h,{style:t.information},o.createElement(r,{label:"Created",leading:o.createElement(r.Icon,{style:t.icon,source:F}),onPress:()=>{C.open({content:c(i.createdAt).format("LLL"),source:F})},trailing:()=>o.createElement(d,{style:t.item},c(i.createdAt).fromNow())}),g&&b&&o.createElement(o.Fragment,null,o.createElement(L,null),o.createElement(r,{label:`Joined ${(f=v==null?void 0:v.name)!=null?f:""}`,leading:o.createElement(r.Icon,{style:t.icon,source:E}),onPress:()=>{C.open({content:c(b.joinedAt).format("LLL"),source:E})},trailing:()=>o.createElement(d,{style:t.item},c(b.joinedAt).fromNow())}))),o.createElement(d,{style:t.header},"Account Assets"),o.createElement(h,{style:t.information},o.createElement(r,{label:`${S}' Profile Picture`,leading:o.createElement(r.Icon,{style:t.icon,source:x}),onPress:()=>{N.openURL(D)}}),o.createElement(L,null),o.createElement(r,{label:`${S}' Banner`,leading:o.createElement(r.Icon,{style:t.icon,source:M}),onPress:()=>{N.openURL(I)}}))))})},onStop(){_.unpatchAll()}};k(q);
