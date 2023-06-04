import {notifications} from "@mantine/notifications";

export const showInfo = (text: string) => {
    notifications.show({
        message: text,
        color: 'blue'
    })
}