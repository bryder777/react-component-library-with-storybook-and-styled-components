// src/Button/Button.tsx
import React from 'react';
import styled from "styled-components";
import { ButtonProps, ButtonVariant } from "./Button.types"; // Import prop types and variant type

// Define background colors for each variant (primary and secondary)
const variantColors: Record<ButtonVariant, string> = {
    "primary": "#5f43b2",    // Purple color for primary buttons
    "secondary": "#A9A9A9"   // Grey color for secondary buttons
};

// Create a styled button using styled-components
// The $variant prop controls the background color of the button
const ButtonWrapper = styled.button<{ $variant: ButtonVariant }>`
    padding: 0.65rem 1rem; 
    border-radius: 4px; 
    cursor: pointer;
    outline: none; 
    border: none; 
    background: ${props => variantColors[props.$variant]}; 
    color: #fefdfd; 
    font-weight: 600; 
    transition: 0.15s ease-in-out; 
    pointer-events: auto; 
`;

// Create the Button component using React's forwardRef to allow ref forwarding
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props: ButtonProps, ref: any) => {
        const {
            variant = "primary",  // Default variant is set to 'primary'
            children,             // Button label or inner content
            ...rest               // Spread the rest of the props to handle other attributes (e.g., onClick)
        } = props;

        return (
            // Render the styled button with passed props and ref
            <ButtonWrapper {...rest} ref={ref} $variant={variant}>
                {children}
            </ButtonWrapper>
        );
    }
);

// Set a display name for the Button component, useful in React DevTools
Button.displayName = "Button"

export default Button;
