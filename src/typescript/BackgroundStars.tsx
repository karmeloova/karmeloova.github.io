import { useEffect } from "react";

export function BackgroundStars() {
  useEffect(() => {
    console.log("⭐ Tworzenie kropek");

    const starCount = 40;
    const container = document.createElement("div");
    container.classList.add("stars-container");
    document.body.appendChild(container);

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.setProperty("--moveX", `${Math.random() * 20 - 10}px`);
      star.style.setProperty("--moveY", `${Math.random() * 20 - 10}px`);

      container.appendChild(star);
    }

    return () => container.remove();
  }, []);

  return null;
}
