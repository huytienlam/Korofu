"use client";

import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function QuickPick() {
    const team = [
    { name: "Nguyễn Thiện Nhân", role1: "UI/UX Designer", role2: "Developer", role3: "", img: "/assets/images/Nhan.jpg" },
    { name: "Lâm Tiến Huy", role1: "Project Manager", role2: "UI/UX Designer", role3: "Developer", img: "/assets/images/htl.png" },
    { name: "Huỳnh Minh Quân", role1: "Business Analyst", role2: "Developer", role3: "", img: "/assets/images/hmq.jpg" },
    { name: "Lý Anh Quân", role1: "Developer", role2: "Tester", role3: "", img: "/assets/images/laq.jpg" },
    { name: "Trần Tường Vĩ", role1: "Developer", role2: "Software Architect", role3: "", img: "/assets/images/ttv.jpg" },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="relative container mx-auto space-y-16">
                {/* Background Elements */}
                <img 
                    src="/assets/elements/Elements-about.svg" 
                    alt="illustration" 
                    className="absolute inset-0 w-full h-auto object-cover z-0"
                />
                <div className="relative z-10 mx-auto space-y-16">
                    <div className="relative w-full h-20 flex items-center justify-center">
                        {/* Hình chữ nhật hồng */}
                        <div className="absolute w-40 h-8 bg-[#4FD3C6] z-0 translate-x-1.5"></div>

                        {/* Chữ hiển thị trên */}
                        <h1 className="text-4xl font-bold text-black text-center z-10">
                            About Us
                        </h1>
                    </div>
                    {/* Tiêu đề */}
                    <div className="text-center space-y-3">
                        <p className="text-xl text-black !font-[Quicksand] relative inline-block">
                            It all started with one simple question... 
                            <span className="relative inline-block">
                            {/* Hình chữ nhật hồng phía sau */}
                            <span className="absolute inset-0 bg-[#FFD000] -z-10 px-1 py-0.5 scale-y-75"></span>
                            <span className="font-bold">“Hôm nay ăn gì?”</span>
                            </span>
                            <br />
                            In English?{" "}
                            <span className="relative inline-block">
                            {/* Hình chữ nhật hồng phía sau */}
                            <span className="absolute inset-0 bg-[#FF914D] -z-10 px-1 scale-y-75"></span>
                            <span className="font-bold">“What should we eat today?”</span>
                            </span>
                        </p>
                    </div>

                    <div className="gap-55 flex flex-col items-center justify-center px-6 md:px-0">
                    {/* Card 1: Hình + content */}
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="flex justify-center bg-white rounded-[5px] shadow-[5px_5px_0_#000] border-[3px] border-black">
                                <Image
                                    src="/assets/images/what.svg"
                                    alt="From Idea to Flavor"
                                    width={400}
                                    height={200}
                                    
                                />
                            </div>
                            <div>
                                <div className="relative w-full h-20 flex items-center justify-center">
                                    {/* Hình chữ nhật hồng */}
                                    <div className="absolute w-78 h-7 bg-[#91A8EC] z-0 translate-x-1.5"></div>
                                    <h2 className="text-3xl font-bold text-black mb-4 text-center z-10">From Idea to Flavor</h2>
                                </div>
                                <p className="text-black text-xl leading-relaxed !font-[Quicksand] text-justify">
                                    <strong className='font-[SFUFutura]'>Korofu</strong> started as a spark in late-night brainstorms. We wanted food to be more than just a choice — 
                                    it should be an experience shaped by feelings, colors, and memories. Every day, friends and family scroll endlessly, 
                                    thinking <strong className='font-[SFUFutura] font-semibold'>“What should we eat today?”</strong>. We thought, what if the answer wasn’t just in recipes, but in moods and colors?
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Content + hình */}
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="order-2 md:order-1">
                                <div className="relative w-full h-20 flex items-center justify-center">
                                    {/* Hình chữ nhật hồng */}
                                    <div className="absolute w-45 h-7 bg-[#FF6D4D] z-0 translate-x-1.5"></div>
                                    <h2 className="text-3xl font-bold text-black mb-4 text-center z-10">New Vision</h2>
                                </div>
                                <p className="text-black leading-relaxed !font-[Quicksand] text-xl text-justify">
                                    In our minds, food is never just calories. It’s connection, culture, and comfort. We believe every bite should tell a story. 
                                    With <strong className='font-[SFUFutura]'>Korofu</strong>, we want to help people discover dishes that don’t just satisfy hunger, but resonate with the heart.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center">
                            <Image
                                src="/assets/images/Logo.svg"
                                alt="New Vision"
                                width={500}
                                height={300}
                            />
                            </div>
                        </div>

                        <div className="space-y-8 text-center">
                            <div className="relative w-full h-20 flex items-center justify-center">
                                    {/* Hình chữ nhật hồng */}
                                <div className="absolute w-45 h-7 bg-[#FFDED0] z-0 translate-x-1.5 translate-y-0.5"></div>
                                <h2 className="text-4xl font-bold text-black z-10">The Team</h2>
                            </div>
                            {/* Hàng trên 3 card */}
                            <div className="flex justify-center gap-8">
                                {team.slice(0, 3).map((member, idx) => (
                                <div key={idx} className="w-[300px] h-[480px] flex flex-col items-center p-4 bg-white rounded-[5px] shadow-[5px_5px_0_#000] border-[3px] border-black">
                                    <Image src={member.img} alt={member.name} width={300} height={300} className="rounded-[5px] object-cover w-[300px] h-[300px] mb-4" />
                                    <h3 className="text-2xl font-semibold text-black">{member.name}</h3>
                                    <p className="text-xl text-black">{member.role1}</p>
                                    <p className="text-xl text-black">{member.role2}</p>
                                    <p className="text-xl text-black">{member.role3}</p>
                                </div>
                                ))}
                            </div>

                            {/* Hàng dưới 2 card */}
                            <div className="flex justify-center gap-8">
                                {team.slice(3).map((member, idx) => (
                                <div key={idx} className="w-[300px] h-[480px] flex flex-col items-center p-4 bg-white rounded-[5px] shadow-[5px_5px_0_#000] border-[3px] border-black">
                                    <Image src={member.img} alt={member.name} width={300} height={300} className="rounded-[5px] object-cover w-[300px] h-[300px] mb-4" />
                                    <h3 className="text-2xl font-semibold text-black">{member.name}</h3>
                                    <p className="text-xl text-black">{member.role1}</p>
                                    <p className="text-xl text-black">{member.role2}</p>
                                    <p className="text-xl text-black">{member.role3}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-10 relative">
                <Footer/>
            </div>        
        </div>
    );
}