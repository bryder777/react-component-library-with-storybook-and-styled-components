import React from 'react';
import type { Preview } from "@storybook/react";

const preview :Preview= {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story: any) => {
            return  (
                <Story />
            )

        }
    ],
};

export default preview;