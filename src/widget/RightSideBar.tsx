import React from 'react';
import {Aside, Navbar, Text} from "@mantine/core";

interface RightSideBarProps {
    visible: boolean
}

export const RightSideBar = ({visible}: RightSideBarProps) => {
    return (
        <Aside p="md" width={{sm: 200, lg: 300}}>
            <Text>Application sidebar</Text>
        </Aside>
    );
};

