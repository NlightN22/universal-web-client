import React, {FC, useState} from 'react';
import {LoginWidgetProps} from "../interface";
import {API} from "../../../../api";
import {Result} from "../../../../api/authorization/by-username/model/result";
import {Box, Group, PasswordInput, Space, Divider, Text, LoadingOverlay, useMantineTheme} from "@mantine/core";
import AppButton from "../../../../shared/components/buttons/AppButton/AppButton";
import {useForm} from "@mantine/form";
import './styles.scss'
import {showError} from "../../../../shared/components/notifications/error";
import {AppTextInput} from "../../../../shared/components/inputs";

const LoginWidget: FC<LoginWidgetProps> = ({
                                               logo,
                                               welcomeText = 'Welcome to the best company',
                                               onSuccess
                                           }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const theme = useMantineTheme()

    const form = useForm({
        initialValues: {
            phone: '',
            password: ''
        },

        validate: {
            phone: (value) => (/^\+\d{1,3}\d{4,}$/.test(value) ? null : 'Invalid phone'),
            password: (value) => (value === '' ? 'Password can not be empty' : null)
        },
    });

    const onSubmit = async (phone: string, password: string) => {
        setLoading(true)
        console.log('Click login')
        const result: Result = await API.authorization.byUsername(phone, password)
        console.log('Result:', result)
        if (!result.isSuccess) {
            showError(result.errorMessage?.toString() || '')
            setError(result.errorMessage?.toString() || '')
            console.log('Error message:', result.errorMessage)
        }
        if (result.isSuccess) onSuccess()
        setLoading(false)
    }

    return (
        <div>
            <Box
                className="loginWidget"
                miw={150}
                maw={500} mx="auto"
                sx={(theme) => ({
                    display: 'block',
                    backgroundColor: theme.colors.gray[0],
                    borderRadius: theme.radius.md,
                    padding: theme.spacing.xl
                })}
            >
                <LoadingOverlay visible={loading}/>
                <Text fz="xl" fw={700} align="center">{welcomeText}</Text>
                <Divider my="sm"/>
                <form
                    onSubmit={form.onSubmit((values) =>
                        onSubmit(values.phone, values.password)
                    )}>
                    <AppTextInput
                        label="Phone"
                        withAsterisk
                        type="tel"
                        placeholder="Your phone"
                        {...form.getInputProps('phone')}
                    />
                    <Space h="md"/>
                    <PasswordInput
                        label="Password"
                        withAsterisk
                        placeholder="Your password"
                        {...form.getInputProps('password')}
                    />
                    <Group position="right" mt="md">
                        <AppButton type="submit">Submit</AppButton>
                    </Group>
                </form>
                {error
                    ?
                    <div>
                        <Space h="md"/>
                        <Text fw={700} color={theme.colors.red[6]} align="center">{error}</Text>
                    </div>
                    :
                    <div/>
                }
            </Box>
        </div>
    );
};

export {LoginWidget};