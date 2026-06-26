import { LinkIcon, ChevronUpIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-mystic bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-nocturnal/70">
          &copy; 2026 NexaFlow. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm text-nocturnal" aria-label="Footer links">
          <span className="flex items-center gap-2">
            <LinkIcon size={16} className="opacity-60" />
            <a href="#features" className="motion-micro hover:text-oceanic">
              Features
            </a>
            <span aria-hidden>·</span>
            <a href="#pricing" className="motion-micro hover:text-oceanic">
              Pricing
            </a>
          </span>
          <a
            href="#"
            className="motion-micro flex items-center gap-1 hover:text-oceanic"
          >
            <ChevronUpIcon size={14} />
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
