import React, {useState} from 'react';
import {
    AppShell,
    useMantineTheme, Text,
    Container, Flex, rem, createStyles
} from "@mantine/core";
import './mock'
import {testHeaderLinks} from "./mock";
import FloatingLabelInput from "../../shared/components/inputs/FloatingLabelInput/FloatingLabelInput";
import {LeftSideBar} from "../../widget/LeftSideBar";
import {RightSideBar} from "../../widget/RightSideBar";
import {AppFooter} from "../../widget/AppFooter";
import {HeaderAction} from '../../widget/HeaderAction';
import {useDisclosure} from "@mantine/hooks";


const useStyles = createStyles((theme, leftSideBar:boolean) => ({

    fab_container: {
        display: "flex",
        listStyle: "none",
        margin: "0",
        padding: "0",
        // Display button to the bottom right
        position: "fixed",
        left: "3em",
        top: "50%",
    }
}))

const TestPage = () => {
    const [leftSideBar, setLeftSidebar] = useState(true)
    const [rightSideBar, setRightSidebar] = useState(true)

    const {classes} = useStyles(leftSideBar)

    const leftSideBarIsHidden = (isHidden: boolean) => {
        console.log("leftSideBarIsHidden:", isHidden)
        setLeftSidebar(!isHidden)
    }

    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    paddingLeft: !leftSideBar ? "3em" : '',
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <LeftSideBar isHidden={leftSideBarIsHidden}/>
            }

            // aside={
            //     <RightSideBar />
            // }

            // footer={
            //     <AppFooter/>
            // }
            header={
                <HeaderAction links={testHeaderLinks.links}/>
            }
        >
            <div style={{display: 'flex', height: '100%'}} >
                <Text>Resize app to see responsive navbar in action</Text>
                <FloatingLabelInput label="Test label" placeholder="Test placeholder"/>
            </div>
        </AppShell>
    )
}

export default TestPage;