import React, {useEffect, useState} from 'react';
import {createStyles, Navbar, px, rem, Text, useMantineTheme} from "@mantine/core";
import {AppButton} from "../shared/components/buttons/AppButton/AppButton";
import {showInfo} from "../shared/components/notifications/info";

interface LeftSideBarProps {
    visible?: boolean,
}

const useStyles = createStyles((theme, {_visible}: { _visible: boolean }) => ({
    navbar: {
        transition: 'transform 0.3s ease-in-out',
        transform: _visible ? 'translateX(0)' : 'translateX(-100%)',
    },
    button: {
        flexDirection: "column",
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        transform: 'rotate(90deg)'
    }
}))

const getMantineSize = (size: string) => {
    const numberMatch = size.match(/(\d+(\.\d+)?)(?=em)/)

    if (numberMatch) {
        const number = Number(numberMatch[0])
        return px(`${number}rem`)
    } else {
        throw Error("Need em or rem mantine size number")
    }
}

export const LeftSideBar = ({visible}: LeftSideBarProps) => {
    const theme = useMantineTheme()
    const hideSize = theme.fn.smallerThan("sm")
    const sizePx = getMantineSize(hideSize)

    const [_visible, setVisible] = useState(() => window.innerWidth > sizePx)

    useEffect(() => {
        if (visible) setVisible(visible)
    }, [visible])

    const {classes} = useStyles({_visible})

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth <= sizePx && _visible) {
                setVisible(false)
                showInfo("invisible")
            }
            if (window.innerWidth > sizePx && !_visible) {
                setVisible(true)
                showInfo("visible")
            }
        }
        window.addEventListener('resize', checkWindowSize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    }, [visible, _visible])

    return (
        <Navbar className={classes.navbar} p="md"
                width={{
                    sm: 300,
                    lg: 400,
                }}
        >
            <AppButton onClick={() => setVisible(false)}>Hide</AppButton>
            <Text>Application navbar</Text>
        </Navbar>
    )
}

