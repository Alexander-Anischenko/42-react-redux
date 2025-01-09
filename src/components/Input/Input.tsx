
import { ErrorMessage, InputStyle, InputWrapper, Label } from "./styles";
import type{ InputProps } from "./types";

function Input({ name, type = 'text', placeholder, label, id, value, onChange, error }: InputProps) {
    return (
        <InputWrapper>
            {/* Пример оператора условного рендеринга */}
            {label && <Label htmlFor={id}>{label}</Label>}
            <InputStyle
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                className="input-style"
                value={value}
                onChange={onChange}
            />
            <ErrorMessage>{error}</ErrorMessage>
            {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        </InputWrapper>
    );
}

export default Input;
