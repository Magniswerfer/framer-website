import { AppProps } from "$fresh/server.ts";
import Navigation from "../islands/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Framer - Perfect Photo Frames for Instagram</title>
        <link rel="stylesheet" href="/styles.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body {
            font-family: Helvetica, Arial, sans-serif;
          }
          /* Custom scrollbar styling */
          ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #e5e7eb;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #d1d5db;
          }
        `,
          }}
        />
        <meta
          name="description"
          content="Framer is an open-source Android app that helps photographers preserve their photos' aspect ratios on Instagram."
        />
      </head>
      <body class="font-sans antialiased text-gray-900 bg-white min-h-screen">
        <Navigation />
        <main class="mt-[6.3rem] lg:mt-0">
          <div class="m-1">
            <Component />
          </div>
        </main>
        <footer class="mt-8 p-1">
          <div class="grid grid-cols-12 gap-1">
            <div class="col-span-12 md:col-span-6 bg-yellow-300 rounded-lg p-4 flex items-center">
              <div class="bg-white p-2 rounded-full mr-2">
                <img
                  src="/framer-logo-no-text.svg"
                  alt="Framer logo"
                  class="w-10 h-10"
                />
              </div>
              <p class="text-sm font-bold">
                © {new Date().getFullYear()} Framer App
              </p>
            </div>
            <div class="col-span-12 md:col-span-6 flex">
              <div class="pill-blue flex-1 flex items-center justify-center mx-1">
                <a href="/privacy" class="text-sm font-medium">
                  Privacy
                </a>
              </div>
              <div class="pill-red flex-1 flex items-center justify-center mx-1">
                <a href="/terms" class="text-sm font-medium">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
