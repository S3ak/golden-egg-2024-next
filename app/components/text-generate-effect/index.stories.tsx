import type { Meta, StoryObj } from "@storybook/react";
import TextGenerateEffect from "./index";

const meta: Meta<typeof TextGenerateEffect> = {
  component: TextGenerateEffect,
  tags: ["autodocs"],
  args: {
    words: "Hello World",
  },
  render: (args) => <TextGenerateEffect {...args} />,
};

export default meta;
type Story = StoryObj<typeof TextGenerateEffect>;

export const Default: Story = {};
