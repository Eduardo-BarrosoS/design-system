interface TableRootProps {
  children: React.ReactNode;
}

export function TableRoot ({ children }: TableRootProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full m-auto  h-auto max-h-full w-full -col overflow-auto rounded bg-neutral-0 transition-all duration-1000 ease-in-out dark:bg-dark-neutral-0">{children}</table>
    </div>
  );
};