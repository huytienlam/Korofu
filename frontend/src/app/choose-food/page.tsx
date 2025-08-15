"use client";

import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';

export default function ChooseFood() {
  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />

      <div className="min-h-screen flex pl-10 mt-5">
        <Sidebar />
        
        <main className="flex-1 flex flex-col items-center p-6 rounded-3xl">
          <div className="inline-flex flex-col justify-center items-center gap-4">
            <div className="w-[465px] h-20 text-center justify-center text-[#FFE262] text-5xl font-bold font-['SFU_Futura'] leading-[55.50px] [text-shadow:_5px_5px_0px_rgb(0_0_0)] [-webkit-text-stroke:2px_black]">
              Choose Your Food
            </div>
            <div className="self-stretch h-28 text-center justify-center text-black text-3xl font-medium font-['Quicksand']">
              Set the mood, pick a color, and we’ll find your perfect dish!
            </div>
            <div className="inline-flex justify-start items-center gap-12">
              <button
                data-color="Aqua"
                data-size="Large"
                className="w-80 h-20 px-3.5 py-1 bg-[#4FD3C6] rounded-[5px] shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-offset-[-2px] outline-black flex justify-center items-center gap-2.5 cursor-pointer hover:translate-y-1 hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all"
              >
                <span className="text-center text-black text-2xl font-black font-['SFU_Futura'] leading-loose">
                  Let's go!
                </span>
              </button>

              <button
                data-color="Beige"
                data-size="Large"
                className="w-80 h-20 px-3.5 py-1 bg-[#FFDED0] rounded-[5px] shadow-[3px_3px_0px_rgba(0,0,0,1)] outline outline-2 outline-offset-[-2px] outline-black flex justify-center items-center gap-2.5 cursor-pointer hover:translate-y-1 hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all"
              >
                <span className="text-center text-black text-2xl font-black font-['SFU_Futura'] leading-loose">
                  Wow me instead?
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
