import React, {useState} from 'react';
import {Text, Center, createStyles, Loader, rem, TextInput, Tooltip} from "@mantine/core";
import {IconX} from '@tabler/icons-react'

interface FloatingInputProps {
    label?: string,
    placeholder?: string
}


const useStyles = createStyles((theme, {floating}: { floating: boolean }) => ({
    root: {
        position: 'relative',
    },

    label: {
        position: 'absolute',
        zIndex: 2,
        top: rem(7),
        left: theme.spacing.sm,
        pointerEvents: 'none',
        color: floating
            ? theme.colorScheme === 'dark'
                ? theme.white
                : theme.black
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[7],
        transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
        transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-28)})` : 'none',
        fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
        fontWeight: floating ? 500 : 400,
    },

    required: {
        transition: 'opacity 150ms ease',
        opacity: floating ? 1 : 0,
    },

    input: {
        '&::placeholder': {
            transition: 'color 150ms ease',
            color: !floating ? 'transparent' : undefined,
        },
    },

}));

const rightSection = (value: string, setValue:  React.Dispatch<React.SetStateAction<string>>) => {
    const iconStyle = createStyles((theme) => ({
        iconx: {
            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
            },
        }
    }))
    const {classes} = iconStyle()
    if (value) {
        return <IconX className={classes.iconx} size="1.5rem" stroke={1.5} onClick={()=>setValue('')}/>
    } else {
        return <div />
    }
}

const FloatingLabelInput = ({label = "Floating label", placeholder = "Floating placeholder"}: FloatingInputProps) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const {classes} = useStyles({floating: value.trim().length !== 0 || focused});
    return (
        <TextInput
            label={label}
            placeholder={placeholder}
            required
            classNames={classes}
            value={value}
            rightSection={ rightSection(value, setValue) }
            onChange={(event) => setValue(event.currentTarget.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="md"
            autoComplete="nope"
        />
    );
};

export default FloatingLabelInput;