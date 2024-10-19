import "./table.css";

interface TableProps<T> {
  heading: string[];
  data: T[];
  headingKeyMap: Record<string, string>;
}
interface RowData {
  [key: string]: string | number;
}
export function Table<T extends RowData>({
  heading,
  data,
  headingKeyMap,
}: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {heading.map((thValue, thIndex) => (
            <th key={thIndex}>{thValue}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((trObj, trIndex) => (
            <tr key={trIndex}>
              {heading.map((tdValue, tdIndex) => (
                <td key={tdIndex}>{trObj[headingKeyMap[tdValue]]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
