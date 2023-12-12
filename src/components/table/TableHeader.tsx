// TableHeader.tsx
import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
}

export function TableHeader({ children }: TableHeaderProps) {
  return <thead className="min-h-[48px] gap-2 bg-neutral-0 p-4  transition-all duration-200 ease-in-out dark:bg-dark-neutral-0">
        <tr>
           {children}
        </tr>
    </thead>;
};
