"use client";

import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Preview() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <h1>Đây là preview</h1>
            <Footer />
        </div>
    );
}
