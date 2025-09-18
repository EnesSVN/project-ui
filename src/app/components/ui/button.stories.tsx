import { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    full: { control: "boolean" },
    loading: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Buton",
    variant: "primary",
    size: "md",
    full: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-3">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
  args: { loading: false },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const LoadingState: Story = {
  args: { loading: true, variant: "primary" },
};

export const FullWidth: Story = {
  args: { full: true, variant: "primary" },
};
