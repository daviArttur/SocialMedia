
export function LoadDataWithScrollHandler() {
  const scroll = window.scrollY;
  const height = document.body.offsetHeight - window.innerHeight;

  if (scroll > height * 0.75) {
    return true;
  }

  return false
}