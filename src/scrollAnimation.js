export function enableScrollAnimations() {
  const items = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(item => observer.observe(item));
}
