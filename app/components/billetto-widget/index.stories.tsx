import type { Meta, StoryObj } from "@storybook/react";
import BillettoWidget from "./index";

const meta: Meta<typeof BillettoWidget> = {
  component: BillettoWidget,
  tags: ["autodocs"],
  args: {
    id: "986962",
    href: "https://golden-egg.vercel.app/",
  },
  render: (args) => <BillettoWidget {...args} />,
};

export default meta;
type Story = StoryObj<typeof BillettoWidget>;

export const Default: Story = {};
