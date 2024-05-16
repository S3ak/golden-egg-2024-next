import type { Meta, StoryObj } from "@storybook/react";
import TicketPage from "./page";
import RootLayout from "@/layout";

const meta: Meta<typeof TicketPage> = {
  component: TicketPage,
  title: "pages/TicketPage",
  tags: ["autodocs"],
  render: () => (
    <RootLayout>
      <TicketPage />
    </RootLayout>
  ),
};

export default meta;
type Story = StoryObj<typeof TicketPage>;

export const Default: Story = {};
