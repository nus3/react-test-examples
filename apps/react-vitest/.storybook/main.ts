import { dirname, join } from "node:path";

import type { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	framework: {
		// HACK: "@storybook/react-vite"しか許可されていない部分をstringも許可するように
		// @ts-expect-error
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

	stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],

	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-interactions"),
	],

	staticDirs: ["../public"],

	async viteFinal(config) {
		return config;
	},

	docs: {
		autodocs: true,
	},
};

export default config;
