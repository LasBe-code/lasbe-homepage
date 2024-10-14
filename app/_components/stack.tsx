export default function Stack({ name }: { name: string }) {
  return (
    <p className="px-2 py-0.5 text-xs text-neutral-600 font-bold border border-neutral-300 rounded-lg">
      {name}
    </p>
  );
}
