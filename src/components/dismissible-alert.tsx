"use client";

import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export function DismissibleAlert() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative font-bangla">
        <Alert variant="destructive" className="bg-[#0f1b2a] text-white border-0">
          <AlertTitle className="font-bold">Notice:</AlertTitle>
          <AlertDescription>
           ১৮ বছরের নিচে কেউ অর্ডার করবেন না! বাবা/মা বা ফ্যামিলির টাকা চুরি করে অর্ডার করলে তার বিরুদ্ধে আইনগত ব্যাবস্থা নেওয়া হবে!
          </AlertDescription>
        </Alert>
        <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/20 hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            <X className="h-4 w-4" />
        </Button>
    </div>
  );
}
