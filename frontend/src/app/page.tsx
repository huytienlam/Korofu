import { Navbar } from '../components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-10 ">
        <Hero />
      </main>
    </>
  )
}