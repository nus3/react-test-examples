module.exports = {
	framework: "@storybook/react",
	stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	staticDirs: ["../public"],
	core: {
		builder: "@storybook/builder-vite",
	},
	features: {
		storyStoreV7: true,
	},
	async viteFinal(config) {
		return config;
	},
};
