"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useEffect, useMemo, useState } from "react";

function isLikelyEmail(s: string) {
  return s.includes("@") && s.includes(".");
}

export default function InputDemo() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [validating, setValidating] = useState(false);

  const DEBOUNCE = useMemo(() => 450, []);

  useEffect(() => {
    setValidating(true);
    const t = setTimeout(() => {
      if (!email) {
        setError(undefined);
      } else if (!isLikelyEmail(email)) {
        setError("Geçerli bir e-posta değil");
      } else {
        setError(undefined);
      }
      setValidating(false);
    }, DEBOUNCE);

    return () => clearTimeout(t);
  }, [email, DEBOUNCE]);

  return (
    <main className="container-app py-8 space-y-6">
      <h1 className="heading-1">Input Demo (Debounce Validation)</h1>

      <div className="max-w-md space-y-3">
        <Input
          label="E-posta"
          placeholder="ornek@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          full
          leftIcon={<span aria-hidden>•</span>}
        />

        <div className="text-caption">
          {validating
            ? "Kontrol ediliyor…"
            : error
            ? "Hatalı giriş"
            : "Doğru format"}
        </div>

        <Button
          onClick={() => alert(email || "(boş)")}
          disabled={!!error || !email || validating}
        >
          Gönder
        </Button>
      </div>

      <div className="max-w-md space-y-3">
        <Input
          label="E-posta"
          placeholder="ornek@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          full
          rightIcon={<span aria-hidden>•</span>}
        />

        <div className="text-caption">
          {validating
            ? "Kontrol ediliyor…"
            : error
            ? "Hatalı giriş"
            : "Doğru format"}
        </div>

        <Button
          onClick={() => alert(email || "(boş)")}
          disabled={!!error || !email || validating}
        >
          Gönder
        </Button>
      </div>
    </main>
  );
}
