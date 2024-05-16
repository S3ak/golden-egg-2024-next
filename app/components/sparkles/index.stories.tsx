import type { Meta, StoryObj } from "@storybook/react";
import Sparkles from "./index";

const meta: Meta<typeof Sparkles> = {
  component: Sparkles,
  tags: ["autodocs"],
  args: {
    background: "#1b1338",
    minSize: 1,
    maxSize: 3,
    speed: 4,
    particleColor: "#d7bbe8",
    particleDensity: 120,
  },
  argTypes: {
    background: { control: { type: "color" } },
    particleColor: { control: { type: "color" } },
    particleDensity: { control: { type: "number", min: 1, max: 900, step: 2 } },
  },
  render: (args) => <Sparkles className="h-96 w-12/12" {...args} />,
};

export default meta;
type Story = StoryObj<typeof Sparkles>;

export const Default: Story = {};
