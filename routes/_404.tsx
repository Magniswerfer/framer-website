import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <div class="bg-white min-h-screen p-1">
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>

      <div class="grid grid-cols-12 gap-1">
        <div class="col-span-12 md:col-span-6 bg-red-600 rounded-lg p-8 flex flex-col items-center justify-center">
          <div class="w-32 h-32 circle-white flex items-center justify-center mb-4">
            <h1 class="text-6xl font-black text-red-600">404</h1>
          </div>
          <h2 class="text-2xl font-bold uppercase tracking-wide text-white text-center">
            PAGE NOT FOUND
          </h2>
        </div>

        <div class="col-span-12 md:col-span-6 grid grid-cols-2 gap-1">
          <div class="bg-white border border-black rounded-lg p-6"></div>
          <div class="bg-black rounded-lg p-6"></div>
          <div class="bg-yellow-300 rounded-lg p-6 flex items-center justify-center">
            <a
              href="/"
              class="bg-white px-6 py-3 rounded-md font-bold uppercase border border-black"
            >
              Home
            </a>
          </div>
          <div class="w-full h-full flex items-center justify-center">
            <div class="w-16 h-16 circle-blue"></div>
          </div>
        </div>

        <div class="col-span-12 mt-1 grid grid-cols-12 gap-1 h-12">
          <div class="col-span-2 bg-black rounded-lg"></div>
          <div class="col-span-1 w-8 h-8 circle-red m-auto"></div>
          <div class="col-span-7"></div>
          <div class="col-span-2 bg-blue-600 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
