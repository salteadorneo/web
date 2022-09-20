import { useEffect, useState } from "preact/hooks";

export default function ButtonTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      id="theme-toggle"
      data-tooltip-target="tooltip-toggle"
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      onClick={handleClick}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
