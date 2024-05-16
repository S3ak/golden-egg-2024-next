import type { Meta, StoryObj } from "@storybook/react";
import CountDownTimer from "./index";

const meta: Meta<typeof CountDownTimer> = {
  component: CountDownTimer,
  tags: ["autodocs"],
  args: {
    endDateTime: "2024, 06, 12, 10, 0, 0",
    _timeZone: "Europe/Oslo",
    _timeStyle: "long",
    _dateStyle: "full",
    locale: "nb-NO",
    defaultOptions: {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  },
  render: (args) => <CountDownTimer {...args} />,
};

export default meta;
type Story = StoryObj<typeof CountDownTimer>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
