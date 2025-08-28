"use client";

import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import { Camera } from "lucide-react";
import { useState } from 'react';

export default function QuickPick() {
    const [images, setImages] = useState<string[]>([])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        const files = Array.from(e.target.files)
        const newImages = files.map(file => URL.createObjectURL(file))
        setImages(prev => [...prev, ...newImages])
        }
    }
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 py-12 space-y-16">
                <h1 className="text-4xl font-bold text-black text-center">Contact</h1>
                {/* Tiêu đề */}
                <div className="text-center space-y-8">
                    <p className="text-xl text-black !font-[Quicksand]">
                    We’d love to hear from you! Whether you have questions, feedback, or ideas for collaboration, feel free to reach out through any of the channels below.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Image src="/assets/icon/fb.png" alt="icon1" width={48} height={48} />
                        <Image src="/assets/icon/insta.png" alt="icon2" width={48} height={48} />
                        <Image src="/assets/icon/mail.png" alt="icon3" width={48} height={48} />
                    </div>
                </div>
                
                <div className="flex justify-center gap-8 mt-10 font-semibold">
                    {/* Card 1 */}
                    <div className="w-[400px] bg-[#A2E59C] border-2 border-black shadow-[5px_5px_0_#000] rounded-[10px] p-6 flex flex-col gap-10">
                        <h2 className="text-3xl font-semibold">Any question?</h2>
                        <div className="flex flex-col gap-4">
                            {/* Name */}
                            <div className="flex flex-row items-center gap-2">
                                <label className="text-medium w-15">Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Type something...'
                                    className="flex-1 bg-white border-2 border-black shadow-[3px_3px_0_#000] rounded-[5px] p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-row items-center gap-2">
                                <label className="text-medium w-15">Email</label>
                                <input 
                                    type="email" 
                                    placeholder='Type something...'
                                    className="flex-1 bg-white border-2 border-black shadow-[3px_3px_0_#000] rounded-[5px] p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                                />
                            </div>

                            {/* Question */}
                            <div>
                                <label className="block text-medium mb-1">Question</label>
                                <textarea 
                                    rows={3} 
                                    placeholder='Type something...'
                                    className="w-full bg-white border-2 border-black shadow-[3px_3px_0_#000] rounded-[5px] p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                ></textarea>
                            </div>

                            {/* Attachment */}
                            <label className="flex flex-col items-center justify-center bg-white border-2 border-dashed border-black rounded-[5px] p-6 cursor-pointer hover:bg-gray-50 w-full min-h-[130px]">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                {images.length === 0 ? (
                                    <Camera className="w-6 h-6" />
                                ) : (
                                    <div className="grid grid-cols-3 gap-2 w-full">
                                    {images.map((src, idx) => (
                                        <img
                                        key={idx}
                                        src={src}
                                        alt={`preview-${idx}`}
                                        className="w-full h-24 object-cover rounded-md shadow"
                                        />
                                    ))}
                                    </div>
                                )}
                            </label>

                            {/* Submit */}
                            <button className="bg-[#FFF5CC] text-[#FF6D4D] py-2 px-4 border-2 border-black shadow-[3px_3px_0_#000] rounded-[5px] hover:bg-white hover:text-black transition">
                            Submit
                            </button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="w-[400px] bg-[#ADDFFF] border-2 border-black shadow-[5px_5px_0_#000] rounded-[10px] p-6 flex flex-col gap-10">
                        <h2 className="text-3xl font-semibold">Get in touch!</h2>
                        <div className="flex flex-col gap-4">
                            {/* Contact Info 1 */}
                            <div className="flex items-start gap-3">
                                <img src="/assets/icon/location.png" alt="location" width={48} height={48} />
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg">Address</span>
                                    <span className="text-lg font-normal">227 Nguyễn Văn Cừ, Chợ Quán Ward, Hồ Chí Minh City</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <img src="/assets/icon/phone.png" alt="phone"  width={48} height={48} />
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg">Phone</span>
                                    <span className="text-lg font-normal">0987.654.321 (Mr. Huy)</span>
                                    <span className="text-lg font-normal">0907.087.381 (Mr. Nhân)</span>
                                </div>
                            </div>
                            {/* Contact Info 2 */}
                            <div className="flex items-start gap-3">
                                <img src="/assets/icon/mail.png" alt="email"  width={48} height={48} />
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg">Email</span>
                                    <span className="text-lg font-normal">korofu.food@gmail.com</span>
                                </div>
                            </div>
                            <img src="/assets/images/food.svg" alt="illustration" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
