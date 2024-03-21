import type { Meta, StoryObj } from "@storybook/react";
import SnippetList from "./index";
import { mockSubmissions } from "@cypress/utils/factories";

const meta: Meta<typeof SnippetList> = {
  component: SnippetList,
};

export default meta;
type Story = StoryObj<typeof SnippetList>;

export const Primary: Story = {
  render: () => <SnippetList list={mockSubmissions} />,
};
