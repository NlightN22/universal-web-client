import React, {useState} from 'react';
import {Avatar, createStyles, Group, Menu, rem, UnstyledButton, Text} from "@mantine/core";

interface UserMenuProps {
    user: { name: string; image: string }
}

const useStyles = createStyles((theme) => ({
    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
    },

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
}));

const UserMenu = ({user}: UserMenuProps) => {
    const { classes, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                >
                    <Group spacing={7}>
                        <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                        <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                            {user.name}
                        </Text>
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>
                    Liked posts
                </Menu.Item>
                <Menu.Item>
                    Saved posts
                </Menu.Item>
                <Menu.Item>
                    Your comments
                </Menu.Item>

                <Menu.Label>Settings</Menu.Label>
                <Menu.Item>
                    Account settings
                </Menu.Item>
                <Menu.Item>
                    Change account
                </Menu.Item>
                <Menu.Item>Logout</Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item>
                    Pause subscription
                </Menu.Item>
                <Menu.Item>
                    Delete account
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default UserMenu;