/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */

module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["unused-imports", "testing-library"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"next/core-web-vitals",
		"prettier",
	],
	overrides: [
		{
			files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
			extends: ["plugin:testing-library/react"],
		},
	],
	rules: {
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					["parent", "sibling"],
					"object",
					"type",
					"index",
				],
				"newlines-between": "always",
				pathGroupsExcludedImportTypes: ["builtin"],
				alphabetize: { order: "asc", caseInsensitive: true },
				pathGroups: [
					{ pattern: "components/**", group: "internal", position: "before" },
					// styles
					{ pattern: "./**.module.css", group: "index", position: "before" },
				],
			},
		],
		"unused-imports/no-unused-imports-ts": "warn",
		"react/self-closing-comp": [
			"error",
			{
				component: true,
				html: true,
			},
		],
		"@next/next/no-img-element": "off",
		"@next/next/no-html-link-for-pages": "off",
	},
};
