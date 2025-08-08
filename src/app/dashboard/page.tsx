'use client';

interface TableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T;
    render?: (value: any, row: T) => React.ReactNode;
  }[];
}

export default function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor.toString()} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessor.toString()} className="px-6 py-4 whitespace-nowrap">
                {column.render ? column.render(row[column.accessor], row) : String(row[column.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}