import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative w-full gap-4 lg:gap-10 px-5 sm:px-10 lg:px-25 py-4 lg:py-0 lg:mb-20">
      {/* Background Elements */}
      <img 
        src="/assets/elements/Elements-home-1.svg" 
        alt="illustration" 
        className="pointer-events-none absolute inset-0 hidden w-full h-auto object-cover lg:block"
      />                                       
      <div className="min-w-0 w-full lg:w-auto lg:flex-[1.2] relative text-center lg:mt-30 lg:text-left">

        <div className="hero-title text-center lg:text-left font-extrabold text-[clamp(1.5rem,7.4vw,3rem)] lg:text-4xl xl:text-[clamp(2.9rem,3.65vw,3.25rem)] 2xl:text-[3.7rem] text-korofu-yellow drop-shadow-big-title mb-6 lg:mb-12 leading-tight">
          <span className="block whitespace-nowrap">LET YOUR MOOD</span>
          <span className="block whitespace-nowrap">CHOOSE YOUR FOOD</span>
        </div>

        <p className="text-lg sm:text-xl lg:text-lg xl:text-2xl text-gray-800 mb-7 lg:mb-10 font-medium !font-[Quicksand] leading-tight">
          Discover food with heart, color, and emotions - no more endless scrolling.
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <button className="large-button min-w-0 flex-1 bg-korofu-orange">
            Try It Out!
          </button>
          <button className="large-button min-w-0 flex-1 bg-korofu-indigo">
            Get Started!
          </button>
        </div>
      </div>
      
      <div className="hero-pizza-wrap flex w-full max-w-[min(68vw,17rem)] items-center justify-center sm:max-w-60 md:max-w-64 lg:w-auto lg:max-w-none lg:flex-1">
          <Image
            src="/assets/elements/Handdrawn Pizza.svg"
            alt="Pizza Slice Illustration"
            className="hero-pizza object-contain"
            priority
            width={400}
            height={400}
          />
      </div>
    </div>
  );
};

export default Hero;
