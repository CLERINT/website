'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RequestDemoForm } from '@/components/request-demo-form';
import { Calendar } from 'lucide-react';

interface RequestDemoModalProps {
  children: React.ReactNode;
}

export function RequestDemoModal({ children }: RequestDemoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Calendar className="h-5 w-5" />
            Request a Demo
          </DialogTitle>
          <DialogDescription>
            Schedule a personalized walkthrough of CLERINT with our mission specialists.
          </DialogDescription>
        </DialogHeader>
        <RequestDemoForm compact onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
