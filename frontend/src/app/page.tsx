import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden overflow-y-visible relative space-y-1 pb-[5px]">
        {/* Main Section */}
        <Hero />

        {/* Journey Section */}
        <section className="bg-korofu-yellow h-[100vh] flex flex-col items-center justify-center">
          <div className="relative w-full h-20 flex items-center justify-center mb-16">
            <div className="absolute w-210 h-8 bg-korofu-blue z-0 translate-x-1.5"></div>
            <h2 className="text-5xl font-bold text-black text-center z-10">
              Your journey in three simple bites
            </h2>
          </div>
            <div className="grid grid-cols-3 gap-15 justify-center w-[70%]">
              {/* Step 1 */}
              <div className="px-8 py-12 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0_#000]
                              flex flex-col gap-10 items-center justify-center">
                <div className="rounded-full mx-auto flex items-center justify-center">
                  <Image
                    src="/assets/images/Icon.svg"
                    alt="Step 1"
                    width={185}
                    height={185}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-4">Step 1</h3>
                  <p className="text-2xl font-normal text-black leading-tight">
                    Tell Us
                    <br />
                    Your Mood
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="px-8 py-12 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0_#000]
                              flex flex-col gap-10 items-center justify-center">
                <div className="rounded-full mx-auto flex items-center justify-center relative">
                  <Image
                    src="/assets/images/colorpicker.svg"
                    alt="Step 2"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-4">Step 2</h3>
                  <p className="text-2xl font-normal text-black leading-tight">
                    Swatch Your
                    <br />
                    Color Palette
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="px-8 py-12 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0_#000]
                              flex flex-col gap-10 items-center justify-center">
                  <div className="rounded-full mx-auto flex items-center justify-center relative">
                    <Image
                      src="/assets/images/pizza.svg"
                      alt="Step 3"
                      width={115}
                      height={115}
                    />
                  </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-4">Step 3</h3>
                  <p className="text-2xl font-normal text-black leading-tight">
                    Discover Your
                    <br />
                    Chosen Dish
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Repeating Banner */}
        <section className="bg-korofu-light-red py-6 border-3 border-black shadow-[5px_5px_0_#000]
                            relative overflow-hidden flex">
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-right">
              <span className="text-korofu-light-yellow font-semibold text-5xl">
                mood · color · food · mood · color · food · mood · color · food · mood · color · food ·&nbsp;
              </span>
            </div>
            {/* second copy for seamless loop */}
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-right">
              <span className="text-korofu-light-yellow font-semibold text-5xl">
                mood · color · food · mood · color · food · mood · color · food · mood · color · food ·&nbsp;
              </span>
            </div>
        </section>

        {/* Why Korofu Section */}
        <section className="bg-korofu-pink relative flex items-center justify-between h-[100vh] gap-20">
            {/* Left side - Why Korofu panel */}
            <div className="flex-1 bg-white border-2 border-black rounded-xl px-25 py-15 shadow-[6px_6px_0_#000]">
              <h2 className="text-5xl font-bold text-black mb-15">
                Why Korofu?
              </h2>
              <div className="space-y-2 text-left mb-15">
                <p className="text-2xl text-black flex items-start">
                  Preferences tailored for you.
                </p>
                <p className="text-2xl text-black flex items-start">
                  Explore new dishes easily.
                </p>
                <p className="text-2xl text-black flex items-start">
                  Bookmark every good place.
                </p>
                <p className="text-2xl text-black flex items-start">
                  Enjoy the community.
                </p>
                <p className="text-2xl text-black flex items-start">
                  Build your own food story.
                </p>
              </div>
              
              <div className="flex justify-center w-full">
                <Link href="/preview" className="w-full">
                  <button className="large-button bg-korofu-green w-full">
                    Wanna try a Preview?
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Heart-shaped food collage */}
            <div className="flex-1.2 flex justify-center p-30">
              <div className="relative">
                <Image
                  src="/assets/images/lovefood.svg"
                  alt="Heart"
                  width={525}
                  height={525}
                />
              </div>
            </div>
        </section>

        {/* Guests & Storytellers Section */}
        <section className="bg-korofu-default py-25 px-20 relative h-[100vh]">
          <div className="relative w-full h-10 flex items-end justify-end mb-15">
            <div className="absolute w-175 h-10 bg-korofu-green z-0 translate-x-3 translate-y-[-4px]"></div>
              <h2 className="text-5xl font-bold text-gray-800 text-center mb-16 z-10 translate-x-1 translate-y-14">
                Our guests, our storytellers.
              </h2>
          </div>

          <div className="max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-2 gap-16">
              {/* Left Column - Vu Nguyen */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_#000]">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full ">
                      <Image
                        src="/assets/images/vanvu.png"
                        alt="1"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-1">
                        Vu Nguyen
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">Food Blogger</p>
                      <p className="text-gray-800 italic">
                        It&apos;s like Netflix recommendations, but for food —
                        and it nailed my mood perfectly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_#000]">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full ">
                      <Image
                        src="/assets/images/vanvu.png"
                        alt="1"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-1">
                        Vu Nguyen
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">Food Blogger</p>
                      <p className="text-gray-800 italic">
                        It&apos;s like Netflix recommendations, but for food —
                        and it nailed my mood perfectly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Tuan Mai Anh */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_#000]">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full">
                      <Image
                        src="/assets/images/Rectangle 8.svg"
                        alt="1"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-1">
                        Tuan Mai Anh
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">Doctor</p>
                      <p className="text-gray-800 italic">
                        I found a new dish I would&apos;ve myself — now
                        it&apos;s my favorite.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_#000]">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full">
                      <Image
                        src="/assets/images/Rectangle 8.svg"
                        alt="1"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-1">
                        Tuan Mai Anh
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">Doctor</p>
                      <p className="text-gray-800 italic">
                        I found a new dish I would&apos;ve myself — now
                        it&apos;s my favorite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-korofu-light-yellow py-40 px-8 relative">
          <div className="max-w-7xl mx-auto flex items-center gap-16">
            {/* Left side - Main Graphic */}
            <div className="flex-1 flex justify-center">
              <div className=" rounded-full flex items-center justify-center ">
                <Image
                  src="/assets/logo/Logo_Image_Yellow.png"
                  alt="1"
                  width={600}
                  height={300}
                />
              </div>
            </div>

            <div className="flex-1">
              <Image
                src="/assets/logo/Logo_Name_Yellow.png"
                alt="1"
                width={300}
                height={80}
              />

              <p className="text-2xl text-black mb-4 font-bold">
                Your emotions have
                <span className="bg-korofu-aqua px-2 py-1 rounded ml-2">
                  flavor
                </span>
                .
              </p>
              <p className="text-xl text-black mb-8 font-bold translate-y-1 translate-x-1 z-10">
                Ready to
                <span className="bg-red-400 px-2 py-1 rounded ml-2 z-0">
                  taste
                </span>{" "}
                them?
              </p>

              <div className="flex gap-6">
                <button className="px-8 py-4 bg-korofu-purple text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[0px_0px_0_#000] transition-all">
                  Yes, please!
                </button>
                <button className="px-8 py-4 bg-korofu-beige text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[0px_0px_0_#000] transition-all">
                  Know more?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Repeating Banner */}
        <section className="bg-korofu-aqua py-6 border-3 border-black shadow-[5px_5px_0_#000]
                            overflow-hidden flex overflow-hidden relative">
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-left">
              <span className="font-semibold text-5xl">
                let your mood choose your food · let your mood choose your food · let your mood choose your food ·&nbsp;
              </span>
            </div>
            {/* second copy for seamless loop */}
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-left">
              <span className="font-semibold text-5xl">
                let your mood choose your food · let your mood choose your food · let your mood choose your food ·&nbsp;
              </span>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
