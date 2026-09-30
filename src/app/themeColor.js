// The browser's own chrome takes the page ground from the token block, so it
// follows whichever theme is on rather than holding the dark one.
export function syncThemeColor() {
  const ground = getComputedStyle(document.documentElement).getPropertyValue('--ink-900').trim();
  if (!ground) return;
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.append(meta);
  }
  meta.content = `rgb(${ground})`;
}
