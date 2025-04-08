import { useEffect, useRef, useState } from "preact/hooks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div class="w-full relative" ref={menuRef}>
      <div
        class={`fixed top-0 left-0 right-0 z-50 bg-white border-2 border-yellow-300 rounded-[2rem] overflow-hidden transition-all duration-300 ease-in-out m-1`}
      >
        <div class="flex items-center justify-between px-4 py-2">
          <div class="flex items-center">
            <div class="h-12 w-12 bg-white flex items-center justify-center mr-2">
              <img
                src="/../framer-logo-no-text.svg"
                alt="Framer logo"
                class="w-10 h-10"
              />
            </div>
            <span class="text-2xl font-bold tracking-wide">Framer</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            class="flex items-center text-black text-lg font-medium"
          >
            <span class="mr-2">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              {isOpen
                ? (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )
                : (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
            </svg>
          </button>
        </div>

        <div
          class={`flex flex-col gap-1 p-2 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="/"
            class="pill-blue flex items-center justify-center text-lg font-medium px-8 py-3"
          >
            Home
          </a>
          <a
            href="/features"
            class="pill-red flex items-center justify-center text-lg font-medium px-8 py-3"
          >
            Features
          </a>
          <a
            href="/download"
            class="pill-yellow flex items-center justify-center text-black text-lg font-medium px-8 py-3 border-2 border-white"
          >
            Download
          </a>
          <a
            href="/contact"
            class="pill-black flex items-center justify-center text-white text-lg font-medium px-8 py-3"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
