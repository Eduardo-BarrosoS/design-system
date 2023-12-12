
// TableColumn.tsx
import React from 'react';

interface TableColumnProps {
  children: React.ReactNode;
}

export function TableColumn ({ children }: TableColumnProps) {
  return <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>;
};
