import React, {useState} from 'react';
import {
    AppShell, Grid, Navbar,
    useMantineTheme, Text, MediaQuery,
    Aside, Footer, Burger, Header
} from "@mantine/core";
import {useHotkeys} from "@mantine/hooks";
import {HeaderAction} from "../../features/header/header";
import './mock'
import {testHeaderLinks} from "./mock";

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
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!openLeft} width={{sm: 200, lg: 300}}>
                    <Text>Application navbar</Text>
                </Navbar>
            }
            aside={
                <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}} hidden={!openRight}>
                    <Text>Application sidebar</Text>
                </Aside>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <HeaderAction links={testHeaderLinks.links} />
            }
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
};

export default TestPage;