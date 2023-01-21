export function slideAnimation() {
  return `
    animation: slide 0.5s forwards;
    @keyframes slide {
      from {
        transform: translate3d(-20px, 0, 0);
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
  `
}