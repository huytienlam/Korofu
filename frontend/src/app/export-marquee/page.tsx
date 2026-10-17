export default function MarqueeExport() {
  return (
    <main className="w-[1920px] h-[110px] overflow-hidden bg-white">
      <section
        className="bg-[#FFE262] py-6 border-3 border-black shadow-[5px_5px_0_#000]
                  relative overflow-hidden flex z-1"
      >
        {[1, 2].map((copy) => (
          <div
            key={copy}
            className="flex-shrink-0 flex min-w-full animate-marquee-right"
          >
            <span className="text-black font-semibold text-5xl whitespace-nowrap">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index}>
                  find
                  <span className="mx-6">·</span>
                  feel
                  <span className="mx-6">·</span>
                  taste
                  <span className="mx-6">·</span>
                  repeat
                  <span className="mx-6">·</span>
                </span>
              ))}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}