import { FormDivider, FormRow, ScrollView, FormSwitch, Form, FormSection } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <>
    <ScrollView>
        <FormSection title="Enable Dedicated Buttons">
            <FormRow
                label='Profile Picture'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('pfpBtn', false)}
                        onValueChange={() => settings.toggle('pfpBtn')}
                    />
                }
            />
            <FormDivider />
            <FormRow
                label='Status'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('statusBtn', false)}
                        onValueChange={() => settings.toggle('statusBtn')}
                    />
                }
            />
        </FormSection>
    </ScrollView>
   </>
};