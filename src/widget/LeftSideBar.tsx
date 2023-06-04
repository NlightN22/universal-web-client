import React from 'react';
import {Navbar, Text} from "@mantine/core";

interface LeftSideBarProps {
    visible: boolean
}

export const LeftSideBar = ({visible}: LeftSideBarProps) => {
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!visible} width={{sm: 200, lg: 300}}>
            <Text>Application navbar</Text>
        </Navbar>
    );
};

