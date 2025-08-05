import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F1]">
      <Navbar />
      <main className="container mx-auto mt-10">
        <Hero />
      </main>
    </div>
  );
}