import React, {FC, useState} from 'react';
import {LoginWidgetProps} from "../interface";
import {API} from "../../../../api";
import {Result} from "../../../../api/authorization/by-username/model/result";
import './styles.scss'
import {showError} from "../../../../shared/components/notifications/error";
import {LoginByPhoneWidget} from "../../../../widget/LoginByPhoneWidget";

const AuthByPhoneFeature: FC<LoginWidgetProps> = ({onSuccess}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

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
        < LoginByPhoneWidget loading={loading}
                             onSubmit={values => (onSubmit(values.phone, values.password))}
                             error={error}
        />
    )
}

export {AuthByPhoneFeature};