import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden relative space-y-1">
        <img
          src="/assets/elements/Elements.svg"
          alt="illustration"
          className="absolute left-[-60] top-[20] w-full h-auto object-cover z--1"
        />
        <Hero />

        {/* Journey Section */}
        <section className="bg-korofu-yellow py-20 px-8">
          <div className="relative w-full h-20 flex items-center justify-center mb-16">
            <div className="absolute w-210 h-8 bg-korofu-blue z-0 translate-x-1.5"></div>
            <h2 className="text-5xl font-bold text-black text-center z-10">
              Your journey in three simple bites
            </h2>
          </div>

          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-3 gap-[120px] justify-center">
              {/* Step 1 */}
              <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_#000] w-[407px] h-[571px] flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <div className="rounded-full mx-auto mb-20 flex items-center justify-center">
                    <Image
                      src="/assets/images/Icon.svg"
                      alt="Step 1"
                      width={253}
                      height={243}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Step 1</h3>

                  <p className="text-2xl font-semibold text-black leading-tight">
                    Tell Us
                    <br />
                    Your Mood
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_#000] w-[407px] h-[571px] flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <div className="border-2 rounded-full mx-auto mb-22 flex items-center justify-center relative">
                    <Image
                      src="/assets/images/colorpicker.svg"
                      alt="Step 1"
                      width={253}
                      height={243}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Step 2</h3>

                  <p className="text-2xl font-semibold text-black leading-tight">
                    Swatch Your
                    <br />
                    Color Palette
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_#000] w-[407px] h-[571px] flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <div className="rounded-full mx-auto mb-24 flex items-center justify-center relative">
                    <Image
                      src="/assets/images/pizza.svg"
                      alt="Step 1"
                      width={143}
                      height={235}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">Step 3</h3>

                  <p className="text-2xl font-semibold text-black leading-tight">
                    Discover Your
                    <br />
                    Chosen Dish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repeating Banner */}
        <section className="bg-korofu-light-red py-6 h-[111px]  border-2 border-black shadow-[5px_5px_0_#000]">
          <div className="text-center text-korofu-light-yellow font-extrabold text-5xl overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-[scroll_20s_linear_infinite] text-5xl delay-100">
              mood • color • food • mood • color • food • mood • color • food •
              mood • color • food • mood • color • food • mood • color • food
            </span>
          </div>
        </section>

        {/* Why Korofu Section */}
        <section className="bg-korofu-pink py-25 relative border-t-4 border-orange-400 border-b-2 border-black">
          {/* Top-left yellow arrow */}
          <div className="absolute top-8 left-8 w-16 h-20"></div>
          <img
            src="/assets/elements/Elements.svg"
            alt="illustration"
            className="absolute inset-0 w-full h-auto object-cover z-0"
          />

          <div className="flex items-center gap-16 relative ">
            {/* Left side - Why Korofu panel */}
            <div className="pl-0">
              <div className="bg-white border-2 border-black rounded-xl p-10 shadow-[6px_6px_0_#000] w-[712px]">
                <h2 className="text-5xl font-bold text-black mb-10 text-center">
                  Why Korofu?
                </h2>
                <ul className="space-y-6 mb-10 text-left pl-45">
                  <li className="text-xl text-black flex items-start">
                    Preferences tailored for you.
                  </li>
                  <li className="text-xl text-black flex items-start">
                    Explore new dishes easily.
                  </li>
                  <li className="text-xl text-black flex items-start">
                    Bookmark every good place.
                  </li>
                  <li className="text-xl text-black flex items-start">
                    Enjoy the community.
                  </li>
                  <li className="text-xl text-black flex items-start">
                    Build your own food story.
                  </li>
                </ul>
                <div className="flex justify-center">
                  <button className="w-[300px] py-4 bg-korofu-green text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[0px_0px_0_#000] transition-all text-xl">
                    <Link href="/preview">Wanna try a Preview?</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Heart-shaped food collage */}
            <div className="flex-1 flex justify-center">
              <div className="relative pl-20">
                <Image
                  src="/assets/images/lovefood.svg"
                  alt="Heart"
                  width={722}
                  height={628}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guest and storyteller*/}
        <section className="h-2 w-full"></section>

        {/* Hero/Testimonial Section */}
        <section className="bg-gray-50 py-20 px-8 relative">
          <div className="relative w-full h-10 flex items-end justify-end">
            <img
              src="/assets/elements/Elements.svg"
              alt="illustration"
              className="absolute inset-0 w-full h-auto object-cover z-0"
            />

            <div className="absolute w-143 h-10 bg-korofu-green z-0 translate-x-1.5 translate-y-1.5"></div>

            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16 z-10 translate-x-1 translate-y-14">
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
                        src="/assets/images/rectangle 8.svg"
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
                        src="/assets/images/rectangle 8.svg"
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

        {/* Korofu Call to Action Section */}
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

            {/* Right side - Text & Buttons */}
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

        {/* Bottom Banner/Footer */}
        <section className="bg-korofu-aqua py-6">
          <div className="text-center text-black font-bold text-4xl overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-[scroll_15s_linear_infinite]">
              let your mood choose your food • let your mood choose your food •
              let your mood choose your food • let your mood choose your food •
              let your mood choose your food • let your mood choose your food
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
