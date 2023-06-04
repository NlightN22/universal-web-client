import {Button, ButtonProps, createStyles, MantineTheme, useMantineTheme} from '@mantine/core';
import React from 'react';


const AppButton = (props: ButtonProps) => {
    return (
        <Button radius="lg" {...props} />
    );
};

export default AppButton;