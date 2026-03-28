import { SlideTabs } from "@/components/ui/slide-tabs";

export default function SlideTabsDemo() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-cream p-4">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-heading text-brown-dark italic">Experience Smooth Navigation</h2>
        <div className="p-8 rounded-3xl bg-green-dark/5 border border-green-dark/10">
          <SlideTabs 
            tabs={["Home", "Pricing", "Features", "Docs", "Blog"]} 
            onTabChange={(i: number) => console.log("Tab changed to:", i)}
          />
        </div>
      </div>
    </div>
  );
}
