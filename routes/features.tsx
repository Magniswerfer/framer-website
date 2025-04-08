import { Head } from "$fresh/runtime.ts";

export default function Features() {
  return (
    <div class="bg-white min-h-screen p-1">
      <Head>
        <title>Features - Framer App</title>
        <meta
          name="description"
          content="Explore the features of Framer, the app that helps preserve your photos' aspect ratios on Instagram."
        />
      </Head>

      {/* Header Section */}
      <div class="bg-red-600 rounded-lg p-6 text-white mb-1 relative">
        <div class="absolute top-4 right-4 w-12 h-12 circle-white flex items-center justify-center">
          <div class="w-6 h-6 circle-black"></div>
        </div>
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
          FEATURES
        </h1>
        <p class="text-lg text-white/90 max-w-3xl">
          Framer gives you powerful tools to perfect your photos for social
          media.
        </p>
      </div>

      {/* De Stijl Grid Layout */}
      <div class="grid grid-cols-12 gap-1 mb-1">
        <div class="col-span-3 md:col-span-2 bg-blue-600 rounded-lg"></div>
        <div class="col-span-3 md:col-span-2 w-14 h-14 m-auto circle-black">
        </div>
        <div class="col-span-3 md:col-span-2"></div>
        <div class="col-span-3 md:col-span-2 bg-yellow-300 rounded-lg"></div>
        <div class="col-span-12 md:col-span-4 bg-white border border-black rounded-lg p-3 flex justify-center items-center">
          <div class="w-16 h-16 circle-red"></div>
        </div>
      </div>

      {/* Feature Grid */}
      <div class="grid grid-cols-12 gap-1">
        {/* Feature 1 */}
        <div class="col-span-12 md:col-span-8 bg-white border border-black rounded-lg p-6">
          <span class="inline-block bg-red-600 text-white rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            Perfect Aspect Ratios
          </span>
          <h2 class="text-3xl font-bold text-gray-900 mb-4 uppercase">
            NO MORE AWKWARD CROPS
          </h2>
          <p class="text-lg mb-6">
            Framer automatically adds stylish borders to your photos so they fit
            Instagram's requirements without cutting off important parts of your
            image.
          </p>
          <div class="space-y-2">
            {[
              "Works with both portrait and landscape photos",
              "Maintains all important elements in your composition",
              "Perfect for photographers who care about their work",
            ].map((item) => (
              <div class="flex items-start" key={item}>
                <div class="w-5 h-5 circle-red mt-0.5 mr-3 flex-shrink-0"></div>
                <span class="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="col-span-12 md:col-span-4 bg-black rounded-lg p-6 flex items-center justify-center">
          <div class="bg-white/20 p-4 rounded-lg w-full h-full flex items-center justify-center">
            <div class="w-24 h-24 circle-white flex items-center justify-center">
              <div class="w-16 h-16 circle-yellow flex items-center justify-center">
                <p class="text-black font-bold">Feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div class="grid grid-cols-12 gap-1 mt-1">
        <div class="col-span-4 bg-red-600 text-white rounded-lg p-6 flex flex-col items-center justify-center">
          <p class="text-4xl font-black mb-2">10+</p>
          <p class="text-sm uppercase font-bold tracking-wide text-center">
            Frame Styles
          </p>
        </div>
        <div class="col-span-4">
          <div class="w-24 h-24 circle-yellow m-auto border border-black flex items-center justify-center">
            <p class="text-xl font-black">5M+</p>
          </div>
        </div>
        <div class="col-span-4 bg-blue-600 text-white rounded-lg p-6 flex flex-col items-center justify-center">
          <p class="text-4xl font-black mb-2">4.8</p>
          <p class="text-sm uppercase font-bold tracking-wide text-center">
            App Store Rating
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div class="grid grid-cols-12 gap-1 mt-1">
        <div class="col-span-12 md:col-span-4 bg-yellow-300 rounded-lg p-6">
          <div class="grid grid-cols-2 gap-2 w-full h-full">
            <div class="bg-black rounded-lg"></div>
            <div class="w-12 h-12 circle-red m-auto"></div>
            <div class="bg-white rounded-lg border border-black"></div>
            <div class="w-12 h-12 circle-blue m-auto"></div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-8 bg-white border border-black rounded-lg p-6">
          <span class="inline-block bg-blue-600 text-white rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            Customization
          </span>
          <h2 class="text-3xl font-bold text-gray-900 mb-4 uppercase">
            YOUR STYLE, YOUR WAY
          </h2>
          <p class="text-lg mb-6">
            Choose from multiple frame styles, colors, and effects that match
            your aesthetic and make your photos stand out.
          </p>
          <div class="space-y-2">
            {[
              "Custom colors to match your brand",
              "Add textures and patterns to frames",
              "Save presets for consistent styling",
            ].map((item) => (
              <div class="flex items-start" key={item}>
                <div class="w-5 h-5 circle-blue mt-0.5 mr-3 flex-shrink-0">
                </div>
                <span class="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div class="grid grid-cols-12 gap-1 mt-1">
        <div class="col-span-12 md:col-span-8 bg-white border border-black rounded-lg p-6">
          <span class="inline-block bg-black text-white rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            Ease of Use
          </span>
          <h2 class="text-3xl font-bold text-gray-900 mb-4 uppercase">
            SIMPLE & INTUITIVE
          </h2>
          <p class="text-lg mb-6">
            Framer is designed to be easy to use. Select a photo, choose a frame
            style, save or share directly to Instagram in seconds.
          </p>
          <div class="space-y-2">
            {[
              "No complex editing skills required",
              "Fast processing even for large photos",
              "Direct sharing to Instagram and other apps",
            ].map((item) => (
              <div class="flex items-start" key={item}>
                <div class="w-5 h-5 circle-yellow mt-0.5 mr-3 flex-shrink-0 border border-black">
                </div>
                <span class="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="col-span-12 md:col-span-4 grid grid-rows-2 gap-1">
          <div class="bg-red-600 rounded-lg p-3"></div>
          <div class="w-16 h-16 circle-black m-auto"></div>
        </div>
      </div>

      {/* De Stijl Grid Elements */}
      <div class="grid grid-cols-12 gap-1 mt-1">
        <div class="col-span-3 bg-white border border-black rounded-lg p-4">
        </div>
        <div class="col-span-3 bg-black rounded-lg p-4"></div>
        <div class="col-span-3"></div>
        <div class="col-span-3 w-16 h-16 circle-red m-auto"></div>
      </div>

      {/* Call to Action */}
      <div class="grid grid-cols-12 gap-1 mt-1">
        <div class="col-span-12 bg-black rounded-lg p-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 class="text-3xl text-white font-bold uppercase">
                READY TO TRY FRAMER?
              </h2>
              <p class="text-white/80 mt-2">
                Download our app now and start framing your photos perfectly.
              </p>
            </div>
            <div class="mt-4 md:mt-0 flex items-center">
              <div class="w-6 h-6 circle-yellow mr-3"></div>
              <a
                href="/download"
                class="bg-white text-black px-8 py-3 rounded-md font-bold uppercase"
              >
                DOWNLOAD NOW
              </a>
              <div class="w-6 h-6 circle-red ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
