"use client";

import { Button } from "@/app/components/ui/button";
import { useEffect, useState } from "react";

export default function ButtonDemoPage() {
  const [loading, setLoading] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <main className="container-app py-8 space-y-6">
      <h1 className="heading-1">Button Demo</h1>

      <div className="space-x-3">
        <Button
          variant="primary"
          onClick={() => {
            setClicks((c) => c + 1);
            setLoading(true);
          }}
          loading={loading}
        >
          Kaydet
        </Button>

        <Button variant="secondary" size="sm">
          İptal
        </Button>

        <Button variant="ghost" size="lg">
          Ghost
        </Button>
      </div>

      <p className="text-body">
        Tıklama sayısı: <b>{clicks}</b>
      </p>
    </main>
  );
}
