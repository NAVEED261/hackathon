import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex items-center">
      <div className="ml-6"> {/* Adding a margin to create a gap */}
        <Button className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          add to cart
        </Button>
      </div>
    </div>
  );
}
