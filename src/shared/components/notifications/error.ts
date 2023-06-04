import {notifications} from "@mantine/notifications";

export const showError = (text: string) => {
    notifications.show({
        message: text,
        color: 'red'
    })
}

