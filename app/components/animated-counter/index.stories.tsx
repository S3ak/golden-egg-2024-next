import type { Meta, StoryObj } from "@storybook/react";
import AnimatedCounter from "./index";

const meta: Meta<typeof AnimatedCounter> = {
  component: AnimatedCounter,
  tags: ["autodocs"],
  args: {
    value: 5000,
    direction: "up",
  },
  render: (args) => <AnimatedCounter {...args} />,
};

export default meta;
type Story = StoryObj<typeof AnimatedCounter>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
