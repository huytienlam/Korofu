"use client";

import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function QuickPick() {
    const team = [
    { name: "Nguyễn Thiện Nhân", role1: "UI/UX Designer", role2: "Developer", role3: "", img: "/assets/images/Nhan.jpg" },
    { name: "Lâm Tiến Huy", role1: "Project Manager", role2: "UI/UX Designer", role3: "Developer", img: "/assets/images/Nhan.jpg" },
    { name: "Huỳnh Minh Quân", role1: "Business Analyst", role2: "Developer", role3: "", img: "/assets/images/Nhan.jpg" },
    { name: "Lý Anh Quân", role1: "Developer", role2: "Tester", role3: "", img: "/assets/images/Nhan.jpg" },
    { name: "Trần Tường Vĩ", role1: "Developer", role2: "Software Architect", role3: "", img: "/assets/images/Nhan.jpg" },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 py-12 space-y-16">
                {/* Tiêu đề */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold text-black">About us</h1>
                    <p className="text-xl text-black !font-[Quicksand]">
                    It all started with one simple question... 
                    <span className="font-bold">“Hôm nay ăn gì?”</span><br />
                    In English? <span className="font-bold">“What should we eat today?”</span>
                    </p>
                </div>

                {/* Card 1: Hình + content */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Image
                            src="/about1.jpg"
                            alt="From Idea to Flavor"
                            width={600}
                            height={400}
                            className="rounded-[5px] shadow-[5px_5px_0_#000] border-[3px] border-black"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-black mb-4 text-center">From Idea to Flavor</h2>
                        <p className="text-black text-xl leading-relaxed !font-[Quicksand]">
                            <strong className='font-[SFUFutura]'>Korofu</strong> started as a spark in late-night brainstorms. We wanted food to be more than just a choice — 
                            it should be an experience shaped by feelings, colors, and memories. Every day, friends and family scroll endlessly, 
                            thinking <strong className='font-[SFUFutura]'>“What should we eat today?”</strong>. We thought, what if the answer wasn’t just in recipes, but in moods and colors?
                        </p>
                    </div>
                </div>

                {/* Card 2: Content + hình */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-black mb-4 text-center">New Vision</h2>
                    <p className="text-black leading-relaxed !font-[Quicksand] text-xl">
                        In our minds, food is never just calories. It’s connection, culture, and comfort. We believe every bite should tell a story. 
                        With <strong className='font-[SFUFutura]'>Korofu</strong>, we want to help people discover dishes that don’t just satisfy hunger, but resonate with the heart.
                    </p>
                    </div>
                    <div className="order-1 md:order-2">
                    <Image
                        src="/about2.jpg"
                        alt="New Vision"
                        width={600}
                        height={400}
                        className="rounded-[5px] shadow-[5px_5px_0_#000] border-[3px] border-black"
                    />
                    </div>
                </div>

                <div className="space-y-8 text-center">
                    <h2 className="text-4xl font-bold text-black">The Team</h2>

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
            <Footer />
        </div>
    );
}