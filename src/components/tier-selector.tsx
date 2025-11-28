"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function TierSelector({ tier, setTier }: any) {
  return (
    <div className="mt-8">
      <p className="text-sm text-white/60 mb-2">Choose roast level:</p>

      <ToggleGroup
        type="single"
        value={tier}
        onValueChange={(v) => v && setTier(v)}
        className="flex justify-between"
      >
        <ToggleGroupItem
          value="go"
          className="w-full py-3 text-sm font-bold data-[state=on]:bg-orange-600"
        >
          🟢 GO
        </ToggleGroupItem>

        <ToggleGroupItem
          value="pro"
          className="w-full py-3 text-sm font-bold data-[state=on]:bg-orange-600"
        >
          🔵 PRO
        </ToggleGroupItem>

        <ToggleGroupItem
          value="ultra"
          className="w-full py-3 text-sm font-bold data-[state=on]:bg-orange-600"
        >
          🔥 ULTRA PRO
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}