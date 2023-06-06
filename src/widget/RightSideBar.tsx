import React from 'react';
import {Aside, Navbar, Text} from "@mantine/core";



export const RightSideBar = () => {
    return (
        <Aside p="md" width={{sm: 200, lg: 300}}>
            <Text>Application sidebar</Text>
        </Aside>
    );
};

