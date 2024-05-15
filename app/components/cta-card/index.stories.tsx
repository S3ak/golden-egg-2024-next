import type { Meta, StoryObj } from "@storybook/react";
import CTACard from "./index";

const meta: Meta<typeof CTACard> = {
  component: CTACard,
  tags: ["autodocs"],
  args: {},
  render: (args) => <CTACard {...args} />,
};

export default meta;
type Story = StoryObj<typeof CTACard>;

export const Default: Story = {};
