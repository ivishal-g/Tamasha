"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";

export function Uploader({ fileName, setFileName }: any) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <Card
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="bg-[#ffffff] border border-black p-8 text-center cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      <UploadCloud className="mx-auto text-orange-500" size={42} />
      <p className="mt-4 text-lg font-semibold">Drag & drop your résumé here</p>

      <p className="text-xs text-white/50 mt-1">PDF, TXT supported</p>

      {fileName && (
        <p className="mt-4 text-sm text-orange-400 font-medium">
          Selected: {fileName}
        </p>
      )}

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </Card>
  );
}