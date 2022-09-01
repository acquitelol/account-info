const f=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const e=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const g=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const z=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const v=window.enmity.modules.common.Moment,{components:t}=window.enmity;t.Alert,t.Button,t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal;const _=t.Pressable;t.RefreshControl;const K=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const h=t.Text;t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable;const C=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox;const B=t.FormDivider;t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const r=t.FormRow,Y=t.FormSection;t.FormSelect,t.FormSubLabel;const N=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function j(o){window.enmity.plugins.registerPlugin(o)}function s(o){return window.enmity.assets.getIDByName(o)}const d={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function q(...o){return window.enmity.modules.bulk(...o)}function W(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function X(o){return window.enmity.patcher.create(o)}var J="AccountInfo",Q="Test 1.3.5",Z="Shows Account Information and Account Assets.",ee=[{name:"acquite",id:"581573474296791211"}],te="#ff1f84",oe={name:J,version:Q,description:Z,authors:ee,color:te},ne=({settings:o})=>{const n=s("ic_selection_checked_24px");return e.createElement(e.Fragment,null,e.createElement(K,null,e.createElement(Y,{title:"Enable Dedicated Buttons"},e.createElement(r,{label:"Profile Picture",trailing:e.createElement(N,{value:o.getBoolean("pfpBtn",!1),onValueChange:()=>{o.toggle("pfpBtn",!1),g.open({content:"Toggled Profile Picture Button",source:n})}})}),e.createElement(B,null),e.createElement(r,{label:"Status",trailing:e.createElement(N,{value:o.getBoolean("statusBtn",!1),onValueChange:()=>{o.toggle("statusBtn",!1),g.open({content:"Toggled Status Button",source:n})}})}))))};function F(o,n,m){return window.enmity.settings.getBoolean(o,n,m)}const[ie,me,le,D,x,re,ae]=q(d.byDisplayName("UserProfileHeader",!1),d.byProps("getMember"),d.byProps("getGuild"),d.byProps("transitionToGuild"),d.byProps("setString"),d.byName("HeaderAvatar",!1),d.byName("CustomStatusSection",!1)),T=X("account-info"),M=W("getStatus","getState"),ce={...oe,onStart(){T.instead(ie,"default",(o,n,m)=>{var c,u,a,w;let p=F("AccountInfo","pfpBtn",!1),A=F("AccountInfo","statusBtn",!1);const[{user:i,channel:b,type:k}]=n;if(k!==0)return m.apply(o,n);const l=z.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:f.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:f.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:f.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:f.ThemeColorMap.TEXT_MUTED},icon:{color:f.ThemeColorMap.INTERACTIVE_NORMAL}}),V=s("img_nitro_profile_banner"),U=s("pending-alert"),G=s("toast_copy_link"),P=s("ic_header_members_add_24px"),L=s("ic_leave_24px"),E=b==null?void 0:b.guild_id,y=E&&me.getMember(b.guild_id,i.id),I=E&&le.getGuild(b.guild_id),S=E?((c=y==null?void 0:y.getAvatarURL)==null?void 0:c.call(y,!1,4096,!0))||((u=i==null?void 0:i.getAvatarURL)==null?void 0:u.call(i,!1,4096,!0)):(a=i==null?void 0:i.getAvatarURL)==null?void 0:a.call(i,!1,4096,!0);if(!S)return m.apply(o,n);const H=i.discriminator%5,$=typeof S=="number"?`https://cdn.discordapp.com/embed/avatars/${H}.png`:S==null?void 0:S.replace(".webp",".png"),R=M.getActivities(i.id).find(O=>O.type===4);return e.createElement(e.Fragment,null,m.apply(o,n),e.createElement(C,{style:l.container},e.createElement(h,{style:l.header},"Account Information"),e.createElement(C,{style:l.information},e.createElement(r,{label:"Created",leading:e.createElement(r.Icon,{style:l.icon,source:P}),onPress:()=>{g.open({content:v(i.createdAt).format("LLL"),source:P})},trailing:()=>e.createElement(h,{style:l.item},v(i.createdAt).fromNow())}),E&&y&&e.createElement(e.Fragment,null,e.createElement(B,null),e.createElement(r,{label:`Joined ${(w=I==null?void 0:I.name)!=null?w:""}`,leading:e.createElement(r.Icon,{style:l.icon,source:L}),onPress:()=>{g.open({content:v(y.joinedAt).format("LLL"),source:L})},trailing:()=>e.createElement(h,{style:l.item},v(y.joinedAt).fromNow())}))),p||A?e.createElement(e.Fragment,null,e.createElement(h,{style:l.header},"Account Assets"),e.createElement(C,{style:l.information},p&&e.createElement(r,{label:`View ${i.username}'s Profile Picture`,leading:e.createElement(r.Icon,{style:l.icon,source:V}),onPress:()=>{D.openURL($)}}),p&&A&&e.createElement(B,null),R&&A&&e.createElement(e.Fragment,null,e.createElement(r,{label:`Copy ${i.username}'s Status`,leading:e.createElement(r.Icon,{style:l.icon,source:G}),onPress:()=>{x.setString(R.state),g.open({content:"Copied to clipboard",source:U})}})))):e.createElement(e.Fragment,null)))}),T.after(re,"default",(o,[{user:n}],m)=>{var c;let u=F("AccountInfo","pfpBtn",!1);const a=(c=n==null?void 0:n.getAvatarURL)==null?void 0:c.call(n,!1,4096,!0);if(!a)return m;const w=n.discriminator%5,p=typeof a=="number"?`https://cdn.discordapp.com/embed/avatars/${w}.png`:a==null?void 0:a.replace(".webp",".png");return u?e.createElement(_,{onPress:()=>D.openURL(p)},m):e.createElement(e.Fragment,null,m)}),T.after(ae,"default",(o,[{user:n}],m)=>{let c=F("AccountInfo","statusBtn",!1);const u=s("pending-alert"),a=M.getActivities(n.id).find(w=>w.type===4);return c?e.createElement(_,{onPress:()=>{x.setString(a.state),g.open({content:"Copied to clipboard",source:u})}},m):e.createElement(e.Fragment,null,m)})},onStop(){T.unpatchAll()},getSettingsPanel({settings:o}){return e.createElement(ne,{settings:o})}};j(ce);
