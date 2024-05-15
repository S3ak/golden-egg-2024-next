import type { Meta, StoryObj } from "@storybook/react";
import CTACard from "./index";

const meta: Meta<typeof CTACard> = {
  component: CTACard,
  tags: ["autodocs"],
  args: {
    href: "/",
    target: "__blank",
    imgSrc:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    children: "CTA Card",
  },
  render: (args) => <CTACard {...args} />,
};

export default meta;
type Story = StoryObj<typeof CTACard>;

export const Default: Story = {};
