import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex items-center">
      <div className="ml-6">
        <Button className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
