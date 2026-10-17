const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage({
    viewport: {
      width: 1920,
      height: 110,
    },
    deviceScaleFactor: 1,
  });

  await page.goto("http://localhost:3000/export-marquee", {
    waitUntil: "networkidle",
  });

  // Hide Next.js development UI
  await page.addStyleTag({
    content: `
      [data-nextjs-toast],
      nextjs-portal {
        display: none !important;
      }
    `,
  });

  // Wait for fonts
  await page.evaluate(() => document.fonts.ready);

  const outputDir = "./marquee-frames";

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const fps = 30;
  const duration = 20;
  const totalFrames = fps * duration;

  for (let i = 0; i < totalFrames; i++) {
    const time = (i / fps) * 1000;

    // Freeze animations at the exact timestamp
    await page.evaluate((time) => {
      document.getAnimations().forEach((animation) => {
        animation.currentTime = time;
        animation.pause();
      });
    }, time);

    await page.screenshot({
      path: `${outputDir}/frame-${String(i).padStart(4, "0")}.png`,
    });

    console.log(`Rendered frame ${i + 1}/${totalFrames}`);
  }

  await browser.close();

  console.log("Done! 600 frames rendered.");
})();