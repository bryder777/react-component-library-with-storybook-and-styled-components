// src/Button/Button.types.ts

import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}

export type ButtonVariant = "primary" | "secondary";
