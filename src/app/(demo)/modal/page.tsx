"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Modal } from "@/app/components/ui/modal";
import * as React from "react";

export default function ModalDemo() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
    <main className="container-app py-8 space-y-6">
      <h1 className="heading-1">Modal Demo</h1>

      <Button onClick={() => setOpen(true)}>Modal Aç</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Kayıt Formu"
        description="ESC ile kapanır, Tab tuşu panel içinde döner."
        width="md"
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
          <p className="text-caption">Not: Overlay’e tıklayınca da kapanır.</p>
        </div>
      </Modal>
    </main>
  );
}
