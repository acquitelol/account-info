const E=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const e=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const s=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const x=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const F=window.enmity.modules.common.Moment,{components:n}=window.enmity;n.Alert,n.Button,n.FlatList,n.Image,n.ImageBackground,n.KeyboardAvoidingView,n.Modal;const V=n.Pressable;n.RefreshControl;const Q=n.ScrollView;n.SectionList,n.StatusBar,n.StyleSheet,n.Switch;const T=n.Text;n.TextInput,n.TouchableHighlight,n.TouchableOpacity,n.TouchableWithoutFeedback,n.Touchable;const R=n.View;n.VirtualizedList,n.Form,n.FormArrow,n.FormCTA,n.FormCTAButton,n.FormCardSection,n.FormCheckbox;const p=n.FormDivider;n.FormHint,n.FormIcon,n.FormInput,n.FormLabel,n.FormRadio;const l=n.FormRow,_=n.FormSection;n.FormSelect,n.FormSubLabel;const v=n.FormSwitch;n.FormTernaryCheckBox,n.FormText,n.FormTextColors,n.FormTextSizes;function ee(t){window.enmity.plugins.registerPlugin(t)}function i(t){return window.enmity.assets.getIDByName(t)}const u={byProps:(...t)=>window.enmity.modules.filters.byProps(...t),byName:(t,o)=>window.enmity.modules.filters.byName(t,o),byTypeName:(t,o)=>window.enmity.modules.filters.byTypeName(t,o),byDisplayName:(t,o)=>window.enmity.modules.filters.byDisplayName(t,o)};function M(...t){return window.enmity.modules.bulk(...t)}function te(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;function ne(t){return window.enmity.patcher.create(t)}var oe="AccountInfo",k="1.6.4",le="Shows Account Information and Account Assets.",j="development",ae=[{name:"acquite",id:"581573474296791211"}],ie="#ff1f84",re={name:oe,version:k,description:le,release:j,authors:ae,color:ie};const[me,ce]=M(u.byProps("transitionToGuild"),u.byProps("setString"));var se=({settings:t})=>{const o=i("ic_selection_checked_24px"),a=x.createThemedStyleSheet({icon:{color:E.ThemeColorMap.INTERACTIVE_NORMAL}});return e.createElement(e.Fragment,null,e.createElement(Q,null,e.createElement(_,{title:"Enable Account Date Information"},e.createElement(l,{label:"Time of Creation",leading:e.createElement(l.Icon,{style:a.icon,source:i("ic_header_members_add_24px")}),trailing:e.createElement(v,{value:t.getBoolean("createBtn",!0),onValueChange:()=>{t.toggle("createBtn",!0),s.open({content:`Successfully ${t.getBoolean("createBtn",!0)?"enabled":"disabled"} time of Account Creation.`,source:o})}})}),e.createElement(p,null),e.createElement(l,{label:"Time of Joining Server",leading:e.createElement(l.Icon,{style:a.icon,source:i("ic_leave_24px")}),trailing:e.createElement(v,{value:t.getBoolean("joinBtn",!0),onValueChange:()=>{t.toggle("joinBtn",!0),s.open({content:`Successfully ${t.getBoolean("joinBtn",!0)?"enabled":"disabled"} time of Joining Server.`,source:o})}})})),e.createElement(p,null),e.createElement(_,{title:"Enable Dedicated Buttons"},e.createElement(l,{label:"Profile Picture",leading:e.createElement(l.Icon,{style:a.icon,source:i("img_nitro_profile_banner")}),trailing:e.createElement(v,{value:t.getBoolean("pfpBtn",!1),onValueChange:()=>{t.toggle("pfpBtn",!1),s.open({content:`Successfully ${t.getBoolean("pfpBtn",!1)?"enabled":"disabled"} dedicated PFP Button.`,source:o})}})}),e.createElement(p,null),e.createElement(l,{label:"Status",leading:e.createElement(l.Icon,{style:a.icon,source:i("ic_passport_24px")}),trailing:e.createElement(v,{value:t.getBoolean("statusBtn",!1),onValueChange:()=>{t.toggle("statusBtn",!1),s.open({content:`Successfully ${t.getBoolean("statusBtn",!1)?"enabled":"disabled"} dedicated Status Button.`,source:o})}})})),e.createElement(p,null),e.createElement(_,{title:"Disable Entire Plugin"},e.createElement(l,{label:"Disable Plugin",leading:e.createElement(l.Icon,{style:a.icon,source:i("ic_rulebook_16px")}),trailing:e.createElement(v,{value:t.getBoolean("masterDisable",!1),onValueChange:()=>{t.toggle("masterDisable",!1),s.open({content:`Successfully ${t.getBoolean("masterDisable",!1)?"disabled":"enabled"} AccountInfo.`,source:o})}})})),e.createElement(p,null),e.createElement(_,{title:"Source Code"},e.createElement(l,{label:"Download",leading:e.createElement(l.Icon,{style:a.icon,source:i("toast_copy_link")}),trailing:l.Arrow,onPress:()=>{ce.setString("https://raw.githubusercontent.com/acquitelol/account-info/main/dist/AccountInfo.js"),s.open({content:"Copied to clipboard",source:i("pending-alert")})}}),e.createElement(l,{label:"Source",leading:e.createElement(l.Icon,{style:a.icon,source:i("ic_leave_stage")}),trailing:l.Arrow,onPress:()=>{me.openURL("https://github.com/acquitelol/account-info")}})),e.createElement(l,{label:`Plugin Version: ${k}
Release Channel: ${j}`})))};function y(t,o,a){return window.enmity.settings.getBoolean(t,o,a)}const[U,ue,de,G,O,ge]=M(u.byDisplayName("UserProfileHeader",!1),u.byProps("getMember"),u.byProps("getGuild"),u.byProps("transitionToGuild"),u.byProps("setString"),u.byName("HeaderAvatar",!1)),C=ne("account-info"),H=te("getStatus","getState"),pe={...re,onStart(){C.instead(U,"default",(t,o,a)=>{var d,w,m,b;let f=y("AccountInfo","pfpBtn",!1),I=y("AccountInfo","statusBtn",!1),P=y("AccountInfo","createBtn",!0),L=y("AccountInfo","joinBtn",!0),Y=y("AccountInfo","masterDisable",!1);const[{user:r,channel:A,type:q}]=o;if(q!==0)return a.apply(t,o);const c=x.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:E.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:E.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:E.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:E.ThemeColorMap.TEXT_MUTED},icon:{color:E.ThemeColorMap.INTERACTIVE_NORMAL}}),z=i("img_nitro_profile_banner"),J=i("pending-alert"),K=i("toast_copy_link"),D=i("ic_header_members_add_24px"),N=i("ic_leave_24px"),S=A==null?void 0:A.guild_id,g=S&&ue.getMember(A.guild_id,r.id),$=S&&de.getGuild(A.guild_id),B=S?((d=g==null?void 0:g.getAvatarURL)==null?void 0:d.call(g,!1,4096,!0))||((w=r==null?void 0:r.getAvatarURL)==null?void 0:w.call(r,!1,4096,!0)):(m=r==null?void 0:r.getAvatarURL)==null?void 0:m.call(r,!1,4096,!0);if(!B)return a.apply(t,o);const W=r.discriminator%5,X=typeof B=="number"?`https://cdn.discordapp.com/embed/avatars/${W}.png`:B==null?void 0:B.replace(".webp",".png"),h=H.getActivities(r.id).find(Z=>Z.type===4);return Y?e.createElement(e.Fragment,null,a.apply(t,o)):e.createElement(e.Fragment,null,a.apply(t,o),e.createElement(R,{style:c.container},P||L?e.createElement(e.Fragment,null,e.createElement(T,{style:c.header},"Account Information"),e.createElement(R,{style:c.information},P&&e.createElement(e.Fragment,null,e.createElement(l,{label:"Created",leading:e.createElement(l.Icon,{style:c.icon,source:D}),onPress:()=>{s.open({content:F(r.createdAt).format("LLL"),source:D})},trailing:()=>e.createElement(T,{style:c.item},F(r.createdAt).fromNow())})),P&&L&&S&&g&&e.createElement(p,null),L&&S&&g&&e.createElement(e.Fragment,null,e.createElement(l,{label:`Joined ${(b=$==null?void 0:$.name)!=null?b:""}`,leading:e.createElement(l.Icon,{style:c.icon,source:N}),onPress:()=>{s.open({content:F(g.joinedAt).format("LLL"),source:N})},trailing:()=>e.createElement(T,{style:c.item},F(g.joinedAt).fromNow())})))):e.createElement(e.Fragment,null),f||I?e.createElement(e.Fragment,null,e.createElement(T,{style:c.header},"Account Assets"),e.createElement(R,{style:c.information},f&&e.createElement(l,{label:`View ${r.username}'s Profile Picture`,leading:e.createElement(l.Icon,{style:c.icon,source:z}),onPress:()=>{G.openURL(X)}}),f&&I&&e.createElement(p,null),h&&I&&e.createElement(e.Fragment,null,e.createElement(l,{label:`Copy ${r.username}'s Status`,leading:e.createElement(l.Icon,{style:c.icon,source:K}),onPress:()=>{O.setString(`${h.emoji.name?`:${h.emoji.name}:`:""} ${h.state?h.state:""}`),s.open({content:"Copied to clipboard",source:J})}})))):e.createElement(e.Fragment,null)))}),C.after(ge,"default",(t,[{user:o}],a)=>{var d;let w=y("AccountInfo","pfpBtn",!1);const m=(d=o==null?void 0:o.getAvatarURL)==null?void 0:d.call(o,!1,4096,!0);if(!m)return a;const b=o.discriminator%5,f=typeof m=="number"?`https://cdn.discordapp.com/embed/avatars/${b}.png`:m==null?void 0:m.replace(".webp",".png");return w?e.createElement(e.Fragment,null,a):e.createElement(V,{onPress:()=>G.openURL(f)},a)}),C.after(U,"default",(t,[{user:o}],a)=>{let d=y("AccountInfo","statusBtn",!1);const w=i("pending-alert"),m=H.getActivities(o.id).find(b=>b.type===4);return d?e.createElement(e.Fragment,null,a):e.createElement(e.Fragment,null,e.createElement(V,{onPress:()=>{O.setString(`${m.emoji.name?`:${m.emoji.name}:`:""} ${m.state?m.state:""}`),s.open({content:"Copied to clipboard",source:w})}},a))})},onStop(){C.unpatchAll()},getSettingsPanel({settings:t}){return e.createElement(se,{settings:t})}};ee(pe);
