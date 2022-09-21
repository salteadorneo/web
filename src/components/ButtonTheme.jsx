import { useEffect, useState } from "preact/hooks";

const moon = <svg class="w-4 h-4" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="Lager 94"><path data-name="Path 70" d="M12.516 4.509A12 12 0 0 0 22.3 19.881 12.317 12.317 0 0 0 24 20a11.984 11.984 0 0 0 3.49-.514 12.1 12.1 0 0 1-9.963 8.421A12.679 12.679 0 0 1 16 28a12 12 0 0 1-3.484-23.491M16 0a16.5 16.5 0 0 0-2.212.15A16 16 0 0 0 16 32a16.526 16.526 0 0 0 2.01-.123 16.04 16.04 0 0 0 13.84-13.665 16.516 16.516 0 0 0 .15-2.268A1.957 1.957 0 0 0 30 14a2.046 2.046 0 0 0-1.23.413A7.942 7.942 0 0 1 24 16a8.35 8.35 0 0 1-1.15-.08 7.995 7.995 0 0 1-5.264-12.7A2.064 2.064 0 0 0 16.056 0Z" fill="currentColor" /></g></svg>
const sun = <svg class="w-4 h-4" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g data-name="Lager 93"><g data-name="Sun 3, Brightness 3" transform="translate(2 2)"><path data-name="Path 68" d="M32 14h-4.967c-2 1.769-.779 4 .967 4h4.967c1.999-1.769.779-4-.967-4Z" fill="currentColor" /><g data-name="Path 69" fill="currentColor" stroke-miterlimit="10"><path d="M17.172 10.111a6 6 0 1 0 4.715 4.715 6.01 6.01 0 0 0-4.715-4.715Z" /><path d="M15.999 14c-.599 0-1.161.265-1.544.726-.274.331-.568.896-.415 1.706.139.731.796 1.388 1.528 1.527.145.027.29.041.43.041.598 0 1.16-.265 1.542-.726.275-.331.57-.896.417-1.703-.139-.734-.796-1.391-1.529-1.53a2.319 2.319 0 0 0-.43-.041m0-4c.384 0 .777.036 1.174.111 2.349.445 4.27 2.366 4.715 4.715A6.006 6.006 0 0 1 15.997 22c-.383 0-.776-.036-1.173-.111-2.348-.445-4.27-2.366-4.714-4.714A6.005 6.005 0 0 1 15.999 10Z" fill="currentColor" /></g><rect data-name="Rectangle 26" width="8" height="4" rx="1.993" transform="translate(26 14)" fill="currentColor" /><rect data-name="Rectangle 27" width="8" height="4" rx="1.993" transform="rotate(90 -4 22)" fill="currentColor" /><rect data-name="Rectangle 28" width="8" height="4" rx="1.993" transform="rotate(90 10 8)" fill="currentColor" /><rect data-name="Rectangle 29" width="8" height="4" rx="1.993" transform="translate(-2 14)" fill="currentColor" /><g data-name="Group 22"><rect data-name="Rectangle 30" width="6.925" height="3.766" rx="1.883" transform="rotate(-45 18.994 -24.97)" fill="currentColor" /></g><g data-name="Group 23"><rect data-name="Rectangle 31" width="3.766" height="6.925" rx="1.883" transform="rotate(-45 42.86 -15.08)" fill="currentColor" /></g><g data-name="Group 24"><rect data-name="Rectangle 32" width="3.766" height="6.925" rx="1.883" transform="rotate(-45 5.297 .469)" fill="currentColor" /></g><g data-name="Group 25"><rect data-name="Rectangle 33" width="6.925" height="3.766" rx="1.883" transform="rotate(-45 34.55 12.586)" fill="currentColor" /></g></g></g></svg>

export default function ButtonTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      class="hover:text-green-900 dark:text-gray-200 dark:hover:text-white focus:outline-none"
      onClick={handleClick}
    >
      {theme === "light" ? moon : sun}
    </button>
  );
}
