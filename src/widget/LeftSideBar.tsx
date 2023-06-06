import React, {useEffect, useRef} from 'react';
import {createStyles, Navbar, px, Text, useMantineTheme} from "@mantine/core";
import {AppButton} from "../shared/components/buttons/AppButton/AppButton";
import {showInfo} from "../shared/components/notifications/info";
import {useDisclosure} from "@mantine/hooks";
import {IconArrowBadgeRight} from '@tabler/icons-react';

interface LeftSideBarProps {
    isHidden: (isHidden: boolean) => void
}

const useStyles = createStyles((theme,
                                {visible}: { visible: boolean }) => ({
    navbar: {
        transition: 'transform 0.3s ease-in-out',
        transform: visible ? 'translateX(0)' : 'translateX(-100%)',
    },
    button: {
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
        margin: "0",
        padding: "0",
        paddingLeft: "0.7em",
        position: "fixed",
        left: "-1em",
        top: "50%",
        height: "5em",
        width: "2.5em",
        transition: 'transform 0.3s ease-in-out',
        transform: !visible ? 'translateX(0)' : 'translateX(-100%)',

        ul: {
            paddingLeft: "0em"
        }
    }
}))

const useMantineSize = (size: string) => {
    const theme = useMantineTheme()
    const hideSize = theme.fn.smallerThan(size)
    const numberMatch = hideSize.match(/(\d+(\.\d+)?)(?=em)/)

    if (numberMatch) {
        const number = Number(numberMatch[0])
        return px(`${number}rem`)
    } else {
        throw Error("Need em or rem mantine size number")
    }
}

export const LeftSideBar = ({isHidden}: LeftSideBarProps) => {
    const sizePx = useMantineSize("sm")
    const [visible, {open, close}] = useDisclosure(window.innerWidth > sizePx);
    const manualVisible: React.MutableRefObject<null | boolean> = useRef(null)

    const navbarRef = useRef<HTMLElement>(null)

    const {classes} = useStyles({visible})

    const handleClickVisible = (state: boolean) => {
        console.log("change state:", state)
        manualVisible.current = state
        if (state) open()
        else close()
    }

    useEffect(() => {
        console.log("visible:", visible)
        isHidden(!visible)
    }, [visible])

    useEffect(() => {
        console.log("manualVisible.current", manualVisible.current)
    }, [manualVisible.current])


    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth <= sizePx && visible) {
                // setVisible(false)
                close()
                showInfo("invisible")
            }
            if (window.innerWidth > sizePx && !visible && manualVisible.current === null) {
                // setVisible(true)
                open()
                showInfo("visible")
            }
        }
        window.addEventListener('resize', checkWindowSize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    }, [visible])

    return (
        <div>
            <Navbar ref={navbarRef}
                    className={classes.navbar}
                    p="md"
                    width={{
                        sm: 300,
                        lg: 400,
                    }}
            >
                <AppButton onClick={() => handleClickVisible(false)}>Hide</AppButton>
                <Text>Application navbar</Text>
            </Navbar>
            <AppButton onClick={() => handleClickVisible(true)} className={classes.button}>
                <ul>
                    <li><IconArrowBadgeRight/></li>
                    <li><IconArrowBadgeRight/></li>
                </ul>
            </AppButton>
        </div>
    )
}

