import type { Meta, StoryObj } from "@storybook/react";
import NewSubmissionForm from "./index";

const meta: Meta<typeof NewSubmissionForm> = {
  component: NewSubmissionForm,
};

export default meta;
type Story = StoryObj<typeof NewSubmissionForm>;

export const Primary: Story = {
  render: () => <NewSubmissionForm />,
};
