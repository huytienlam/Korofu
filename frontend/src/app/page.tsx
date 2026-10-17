import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { guests, guests2 } from "../data/mockData";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden overflow-y-visible relative space-y-1 pb-[5px]">
        {/* Main Section */}
        <div className="flex relative items-center justify-center min-h-[calc(100dvh-5rem)] lg:min-h-[calc(100dvh-100px)]">
          <Hero />
        </div>

        {/* Journey Section */}
        <section className="bg-korofu-yellow min-h-screen relative flex flex-col items-center justify-center px-5 py-16 sm:px-10">
          <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
            {/* Tiêu đề */}
            <div className="relative w-full flex items-center justify-center mb-10 lg:mb-16">
              <div className="absolute inset-x-[10%] h-8 bg-korofu-blue z-0 translate-x-1.5"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center z-10">
                Your journey in three simple bites
              </h2>
            </div>

            {/* 3 Steps */}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 justify-center">
              {/* Step 1 */}
              <div className="px-6 py-8 lg:px-8 lg:py-12 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0_#000]
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
              <div className="px-6 py-8 lg:px-8 lg:py-12 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0_#000]
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
              <div className="px-6 py-8 lg:px-8 lg:py-12 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0_#000]
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
          </div>

          {/* Elements background đưa xuống cuối */}
          <img 
            src="/assets/elements/Elements-home-2.svg" 
            alt="illustration" 
            className="absolute inset-0 w-full h-auto object-cover z-0 translate-y-[30px]"
          />
        </section>


        {/* Repeating Banner */}
        <section className="bg-korofu-light-red py-6 border-3 border-black shadow-[5px_5px_0_#000]
                            relative overflow-hidden flex z-1">
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-right">
              <span className="text-korofu-light-yellow font-semibold text-5xl">
                mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food ·&nbsp;
              </span>
            </div>
            {/* second copy for seamless loop */}
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-right">
              <span className="text-korofu-light-yellow font-semibold text-5xl">
                mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food · mood · color · food ·&nbsp;
              </span>
            </div>
        </section>

        {/* Why Korofu Section */}
        <section className="bg-korofu-pink relative flex items-center justify-between min-h-screen py-16">
            {/* Left side - Why Korofu panel */}
            <img 
              src="/assets/elements/Elements-home-3.svg" 
              alt="illustration" 
              className="pointer-events-none absolute inset-0 w-full max-w-[700px] h-auto object-cover opacity-40 lg:opacity-100"
            /> 
            <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8 px-5 sm:px-10 lg:px-25">
              <div className="w-full lg:max-w-[560px] lg:flex-[0_1_560px] bg-white border-2 border-black rounded-xl px-6 py-8 lg:px-12 xl:px-20 lg:py-15 shadow-[6px_6px_0_#000]">
                <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6 lg:mb-12">
                  Why Korofu?
                </h2>
                <div className="space-y-2 text-left mb-8 lg:mb-12">
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
              <div className="flex-1 flex justify-center p-3 lg:p-10 2xl:p-30">
                <div className="relative">
                  <Image
                    src="/assets/images/lovefood.svg"
                    alt="Heart"
                    width={525}
                    height={525}
                  />
                </div>
              </div>
            </div> 
        </section>

        {/* Guests & Storytellers Section */}
        <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-korofu-default py-16 lg:py-20">
          <img 
            src="/assets/elements/Elements-home-4.svg" 
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-auto w-[min(180vw,60rem)] max-w-none -translate-x-1/2 object-cover"
          /> 
          <div className="relative z-10 space-y-8 lg:space-y-10">
            <div className="relative w-full flex items-center justify-center lg:justify-end mb-10 px-5 lg:px-25">
              <div className="absolute right-[8%] w-[min(80%,44rem)] h-10 bg-korofu-green z-0 translate-x-3 translate-y-[-4px]"></div>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center lg:text-right z-10">
                Our guests, our storytellers.
              </h2>
            </div>

            <div className="relative flex gap-[5rem] overflow-hidden">
              <div className="flex-shrink-0 flex space-around gap-[5rem] animate-marquee-left-cards">
                {guests.map((guest, idx) => (
                  <div
                    key={idx}
                    className="w-[min(82vw,32rem)] min-h-44 rounded-xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_#000] sm:min-h-42 sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                        <Image src={guest.image} alt={guest.name} width={80} height={80} unoptimized className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-lg font-bold text-black sm:text-xl">{guest.name}</h3>
                        <p className="mb-2 text-sm text-gray-600 sm:text-base">{guest.role}</p>
                        <p className="font-[Quicksand] text-sm leading-snug text-gray-800 sm:text-base">{guest.quote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 flex space-around gap-[5rem] animate-marquee-left-cards">
                {guests.map((guest, idx) => (
                  <div
                    key={idx}
                    className="w-[min(82vw,32rem)] min-h-44 rounded-xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_#000] sm:min-h-42 sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                        <Image src={guest.image} alt={guest.name} width={80} height={80} unoptimized className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-lg font-bold text-black sm:text-xl">{guest.name}</h3>
                        <p className="mb-2 text-sm text-gray-600 sm:text-base">{guest.role}</p>
                        <p className="font-[Quicksand] text-sm leading-snug text-gray-800 sm:text-base">{guest.quote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex gap-[5rem] overflow-hidden">
              <div className="flex-shrink-0 flex space-around gap-[5rem] animate-marquee-right-cards">
                {guests2.map((guest, idx) => (
                  <div
                    key={idx}
                    className="w-[min(82vw,32rem)] min-h-44 rounded-xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_#000] sm:min-h-42 sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                        <Image src={guest.image} alt={guest.name} width={80} height={80} unoptimized className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-lg font-bold text-black sm:text-xl">{guest.name}</h3>
                        <p className="mb-2 text-sm text-gray-600 sm:text-base">{guest.role}</p>
                        <p className="font-[Quicksand] text-sm leading-snug text-gray-800 sm:text-base">{guest.quote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 flex space-around gap-[5rem] animate-marquee-right-cards">
                {guests2.map((guest, idx) => (
                  <div
                    key={idx}
                    className="w-[min(82vw,32rem)] min-h-44 rounded-xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_#000] sm:min-h-42 sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                        <Image src={guest.image} alt={guest.name} width={80} height={80} unoptimized className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-lg font-bold text-black sm:text-xl">{guest.name}</h3>
                        <p className="mb-2 text-sm text-gray-600 sm:text-base">{guest.role}</p>
                        <p className="font-[Quicksand] text-sm leading-snug text-gray-800 sm:text-base">{guest.quote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-korofu-light-yellow flex items-center justify-center relative px-5 sm:px-10 lg:px-20 py-16 min-h-[calc(100dvh-100px)]">
          <img 
            src="/assets/elements/Elements-home-5.svg" 
            alt="illustration" 
            className="absolute inset-0 w-[1300px] h-auto object-cover z-10 translate-y-[50px]"
          /> 
          <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-20">
            {/* Left side - Main Graphic */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/assets/elements/Logo Bowl Yellow Big.svg"
                alt="1"
                width={500}
                height={300}
              />
            </div>
            {/* Right side - Main Text */}
            <div className="min-w-0 flex-1 flex flex-col">
              <Image
                src="/assets/logo/Logo_Name_Yellow.png"
                alt="1"
                width={300}
                height={80}
              />

              <div className="mb-10">
                <p className="text-3xl text-black font-semibold">
                  Your emotions have{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">flavor</span>
                    <span className="absolute inset-0 bg-[#91A8EC] -z-0"></span>
                  </span>.
                </p>
                <p className="text-3xl text-black font-semibold">
                  Ready to{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">taste</span>
                    <span className="absolute inset-0 bg-[#FF6D4D] -z-0"></span>
                  </span>{" "}
                  them?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="large-button w-full sm:w-[40%] bg-korofu-purple">
                  Yes, please!
                </button>
                <button className="large-button w-full sm:w-[40%] bg-korofu-beige">
                  Know more?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Repeating Banner */}
        <section className="bg-korofu-aqua py-6 border-3 border-black shadow-[5px_5px_0_#000]
                            overflow-hidden flex relative">
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-left">
              <span className="font-semibold text-5xl">
                let your mood choose your food · let your mood choose your food · let your mood choose your food · let your mood choose your food · let your mood choose your food · let your mood choose your food ·&nbsp;
              </span>
            </div>
            {/* second copy for seamless loop */}
            <div className="flex-shrink-0 flex space-around min-w-full animate-marquee-left">
              <span className="font-semibold text-5xl">
                let your mood choose your food · let your mood choose your food · let your mood choose your food · let your mood choose your food · let your mood choose your food · let your mood choose your food ·&nbsp;
              </span>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
