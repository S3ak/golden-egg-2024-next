import type { Meta, StoryObj } from "@storybook/react";
import BackgroundGradientAnimation from "./index";

const meta: Meta<typeof BackgroundGradientAnimation> = {
  component: BackgroundGradientAnimation,
  tags: ["autodocs"],
  args: {
    size: "80%",
    blendingValue: "hard-light",
    children: "this gradient background animation",
    className: "foo",
    interactive: true,
    containerClassName: "bar",
  },
  render: (args) => <BackgroundGradientAnimation {...args} />,
};

export default meta;
type Story = StoryObj<typeof BackgroundGradientAnimation>;

export const Default: Story = {};
