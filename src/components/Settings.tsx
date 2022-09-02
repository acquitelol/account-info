import {
	FormRow,
	FormSwitch,
	FormInput,
	TextInput,
	View,
	FormSection,
	FormText,
	FormLabel,
} from "enmity/components";
import { SettingsStore, get } from "enmity/api/settings";
import { React, Toasts } from "enmity/metro/common";
import { getIDByName } from "enmity/api/assets";

interface SettingsProps {
	settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
	return (
		<View>
			<FormSection title="Connecting Settings">
				<FormInput
					value={settings.get("host", "192.168.1.212")}
					onChange={(s: string) => {
						if (s.split(".").length >= 4) {
							if (s.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
								Toasts.open({
									content: `Valid IP address`,
									source: getIDByName("check"),
								});
								settings.set("host", s);
							} else {
								Toasts.open({
									content: "Invalid IP address",
									source: getIDByName("Small"),
								});
							}
						}
					}}
					title="Local IP Address"
					placeholder="192.168.178.1"
				/>
				<FormInput
					value={settings.get("port", "8097")}
					onChange={(s: string) => {
						if (s.length > 0) {
							if (s.match(/^\d{1,5}$/)) {
								settings.set("port", s);
								Toasts.open({
									content: "Valid Port",
									source: getIDByName("check"),
								});
							} else {
								Toasts.open({
									content: "Invalid Port",
									source: getIDByName("Small"),
								});
							}
						}
					}}
					title="Port"
					placeholder="8097"
				/>
				<FormRow
					label="Connect"
					trailing={FormRow.Arrow}
					onPress={() => {
						let code = `window.__enmityConnectToDevTools({ host: "${get(
							"ReactDevTools",
							"host"
						)}", port: ${get("ReactDevTools", "port")} })`;
						Toasts.open({
							content: `Connecting to ${get("ReactDevTools", "host")}`,
							source: getIDByName("check"),
						});
						eval(code);
					}}
				/>
			</FormSection>
			<FormSection title="Experimental Settings">
				<FormRow
					label="Auto Connect"
					trailing={
						<FormSwitch
							value={settings.get("autoconnect", false)}
							onValueChange={(s: boolean) => settings.set("autoconnect", s)}
						/>
					}
				/>
			</FormSection>
			<FormRow label="If it doesn't connect, your PC's IP might be wrong use ipconfig in cmd" />
		</View>
	);
};
