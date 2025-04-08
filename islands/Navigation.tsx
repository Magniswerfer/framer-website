import MobileMenu from "./MobileMenu.tsx";

export default function Navigation() {
  return (
    <nav class="mb-1">
      <div class="flex items-center gap-1">
        <div class="hidden lg:block bg-white rounded-lg flex items-center">
          <a href="/" class="flex items-center">
            <div class="h-16 w-16 bg-white flex items-center justify-center mr-1">
              <img
                src="/../framer-logo-no-text.svg"
                alt="Framer logo"
                class="w-14 h-14"
              />
            </div>
            <span class="text-3xl font-bold tracking-wide">
              Framer
            </span>
          </a>
        </div>

        <div class="flex-1">
          <div class="hidden lg:flex h-full gap-1 justify-center">
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
              class="pill-yellow flex items-center justify-center text-black text-lg font-medium px-8 py-3"
            >
              Download
            </a>
          </div>
        </div>

        <div class="hidden lg:block bg-black rounded-lg p-2 flex items-center justify-center">
          <a
            href="/contact"
            class="pill-white flex items-center justify-center text-black text-lg font-medium px-8 py-3"
          >
            Contact
          </a>
        </div>

        <div class="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
