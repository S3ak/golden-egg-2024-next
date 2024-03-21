import type { Meta, StoryObj } from "@storybook/react";

import SnippetList from "./index";

const meta: Meta<typeof SnippetList> = {
  component: SnippetList,
};

export default meta;
type Story = StoryObj<typeof SnippetList>;

export const Primary: Story = {
  render: () => <SnippetList />,
};
