import { FormDivider, FormRow, ScrollView, FormSwitch, Form, FormSection } from 'enmity/components';
import { SettingsStore, getBoolean } from 'enmity/api/settings';
import { getIDByName } from 'enmity/api/assets';
import { React, Toasts, Constants, StyleSheet } from 'enmity/metro/common';
import { version, release} from '../../manifest.json';
import { bulk, filters, getByName, getByProps } from 'enmity/metro';

interface SettingsProps {
   settings: SettingsStore;
}

const [
    Router,
    Clipboard,
 ] = bulk(
    filters.byProps('transitionToGuild'),
    filters.byProps('setString'),
 );

export default ({ settings }: SettingsProps) => {
   const toastTrail = getIDByName('ic_selection_checked_24px');
   const styles = StyleSheet.createThemedStyleSheet({
        icon: {
        color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
        }
    });
   return <>
    <ScrollView>
        <FormSection title="Enable Dedicated Buttons">
            <FormRow
                label="Assets"
                subLabel="Show dedicated button to view Account Assets"
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('img_nitro_profile_banner')} />}
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('pfpBtn', false)}
                        onValueChange={() => {
                                settings.toggle('pfpBtn', false)
                                Toasts.open({ content: `Successfully ${settings.getBoolean('pfpBtn', false) ? 'enabled' : 'disabled'} dedicated Assets Button.`, source: toastTrail })
                            }
                        }
                    />
                }
            />
            <FormDivider />
            <FormRow
                label='Status'
                subLabel="Show dedicated button to copy a user's Status"
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('ic_passport_24px')} />}
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('statusBtn', false)}
                        onValueChange={() => {
                                settings.toggle('statusBtn', false)
                                Toasts.open({ content: `Successfully ${settings.getBoolean('statusBtn', false) ? 'enabled' : 'disabled'} dedicated Status Button.`, source: toastTrail });
                            }
                        }
                    />
                }
            />
        </FormSection>
        <FormDivider />
		<FormSection title="Disable Entire Plugin">
            <FormRow
                label='Disable Plugin'
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('ic_rulebook_16px')} />}
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('masterDisable', false)}
                        onValueChange={() => {
                                settings.toggle('masterDisable', false)
                                Toasts.open({ content: `Successfully ${settings.getBoolean('masterDisable', false) ? 'disabled' : 'enabled'} AccountInfo.`, source: toastTrail });
                            }
                        }
                    />
                }
            />
        </FormSection>
        <FormDivider />
        <FormSection title="Source Code">
            <FormRow
                label="Download"
                subLabel="Copy the link of the plugin to Clipboard"
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('toast_copy_link')} />}
                trailing={FormRow.Arrow}
                onPress={() => {
                    Clipboard.setString("https://raw.githubusercontent.com/acquitelol/account-info/main/dist/AccountInfo.js");
                    Toasts.open({ content: 'Copied to clipboard', source: getIDByName('pending-alert') });
                }}
            />
            <FormRow
                label="Source"
                subLabel="Open the Repo of the Plugin Externally"
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('ic_leave_stage')} />}
                trailing={FormRow.Arrow}
                onPress={() => {
                    Router.openURL("https://github.com/acquitelol/account-info")
                }}
            />
        </FormSection>
		<FormRow label={`Plugin Version: ${version}
Release Channel: ${release}`} />
    </ScrollView>
   </>
};