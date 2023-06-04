import {Button, ButtonProps, createStyles, MantineTheme, useMantineTheme} from '@mantine/core';
import React, {MouseEventHandler} from 'react';

interface AppButtonProps extends ButtonProps {
    onClick?: () => void
}


export const AppButton = (props: AppButtonProps) => {
    return (
        <Button
            {...props}
            radius="lg"
            onClick={props.onClick}
        />
    )
}

