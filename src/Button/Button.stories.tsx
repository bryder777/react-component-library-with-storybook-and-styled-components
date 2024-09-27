// src/Button/Button.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";  // Import the Button component

// Meta configuration for the Button component
const meta: Meta<typeof Button> = {
    component: Button,            // The component you're writing stories for
    title: "MyLibrary/Button",     // Title used in Storybook navigation panel
    argTypes: {},                  // Optional: Customize controls or disable them for certain props
};

// Export meta to register the story in Storybook
export default meta;

// Define the type of the story based on the Button component
type Story = StoryObj<typeof Button>;

// Default story for the Button component
export const Default: Story = (args: any) => (
    <Button {...args}>Button</Button>  // Pass props to Button
);

// Default argument values to initialize the story
Default.args = {
    variant: "primary",  // Default variant is set to "primary"
};
