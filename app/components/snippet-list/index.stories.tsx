import type { Meta, StoryObj } from "@storybook/react";
import SnippetList from "./index";
import { mockSubmissions, dummySubmissions } from "@cypress/utils/factories";

const meta: Meta<typeof SnippetList> = {
  component: SnippetList,
  tags: ["autodocs"],
  args: {
    list: dummySubmissions,
  },
  render: (args) => <SnippetList {...args} />,
};

export default meta;
type Story = StoryObj<typeof SnippetList>;

export const Default: Story = {};
