import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Modal } from "./modal";
import { Button } from "./button";
import { Input } from "./input";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  parameters: { layout: "fullscreen" },
  argTypes: {
    width: { control: "inline-radio", options: ["sm", "md", "lg"] },
    closeOnOverlay: { control: "boolean" },
    onClose: { action: "onClose" },
  },
  args: {
    title: "Kayıt Formu",
    description: "ESC ile kapanır, Tab panel içinde döner.",
    width: "md",
    closeOnOverlay: true,
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    return (
      <div className="container-app py-8 space-y-6">
        <Button onClick={() => setOpen(true)}>Modal Aç</Button>

        <Modal
          {...args}
          open={open}
          onClose={() => {
            setOpen(false);
            args.onClose?.();
          }}
        >
          <div className="space-y-3">
            <Input
              label="Ad"
              placeholder="Adınızı girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              full
            />
            <div className="flex gap-3">
              <Button onClick={() => alert(`Ad: ${name || "(boş)"}`)}>
                Kaydet
              </Button>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                İptal
              </Button>
            </div>
            <p className="text-caption">Overlay’e tıklayınca da kapanır.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <div className="container-app py-8">
          <p className="text-caption">Bu örnek mount&apos;ta açık başlar.</p>
        </div>
        <Modal {...args} open={open} onClose={() => setOpen(false)} width="sm">
          <p className="text-body">sm genişlik</p>
        </Modal>
        <Modal {...args} open={open} onClose={() => setOpen(false)} width="md">
          <p className="text-body">md genişlik</p>
        </Modal>
        <Modal {...args} open={open} onClose={() => setOpen(false)} width="lg">
          <p className="text-body">lg genişlik</p>
        </Modal>
      </>
    );
  },
};
