"use client";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#21120D] mb-4 tracking-tight border-2 border-black shadow-[4px_4px_0_#FFD21E] px-6 py-3 bg-white rounded-2xl">
          Scanning your mood vibes...
        </h1>
      </div>
    </div>
  );
}
