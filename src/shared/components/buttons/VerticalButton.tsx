import React from 'react';
import {Text, Button, ButtonProps, createStyles, useMantineTheme, Container} from "@mantine/core";

interface VerticalButtonProps extends ButtonProps {
    position: Position
}

export enum Position {
    TopToBottom,
    BottomToTop
}

const useStyles = createStyles((theme, {rotate}: { rotate: number }) => ({
    text: {
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        padding: "1em",
        paddingLeft: "1.5em",
        backgroundColor: theme.primaryColor,
        border: "none",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "1rem",
        margin: "4px 2px",
        cursor: "pointer"
    }
}))

export const VerticalButton = (props: VerticalButtonProps) => {
    const theme = useMantineTheme()
    let angle = 90
    const test = theme.fn.primaryColor()
    console.log("Test:", test)
    const {classes} = useStyles({rotate: angle})
    return (
        <Text className={classes.text} color={theme.colors.red[6]}> Test </Text>
    )
}

