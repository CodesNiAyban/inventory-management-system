import DemoPage from "@/app/(inventory)/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>
        Add New Item
      </Button>
      <DemoPage />
    </div>
  );
}
