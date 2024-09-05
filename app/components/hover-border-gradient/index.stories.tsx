import type { Meta, StoryObj } from "@storybook/react";
import { HoverBorderGradient } from "./index";

const meta: Meta<typeof HoverBorderGradient> = {
  component: HoverBorderGradient,
  tags: ["autodocs"],
  args: {},
  render: (args) => <HoverBorderGradient {...args} />,
};

export default meta;
type Story = StoryObj<typeof HoverBorderGradient>;

export const Default: Story = {};
