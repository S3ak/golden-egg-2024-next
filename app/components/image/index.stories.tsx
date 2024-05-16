import type { Meta, StoryObj } from "@storybook/react";
import Image from "./index";

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    width: { control: { type: "number", min: 1, max: 4999, step: 300 } },
    height: { control: { type: "number", min: 1, max: 4999, step: 300 } },
  },
  args: {
    alt: "Alt text",
    width: "1470",
    height: "980",
    src: "https://images.unsplash.com/photo-1536000999382-52cecfca7fb1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  render: (args) => <Image {...args} alt={args.alt} />,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
