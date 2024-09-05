import type { Meta, StoryObj } from "@storybook/react";
import CreateSubmissionPage from "./page";
import RootLayout from "@/layout";

const meta: Meta<typeof CreateSubmissionPage> = {
  component: CreateSubmissionPage,
  title: "pages/Create-Submission-Page",
  tags: ["autodocs"],
  render: () => (
    <RootLayout>
      <CreateSubmissionPage />
    </RootLayout>
  ),
};

export default meta;
type Story = StoryObj<typeof CreateSubmissionPage>;

export const Default: Story = {};
