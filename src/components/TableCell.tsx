export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}
export function Cell({ children, className, ...rest }: TableCellProps) {
  return (
    <td
      className={`text-center px-3 py-3 border-b sm:text-sm border-b-gray-200 text-nowrap max-w-full overflow-auto ${className}`}
      {...rest}>
      {children}
    </td>
  );
}
