import type { Meta, StoryObj } from "@storybook/react";
import ThreeDCard from "./index";

const meta: Meta<typeof ThreeDCard> = {
  component: ThreeDCard,
  tags: ["autodocs"],
  args: {},
  render: (args) => <ThreeDCard {...args} />,
};

export default meta;
type Story = StoryObj<typeof ThreeDCard>;

export const Default: Story = {};
