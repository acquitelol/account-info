import { FormDivider, FormRow, ScrollView, FormSwitch, Form, FormSection } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, StyleSheet, Constants } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
           marginLeft: 15.5,
           marginRight: 15.5,
           marginTop: 17.5,
        },
        header: {
           color: Constants.ThemeColorMap.HEADER_SECONDARY,
           opacity: 0.975,
           fontFamily: Constants.Fonts.DISPLAY_BOLD,
           textTransform: 'uppercase',
           fontSize: 12.75,
           letterSpacing: 0.25
        },
        information: {
           borderRadius: 4,
           backgroundColor: Constants.ThemeColorMap.BACKGROUND_TERTIARY,
           marginTop: 10,
           marginBottom: 10
        },
        item: {
           color: Constants.ThemeColorMap.TEXT_MUTED
        },
        icon: {
           color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
        }
     });
   return <>
    <ScrollView style={styles.container}>
        <FormSection title="Enable Dedicated Buttons">
            <FormRow
                label='Profile Picture'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('pfpBtn', true)}
                        onValueChange={() => settings.toggle('pfpBtn', true)}
                    />
                }
            />
            <FormDivider />
            <FormRow
                label='Status'
                trailing={
                    <FormSwitch
                        value={settings.getBoolean('statusBtn', true)}
                        onValueChange={() => settings.toggle('statusBtn', true)}
                    />
                }
            />;
        </FormSection>
    </ScrollView>
   </>
};