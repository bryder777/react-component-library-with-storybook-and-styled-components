import type {StorybookConfig} from "@storybook/react-webpack5"


const config: StorybookConfig = {
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials",
        "@storybook/addon-interactions", "@storybook/addon-webpack5-compiler-babel"],
}

export default config;