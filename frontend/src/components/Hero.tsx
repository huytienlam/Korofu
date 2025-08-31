import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between relative w-full gap-10 px-25 mb-20">
      {/* Background Elements */}
      <img 
        src="/assets/elements/Elements-home-1.svg" 
        alt="illustration" 
        className="absolute inset-0 w-[1450px] h-auto object-cover z-10"
      />                                       
      <div className="flex-1.2 relative mt-30">

        <div className="font-extrabold text-6xl text-korofu-yellow drop-shadow-big-title mb-12 leading-tight">
          LET YOUR MOOD
          <br />
          CHOOSE YOUR FOOD
        </div>

        <p className="text-3xl text-gray-800 mb-10 font-medium !font-[Quicksand] leading-tight">
          Discover food with heart, color, and emotions
          <br />
          - no more endless scrolling.
        </p>

        <div className="flex flex-row gap-10 justify-start">
          <button className="large-button bg-korofu-orange">
            Try It Out!
          </button>
          <button className="large-button bg-korofu-indigo">
            Get Started!
          </button>
        </div>
      </div>
      
      <div className="flex justify-center items-center flex-1">
          <Image
            src="/assets/elements/Handdrawn Pizza.svg"
            alt="Pizza Slice Illustration"
            className="object-contain"
            priority
            width={450} 
            height={450}
          />
      </div>
    </div>
  );
};

export default Hero;