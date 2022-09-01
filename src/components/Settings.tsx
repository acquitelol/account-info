import { FormDivider, FormRow, ScrollView, FormSwitch, Form, FormSection } from 'enmity/components';
import { SettingsStore, getBoolean } from 'enmity/api/settings';
import { getIDByName } from 'enmity/api/assets';
import { React, Toasts } from 'enmity/metro/common';


interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   const toastTrail = getIDByName('ic_selection_checked_24px');
   return <>
    <ScrollView>
        <FormSection title="Enable Dedicated Buttons">
            <FormRow
                label='Profile Picture'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('pfpBtn', false)}
                        onValueChange={() => {
                                settings.toggle('pfpBtn', false)
                                Toasts.open({ content: 'Copied to clipboard', source: toastTrail });
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
                                Toasts.open({ content: 'Copied to clipboard', source: toastTrail });
                            }
                        }
                    />
                }
            />
        </FormSection>
    </ScrollView>
   </>
};