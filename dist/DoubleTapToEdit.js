function i(e){window.enmity.plugins.registerPlugin(e)}function o(e){return window.enmity.patcher.create(e)}var s="DoubleTapToEdit",a="0.0.4",r="Allows you to Double Tap on a message to Edit it.",l=[{name:"acquite",id:"581573474296791211"}],m={name:s,version:a,description:r,authors:l};const u={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function d(...e){return window.enmity.modules.bulk(...e)}window.enmity.modules.common;const t=o("double-tap-to-edit"),[y]=d(u.byProps("sendMessage")),p={...m,onStart(){t.after(y,"sendMessage",(e,n,w)=>{alert("You have sent a message :skull:!")})},onStop(){t.unpatchAll()}};i(p);
