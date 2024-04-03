import type { Meta, StoryObj } from "@storybook/react";
import MainNav from "./index";

const meta: Meta<typeof MainNav> = {
  component: MainNav,
  render: () => <MainNav />,
};

export default meta;
type Story = StoryObj<typeof MainNav>;

export const Default: Story = {};
