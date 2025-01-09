import type { ChangeEvent } from "react";

export interface InputProps {
    name: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    id?: string;
    label?: string;
    value?: string | number | readonly string[] | undefined;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void//React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
}
