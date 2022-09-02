const b=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const e=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const r=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const Y=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const A=window.enmity.modules.common.Moment,{components:t}=window.enmity;t.Alert,t.Button,t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal;const q=t.Pressable;t.RefreshControl;const K=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const F=t.Text;t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable;const L=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox;const B=t.FormDivider;t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const l=t.FormRow,D=t.FormSection;t.FormSelect,t.FormSubLabel;const E=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function W(n){window.enmity.plugins.registerPlugin(n)}function d(n){return window.enmity.assets.getIDByName(n)}const u={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,o)=>window.enmity.modules.filters.byName(n,o),byTypeName:(n,o)=>window.enmity.modules.filters.byTypeName(n,o),byDisplayName:(n,o)=>window.enmity.modules.filters.byDisplayName(n,o)};function X(...n){return window.enmity.modules.bulk(...n)}function Q(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;function Z(n){return window.enmity.patcher.create(n)}var ee="AccountInfo",x="1.5.5",te="Shows Account Information and Account Assets.",M="development",ne=[{name:"acquite",id:"581573474296791211"}],oe="#ff1f84",le={name:ee,version:x,description:te,release:M,authors:ne,color:oe},ie=({settings:n})=>{const o=d("ic_selection_checked_24px");return e.createElement(e.Fragment,null,e.createElement(K,null,e.createElement(D,{title:"Enable Account Date Information"},e.createElement(l,{label:"Time of Creation",trailing:e.createElement(E,{value:n.getBoolean("createBtn",!0),onValueChange:()=>{n.toggle("createBtn",!0),r.open({content:"Toggled Time of Creation",source:o})}})}),e.createElement(B,null),e.createElement(l,{label:"Time of Joining Server",trailing:e.createElement(E,{value:n.getBoolean("joinBtn",!0),onValueChange:()=>{n.toggle("joinBtn",!0),r.open({content:"Toggled Time of Joining Server",source:o})}})})),e.createElement(D,{title:"Enable Dedicated Buttons"},e.createElement(l,{label:"Profile Picture",trailing:e.createElement(E,{value:n.getBoolean("pfpBtn",!1),onValueChange:()=>{n.toggle("pfpBtn",!1),r.open({content:"Toggled Profile Picture Button",source:o})}})}),e.createElement(B,null),e.createElement(l,{label:"Status",trailing:e.createElement(E,{value:n.getBoolean("statusBtn",!1),onValueChange:()=>{n.toggle("statusBtn",!1),r.open({content:"Toggled Status Button",source:o})}})})),e.createElement(D,{title:"Disable Entire Plugin"},e.createElement(l,{label:"Disable Plugin",trailing:e.createElement(E,{value:n.getBoolean("masterDisable",!1),onValueChange:()=>{n.toggle("masterDisable",!1),r.open({content:`Successfully ${n.getBoolean("masterDisable",!1)?"disabled":"enabled"} AccountInfo`,source:o})}})})),e.createElement(l,{label:`Plugin Version: ${x}
Release Channel: ${M}`})))};function g(n,o,a){return window.enmity.settings.getBoolean(n,o,a)}const[me,ae,re,k,ce,se,ue]=X(u.byDisplayName("UserProfileHeader",!1),u.byProps("getMember"),u.byProps("getGuild"),u.byProps("transitionToGuild"),u.byProps("setString"),u.byName("HeaderAvatar",!1),u.byProps("customStatusActivity")),R=Z("account-info"),de=Q("getStatus","getState"),ge={...le,onStart(){R.instead(me,"default",(n,o,a)=>{var w,v,c,h;console.log(ue);let y=g("AccountInfo","pfpBtn",!1),C=g("AccountInfo","statusBtn",!1),P=g("AccountInfo","createBtn",!0),I=g("AccountInfo","joinBtn",!0),$=g("AccountInfo","masterDisable",!1);const[{user:i,channel:S,type:U}]=o;if(U!==0)return a.apply(n,o);const m=Y.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:b.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:b.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:b.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:b.ThemeColorMap.TEXT_MUTED},icon:{color:b.ThemeColorMap.INTERACTIVE_NORMAL}}),j=d("img_nitro_profile_banner"),G=d("pending-alert"),H=d("toast_copy_link"),N=d("ic_header_members_add_24px"),_=d("ic_leave_24px"),p=S==null?void 0:S.guild_id,s=p&&ae.getMember(S.guild_id,i.id),V=p&&re.getGuild(S.guild_id),T=p?((w=s==null?void 0:s.getAvatarURL)==null?void 0:w.call(s,!1,4096,!0))||((v=i==null?void 0:i.getAvatarURL)==null?void 0:v.call(i,!1,4096,!0)):(c=i==null?void 0:i.getAvatarURL)==null?void 0:c.call(i,!1,4096,!0);if(!T)return a.apply(n,o);const O=i.discriminator%5,z=typeof T=="number"?`https://cdn.discordapp.com/embed/avatars/${O}.png`:T==null?void 0:T.replace(".webp",".png"),f=de.getActivities(i.id).find(J=>J.type===4);return $?e.createElement(e.Fragment,null,a.apply(n,o)):e.createElement(e.Fragment,null,a.apply(n,o),e.createElement(L,{style:m.container},P||I?e.createElement(e.Fragment,null,e.createElement(F,{style:m.header},"Account Information"),e.createElement(L,{style:m.information},P&&e.createElement(e.Fragment,null,e.createElement(l,{label:"Created",leading:e.createElement(l.Icon,{style:m.icon,source:N}),onPress:()=>{r.open({content:A(i.createdAt).format("LLL"),source:N})},trailing:()=>e.createElement(F,{style:m.item},A(i.createdAt).fromNow())})),P&&I&&p&&s&&e.createElement(B,null),I&&p&&s&&e.createElement(e.Fragment,null,e.createElement(l,{label:`Joined ${(h=V==null?void 0:V.name)!=null?h:""}`,leading:e.createElement(l.Icon,{style:m.icon,source:_}),onPress:()=>{r.open({content:A(s.joinedAt).format("LLL"),source:_})},trailing:()=>e.createElement(F,{style:m.item},A(s.joinedAt).fromNow())})))):e.createElement(e.Fragment,null),y||C?e.createElement(e.Fragment,null,e.createElement(F,{style:m.header},"Account Assets"),e.createElement(L,{style:m.information},y&&e.createElement(l,{label:`View ${i.username}'s Profile Picture`,leading:e.createElement(l.Icon,{style:m.icon,source:j}),onPress:()=>{k.openURL(z)}}),y&&C&&e.createElement(B,null),f&&C&&e.createElement(e.Fragment,null,e.createElement(l,{label:`Copy ${i.username}'s Status`,leading:e.createElement(l.Icon,{style:m.icon,source:H}),onPress:()=>{ce.setString(`${f.emoji.name?`:${f.emoji.name}:`:""} ${f.state?f.state:""}`),r.open({content:"Copied to clipboard",source:G})}})))):e.createElement(e.Fragment,null)))}),R.after(se,"default",(n,[{user:o}],a)=>{var w;let v=g("AccountInfo","pfpBtn",!1);const c=(w=o==null?void 0:o.getAvatarURL)==null?void 0:w.call(o,!1,4096,!0);if(!c)return a;const h=o.discriminator%5,y=typeof c=="number"?`https://cdn.discordapp.com/embed/avatars/${h}.png`:c==null?void 0:c.replace(".webp",".png");return v?e.createElement(e.Fragment,null,a):e.createElement(q,{onPress:()=>k.openURL(y)},a)})},onStop(){R.unpatchAll()},getSettingsPanel({settings:n}){return e.createElement(ie,{settings:n})}};W(ge);
