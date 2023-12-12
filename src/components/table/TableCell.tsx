

// TableCell.tsx
import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
}

export function TableCell({ children }:TableCellProps) {
  return <td className="px-6 py-4 whitespace-nowrap  min-h-[48px] items-center justify-between gap-2 border-2 border-solid border-transparent border-t-neutral-100 hover:bg-neutral-50 dark:border-t-dark-neutral-150 dark:hover:bg-dark-neutral-150">{children}</td>;
};
