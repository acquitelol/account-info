import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { React, Toasts } from "enmity/metro/common";
import Settings from "./components/Settings";
import manifest from "../manifest.json";
import { get } from "enmity/api/settings";
import { getIDByName } from "enmity/api/assets";

const ReactDevTools: Plugin = {
	...manifest,

	onStart() {
		if (get("ReactDevTools", "autoconnect")) {
			let code = `window.__enmityConnectToDevTools({ host: "${get(
				"ReactDevTools",
				"host"
			)}", port: ${get("ReactDevTools", "port")} })`;
			Toasts.open({
				content: `Connecting to ${get("ReactDevTools", "host")}`,
				source: getIDByName("check"),
			});
			eval(code);
		}
	},

	onStop() {},

	getSettingsPanel({ settings }) {
		return <Settings settings={settings} />;
	},
};

registerPlugin(ReactDevTools);
