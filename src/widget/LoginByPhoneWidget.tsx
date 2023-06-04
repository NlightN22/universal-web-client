import React from 'react';
import {Box, Divider, Group, LoadingOverlay, PasswordInput, Space, Text, useMantineTheme} from "@mantine/core";
import {AppTextInput} from "../shared/components/inputs";
import AppButton from "../shared/components/buttons/AppButton/AppButton";
import {useForm, UseFormReturnType} from "@mantine/form";
import { IconPhotoOff } from '@tabler/icons-react';

interface FormValues {
    phone: string,
    password: string
}

interface FieldProps {
    label: string,
    placeholder: string
}

interface LoginWidgetProps {
    loading: boolean,
    onSubmit: (values: FormValues) => void,
    firstInput?: FieldProps,
    secondInput?: FieldProps,
    logo?: JSX.Element,
    welcomeText?: string,
    error?: string,
}



export const LoginByPhoneWidget = ({
                                loading,
                                onSubmit,
                                firstInput = {label: "Phone", placeholder: "+11111111111111"},
                                secondInput = {label: "Password", placeholder: "Your password"},
                                logo = <IconPhotoOff />,
                                welcomeText = 'Welcome to the best company',
                                error
                            }: LoginWidgetProps) => {
    const theme = useMantineTheme()

    const form = useForm<FormValues>({
        initialValues: {
            phone: '',
            password: ''
        },

        validate: {
            phone: (value) => (/^\+\d{1,3}\d{4,}$/.test(value) ? null : 'Invalid phone'),
            password: (value) => (value === '' ? 'Password can not be empty' : null)
        },
    });

    return (
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
            {logo}
            <Text fz="xl" fw={700} align="center">{welcomeText}</Text>
            <Divider my="sm"/>
            <form
                onSubmit={form.onSubmit((values) =>
                    onSubmit(values)
                )}>
                <AppTextInput
                    label={firstInput?.label}
                    withAsterisk
                    type="text"
                    placeholder={firstInput?.placeholder}
                    {...form.getInputProps('phone')}
                />
                <Space h="md"/>
                <PasswordInput
                    label={secondInput?.label}
                    withAsterisk
                    placeholder={secondInput?.placeholder}
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
    )
}