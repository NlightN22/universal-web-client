import React, {useState} from 'react';
import {
    AppShell,
    useMantineTheme, Text,
    Container
} from "@mantine/core";
import {useHotkeys} from "@mantine/hooks";
import './mock'
import {testHeaderLinks} from "./mock";
import FloatingLabelInput from "../../shared/components/inputs/FloatingLabelInput/FloatingLabelInput";
import {LeftSideBar} from "../../widget/LeftSideBar";
import {RightSideBar} from "../../widget/RightSideBar";
import {AppFooter} from "../../widget/AppFooter";
import { HeaderAction } from '../../widget/HeaderAction';

const TestPage = () => {
    const bgColor = useMantineTheme().colors.gray[2]
    const theme = useMantineTheme();
    const [openLeft, setOpenLeft] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    useHotkeys([
        ['ctrl+1', () => setOpenLeft(!openLeft)],
        ['ctrl+2', () => setOpenRight(!openRight)]
    ])
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <LeftSideBar visible={openLeft}  />
            }
            aside={
                <RightSideBar visible={openRight} />
            }
            footer={
                <AppFooter />
            }
            header={
                <HeaderAction links={testHeaderLinks.links}/>
            }
        >
            <Container fluid>
                <Text>Resize app to see responsive navbar in action</Text>
                <FloatingLabelInput label="Test label" placeholder="Test placeholder"/>
            </Container>
        </AppShell>
    );
};

export default TestPage;