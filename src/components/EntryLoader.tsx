export function EntryLoader() {
  return (
    <div
      className="entry-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-oceanic"
      aria-hidden="true"
    >
      <p className="font-mono text-sm tracking-widest text-forsythia uppercase">
        NexaFlow
      </p>
      <div className="mt-4 h-0.5 w-32 overflow-hidden rounded-full bg-nocturnal">
        <div className="entry-loader__bar h-full bg-forsythia" />
      </div>
    </div>
  );
}
