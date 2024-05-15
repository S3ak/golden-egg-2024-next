import type { Meta, StoryObj } from "@storybook/react";
import Sparkles from "./index";

const meta: Meta<typeof Sparkles> = {
  component: Sparkles,
  tags: ["autodocs"],
  args: {},
  render: (args) => <Sparkles {...args} />,
};

export default meta;
type Story = StoryObj<typeof Sparkles>;

export const Default: Story = {};
