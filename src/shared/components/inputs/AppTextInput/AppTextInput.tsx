import React from 'react';
import {MantineTheme, TextInput, TextInputProps, useMantineTheme} from "@mantine/core";

const useTextInputStyle =  (theme: MantineTheme) => {
    return theme.colors.blue[5]
}

const AppTextInput = (props: TextInputProps) => {
    const theme = useMantineTheme()
    return (
        <TextInput style={{color: useTextInputStyle(theme)}} {...props} />
    );
};

export { AppTextInput };