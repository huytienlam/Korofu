import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between py-16 px-6 max-w-7xl mx-auto">
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8" style={{ 
          color: '#FFA764',
          textShadow: '4px 4px 0px rgba(0, 0, 0, 0.87)',
          letterSpacing: '0.02em',
          lineHeight: '1.2',
          fontFamily: 'SFUFutura',
          fontWeight: '700'
        }}>
          LET YOUR MOOD
          <br />
          CHOOSE YOUR FOOD
        </h1>
        <p className="text-xl text-gray-800 mb-10 font-normal">
          Discover food with heart, color, and emotions
          <br />
          - no more endless scrolling.
        </p>
        <div className="flex flex-row justify-between">
          <button className="px-12 py-4 bg-[#FF5C5C] text-white rounded-lg hover:bg-[#FF4242] transition-colors font-medium border-2 border-black w-full sm:w-[220px]">
            Try It Out!
          </button>
          <button className="px-12 py-4 bg-[#7B9CFF] text-white rounded-lg hover:bg-[#6085FF] transition-colors font-medium border-2 border-black w-full sm:w-[220px]">
            Get Started!
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="/assets/image/Pizza.svg"
            alt="Pizza Slice Illustration"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;