type ButtonType = "button" | "submit" | "reset";


export interface ButtonProps {
    buttonName: string;
    type?: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
}
