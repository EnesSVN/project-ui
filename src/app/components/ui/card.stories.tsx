import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  args: {
    title: "Card Başlığı",
    desc: "Kısa açıklama metni",
    variant: "elevated",
    radius: "md",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["elevated", "outline"] },
    radius: { control: "inline-radio", options: ["md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {};

export const WithImage: Story = {
  args: {
    imgSrc: "https://picsum.photos/800/450",
    imgAlt: "Örnek görsel",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="grid gap-6 md:grid-cols-2">
      <Card {...args} variant="elevated" title="Elevated" desc="Gölge">
        <div className="mt-3">
          <Button>Devam</Button>
        </div>
      </Card>
      <Card {...args} variant="outline" title="Outline" desc="Border">
        <p className="text-caption mt-3">Alt içerik slotu</p>
      </Card>
    </div>
  ),
  args: { imgSrc: "https://picsum.photos/801/450" },
};

export const Radius: Story = {
  render: (args) => (
    <div className="grid gap-6 md:grid-cols-2">
      <Card {...args} radius="md" title="Radius md" />
      <Card {...args} radius="lg" title="Radius lg" />
    </div>
  ),
};
