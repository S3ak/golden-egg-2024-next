import type { Meta, StoryObj } from "@storybook/react";
import ThreeDCard from "./index";

const meta: Meta<typeof ThreeDCard> = {
  component: ThreeDCard,
  tags: ["autodocs"],
  args: {
    className: "text-foreground bg-background",
    perspective: "1000px",
  },
  render: (args) => (
    <ThreeDCard {...args}>
      <h3>Card Title</h3>
      <p>Card content</p>
    </ThreeDCard>
  ),
};

export default meta;
type Story = StoryObj<typeof ThreeDCard>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
