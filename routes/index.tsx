import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div class="min-h-screen">
      <Head>
        <title>Framer - Perfect Photo Frames for Instagram</title>
        <meta
          name="description"
          content="Framer is an open-source Android app that helps photographers preserve their photos' aspect ratios on Instagram."
        />
      </Head>

      {/* Hero Section */}
      <div class="grid grid-cols-12 gap-1 mb-2">
        <div class="col-span-12 md:col-span-8 bg-white border border-black rounded-lg p-8 flex flex-col justify-center">
          <h1 class="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Frame Your Shots.
            <br />
            Keep Their Impact.
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-2xl">
            No more awkward crops on Instagram. Framer adds stylish borders to
            preserve your photos' aspect ratios.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="/download"
              class="pill-blue flex items-center justify-center text-lg font-medium"
            >
              Download
            </a>
            <a
              href="https://github.com/yourusername/framer"
              target="_blank"
              rel="noopener noreferrer"
              class="pill-black flex items-center justify-center text-lg font-medium"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 grid grid-rows-2 gap-1">
          <div class="bg-white rounded-lg p-4 flex items-center justify-center border border-yellow-300">
            <img
              src="/framer-logo-no-text.svg"
              alt="Framer logo"
              class="w-32 h-32"
            />
          </div>
          <div class="bg-blue-600 rounded-lg p-4"></div>
        </div>
      </div>

      {/* Featured Section */}
      <div class="header-pill-blue mb-2 text-lg font-medium">
        FEATURED EXAMPLES
      </div>

      <div class="grid grid-cols-12 gap-1 mb-2">
        {/* Featured Item 1 */}
        <div class="col-span-12 md:col-span-4 bg-white border border-black rounded-lg overflow-hidden">
          <div class="aspect-video bg-gray-200">
            <img
              src="/images/landscape.jpg"
              alt="Landscape photo with frame"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold">Landscapes</h3>
            <div class="grid grid-cols-3 gap-2 mt-3 text-center">
              <div>
                <p class="text-sm font-bold">Simple</p>
                <p class="text-xs text-gray-600">WHITE BORDER</p>
              </div>
              <div>
                <p class="text-sm font-bold">Custom</p>
                <p class="text-xs text-gray-600">COLORS</p>
              </div>
              <div>
                <p class="text-sm font-bold">Perfect</p>
                <p class="text-xs text-gray-600">ASPECT RATIO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Item 2 */}
        <div class="col-span-12 md:col-span-4 bg-white border border-black rounded-lg overflow-hidden">
          <div class="aspect-video bg-gray-200">
            <img
              src="/images/portrait.jpg"
              alt="Portrait photo with frame"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold">Portraits</h3>
            <div class="grid grid-cols-3 gap-2 mt-3 text-center">
              <div>
                <p class="text-sm font-bold">No more</p>
                <p class="text-xs text-gray-600">AWKWARD CROPS</p>
              </div>
              <div>
                <p class="text-sm font-bold">Colorful</p>
                <p class="text-xs text-gray-600">BACKGROUNDS</p>
              </div>
              <div>
                <p class="text-sm font-bold">Auto</p>
                <p class="text-xs text-gray-600">BLUR EFFECT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Item 3 */}
        <div class="col-span-12 md:col-span-4 bg-white border border-black rounded-lg overflow-hidden">
          <div class="aspect-video bg-gray-200">
            <img
              src="/images/square.jpg"
              alt="Square photo with frame"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold">Creative Frames</h3>
            <div class="grid grid-cols-3 gap-2 mt-3 text-center">
              <div>
                <p class="text-sm font-bold">Easy</p>
                <p class="text-xs text-gray-600">TO USE</p>
              </div>
              <div>
                <p class="text-sm font-bold">Quick</p>
                <p class="text-xs text-gray-600">PROCESSING</p>
              </div>
              <div>
                <p class="text-sm font-bold">Instant</p>
                <p class="text-xs text-gray-600">SHARING</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div class="header-pill-red mb-2 text-lg font-medium">HOW IT WORKS</div>

      <div class="grid grid-cols-12 gap-1 mb-2">
        <div class="col-span-4 bg-white rounded-lg p-4 flex items-center justify-center border border-yellow-300">
          <div class="w-20 h-20 circle-red flex items-center justify-center">
            <img src="/icons/camera.svg" alt="Camera icon" class="w-10 h-10" />
          </div>
        </div>

        <div class="col-span-8 bg-white border border-black rounded-lg p-4">
          <p class="font-bold mb-2">Pick Your Image</p>
          <p class="text-md">
            Select any photo from your gallery. Framer works with both portrait
            and landscape orientations.
          </p>
        </div>

        <div class="col-span-12 h-12 flex">
          <div class="w-4 h-4 circle-blue self-center mx-1"></div>
          <div class="w-4 h-4 circle-yellow self-center mx-1"></div>
          <div class="w-4 h-4 circle-red self-center mx-1"></div>
          <div class="w-4 h-4 circle-black self-center mx-1"></div>
        </div>

        <div class="col-span-8 bg-blue-600 rounded-lg p-4 text-white">
          <p class="font-bold mb-2">Choose Your Frame Color</p>
          <p class="text-md">
            Pick a color that complements your photo. Customize the frame with
            solid colors or blurred background effects.
          </p>
        </div>

        <div class="col-span-4 bg-white border border-black rounded-lg p-4 flex items-center justify-center">
          <div class="w-20 h-20 circle-blue flex items-center justify-center">
            <img
              src="/icons/palette.svg"
              alt="Palette icon"
              class="w-10 h-10"
            />
          </div>
        </div>
      </div>

      {/* About the App */}
      <div class="header-pill-yellow mb-2 text-lg font-medium">
        ABOUT THE APP
      </div>

      <div class="grid grid-cols-12 gap-1 mb-2">
        <div class="col-span-12 md:col-span-6 bg-white rounded-lg p-6 border border-yellow-300">
          <h2 class="text-3xl font-bold tracking-tight mb-4">
            Lightweight<br />Open-Source
          </h2>
          <p class="text-lg mb-4">
            Framer is a lightweight, open-source app for Android. No ads. No
            tracking. Just clean, gorgeous frames.
          </p>
        </div>

        <div class="col-span-12 md:col-span-6 bg-white border border-black rounded-lg p-4">
          <div class="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <div class="flex items-center">
              <div class="w-12 h-12 circle-red mr-3"></div>
              <p class="font-bold text-lg">🎨 Custom Colors</p>
            </div>
            <div class="flex items-center">
              <div class="w-12 h-12 circle-blue mr-3"></div>
              <p class="font-bold text-lg">📏 Aspect Ratio</p>
            </div>
            <div class="flex items-center">
              <div class="w-12 h-12 circle-yellow mr-3"></div>
              <p class="font-bold text-lg">🔥 Auto Blur</p>
            </div>
            <div class="flex items-center">
              <div class="w-12 h-12 circle-black mr-3"></div>
              <p class="font-bold text-lg">🧩 Open Source</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div class="grid grid-cols-12 gap-1 mb-2">
        <div class="col-span-12 bg-black rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h2 class="text-3xl font-bold tracking-wide text-white">
              Ready to Frame Your World?
            </h2>
          </div>

          <div class="flex items-center">
            <div class="w-8 h-8 circle-yellow mr-3"></div>
            <a
              href="/download"
              class="pill-white flex items-center justify-center text-black text-lg font-medium px-6 py-3"
            >
              Download Framer
            </a>
            <div class="w-8 h-8 circle-red ml-3"></div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div class="grid grid-cols-12 gap-1">
        <div class="col-span-12 md:col-span-4 bg-white rounded-lg p-4 flex items-center justify-center border border-blue-600">
          <img
            src="/framer-logo-no-text.svg"
            alt="Framer logo"
            class="w-24 h-24"
          />
        </div>

        <div class="col-span-12 md:col-span-8 bg-white border border-black rounded-lg p-4">
          <p class="mb-4 text-lg">Made with love & frames.</p>
          <form class="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              class="border border-black rounded-md px-4 py-2 text-lg"
            />
            <button
              type="submit"
              class="pill-black self-end text-lg font-medium"
            >
              Stay Updated
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
