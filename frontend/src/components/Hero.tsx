import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between py-10 px-2 max-w-7xl mx-auto relative mb-20">
      {/* Background Elements */}
                                                 
      <div className="flex-1 w-[975px] h-[535px]">

        <div className="font-extrabold text-6xl text-korofu-yellow drop-shadow-title-top mb-12 leading-tight">
          LET YOUR MOOD
          <br />
          CHOOSE YOUR FOOD
        </div>

        <p className="text-3xl text-gray-800 mb-10 font-normal leading-relaxed">
          Discover food with heart, color, and emotions
          <br />
          - no more endless scrolling.
        </p>

        <div className="flex flex-row gap-10 justify-start">
          <button className="px-6 py-3 bg-korofu-orange text-black rounded-lg hover:bg-[#FF4242] transition-colors font-bold border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[0px_0px_0_#000] text-lg w-[330px]">
            Try It Out!
          </button>
          <button className="px-6 py-3 bg-[#6085FF] text-black rounded-lg hover:bg-korofu-blue transition-colors font-bold border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[0px_0px_0_#000] text-lg w-[330px]">
            Get Started!
          </button>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
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