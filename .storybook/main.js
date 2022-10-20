

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/stories/button",
    "../src/stories/card",
    "../src/stories/header",
    "../src/stories/page",
    "../src/stories/page",
    "../src/stories/select",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",

  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}