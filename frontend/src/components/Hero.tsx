import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between relative mb-20 gap-10 px-25 h-[100vh-100px]">
      {/* Background Elements */}
                                                 
      <div className="flex-1.2">

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
            width={500} 
            height={500}
          />
      </div>
    </div>
  );
};

export default Hero;