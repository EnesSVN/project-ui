import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

export default function CardDemo() {
  return (
    <main className="container-app py-8 space-y-6">
      <h1 className="heading-1">Card Demo</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Elevated Card"
          desc="Gölge + md radius"
          imgSrc="https://picsum.photos/800/450"
          variant="elevated"
          radius="md"
        >
          <div className="mt-3">
            <Button>Devam</Button>
          </div>
        </Card>

        <Card
          title="Outline Card"
          desc="Border + lg radius"
          imgSrc="https://picsum.photos/801/450"
          variant="outline"
          radius="lg"
        >
          <p className="text-caption mt-3">Alt içerik slotu</p>
        </Card>
      </div>
    </main>
  );
}
