import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./index";

const meta: Meta<typeof Hero> = {
  component: Hero,
  render: () => <Hero />,
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Primary: Story = {};
