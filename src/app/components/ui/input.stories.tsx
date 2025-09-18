import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: {
    label: "E-posta",
    placeholder: "ornek@mail.com",
    size: "md",
    full: true,
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    full: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-md">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="text-caption mt-2">Değer: {value || "(boş)"}</div>
      </div>
    );
  },
};

export const WithError: Story = {
  args: { error: "Geçerli değil" },
};

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-md">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          leftIcon={<span aria-hidden>🔍</span>}
          rightIcon={<span aria-hidden>⏎</span>}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-3 max-w-md">
      <Input {...args} size="sm" label="Küçük" placeholder="sm" />
      <Input {...args} size="md" label="Orta" placeholder="md" />
      <Input {...args} size="lg" label="Büyük" placeholder="lg" />
    </div>
  ),
  args: { full: true },
};
