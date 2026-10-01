export default function TableEmptyState({ message }: { message: string }) {
  return (
    <tr>
      <td colSpan={7} className="px-3 py-12 text-center text-gray-500">
        <p className="mb-1 text-3xl">📭</p>
        {message}
      </td>
    </tr>
  );
}