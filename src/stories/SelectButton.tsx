import React from 'react';
import { Button } from '@chakra-ui/react';

export interface SelectButtonProps {
    title: string
    onClick?: () => void
    defaultValue?: string | number 
    buttonDirection?: "column" | "column-reverse" | "row" | "row-reverse"
    showTitle?: boolean
    isMulti?: boolean
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
}

export const SelectButton = ({
    size = 'small',
    backgroundColor,
    title = "SelectButton"
}: SelectButtonProps) => {
    return (
       <Button  style={{backgroundColor}}>
        {title}
       </Button>
    );
};
