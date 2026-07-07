import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, TraditionalIcon } from "@/components/icons";

export default function Themes() {
  const [theme, setTheme] = useState("default");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <button
        className="p-2  mr-3 rounded-full font-medium text-white/90 bg-white/10 backdrop-blur-[2px] border border-neutral-400 shadow-lg transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
        onClick={() => setTheme("default")}
      >
        <SunIcon />
      </button>
      <button
        className="h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105  shadow-md shadow-black"
        style={{
          backgroundColor: theme === "dark" ? "#38835f" : "#02170d",
          color: "#ffffff", // لتوحيد لون الأيقونات الافتراضي إذا لم يُحدد داخلها
        }}
        onClick={() => setTheme(theme === "dark" ? "default" : "dark")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </button>

      <button
        className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden  transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105 shadow-md shadow-black"
        style={{
          backgroundColor: theme === "traditional" ? "#7d5742" : "#260b01",
        }}
        onClick={() =>
          setTheme(theme === "traditional" ? "default" : "traditional")
        }
        aria-label="Toggle Traditional Mode"
      >
        {/* أضفنا -translate-y-0.5 لرفع الأيقونة بمقدار بسيط جداً للأعلى */}
        <div className="-translate-y-0.5 flex items-center justify-center">
          <TraditionalIcon size={28} />
        </div>
      </button>
    </div>
  );
}
