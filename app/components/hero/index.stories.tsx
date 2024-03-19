import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./index";

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  render: () => <Hero />,
};
