"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CustomWeightPicker({
  weightType,
  selectedWeight,
  onChange,
}: {
  weightType: "fixed" | "custom";
  selectedWeight: number;
  onChange: (value: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleConfirm = () => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 600 || num > 1000) {
      return;
    }
    const weight = Math.round(num / 50) * 50; // Round to nearest 50g

    if (!isNaN(weight) && weight > 0) {
      onChange(weight);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={weightType === "custom" ? "secondary" : "outline"}>
          Custom Weight{weightType === "custom" ? ` - ${selectedWeight}g` : ""}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 space-y-2">
        <Input
          type="number"
          placeholder="Enter weight (g)"
          value={value}
          min={600}
          max={1000}
          onChange={(e) => {
            if (Number(e.target.value) > 1000) {
              e.target.value = "1000";
            }
            setValue(e.target.value);
          }}
        />
        <Button className="w-full" onClick={handleConfirm}>
          Confirm
        </Button>
      </PopoverContent>
    </Popover>
  );
}
