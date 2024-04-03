import type { Meta, StoryObj } from "@storybook/react";
import NewSubmissionForm from "./index";

const meta: Meta<typeof NewSubmissionForm> = {
  title: "forms/NewSubmissionForm",
  tags: ["autodocs"],
  component: NewSubmissionForm,
  render: () => <NewSubmissionForm />,
} satisfies Meta<typeof NewSubmissionForm>;

export default meta;

type Story = StoryObj<typeof NewSubmissionForm>;

export const Default: Story = {};
