import { FormDivider, FormRow, ScrollView, FormSwitch, Form, FormSection } from 'enmity/components';
import { SettingsStore, getBoolean } from 'enmity/api/settings';
import { getIDByName } from 'enmity/api/assets';
import { React, Toasts } from 'enmity/metro/common';
import { version, release} from '../../manifest.json';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   const toastTrail = getIDByName('ic_selection_checked_24px');
   return <>
    <ScrollView>
        <FormSection title="Enable Account Date Information">
            <FormRow
                label='Time of Creation'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('createBtn', true)}
                        onValueChange={() => {
                                settings.toggle('createBtn', true)
                                Toasts.open({ content: 'Toggled Time of Creation', source: toastTrail });
                            }
                        }
                    />
                }
            />
            <FormDivider />
            <FormRow
                label='Time of Joining Server'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('joinBtn', true)}
                        onValueChange={() => {
                                settings.toggle('joinBtn', true)
                                Toasts.open({ content: 'Toggled Time of Joining Server', source: toastTrail });
                            }
                        }
                    />
                }
            />
        </FormSection>
        <FormSection title="Enable Dedicated Buttons">
            <FormRow
                label='Profile Picture'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('pfpBtn', false)}
                        onValueChange={() => {
                                settings.toggle('pfpBtn', false)
                                Toasts.open({ content: 'Toggled Profile Picture Button', source: toastTrail });
                            }
                        }
                    />
                }
            />
            <FormDivider />
            <FormRow
                label='Status'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('statusBtn', false)}
                        onValueChange={() => {
                                settings.toggle('statusBtn', false)
                                Toasts.open({ content: 'Toggled Status Button', source: toastTrail });
                            }
                        }
                    />
                }
            />
        </FormSection>
		<FormRow label={`Plugin Version: ${version}
Release Channel: ${release}`} />
    </ScrollView>
   </>
};