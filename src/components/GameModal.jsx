"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function GameModal({ onComplete }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(""); // 'male' أو 'female'
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  // جعل التركيز (Focus) تلقائي على السطر أول ما تفتح الشاشة
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("النظام: حقل الاسم فارغ. يرجى إدخال المعرّف.");
      return;
    }
    if (!gender) {
      setError("النظام: لم يتم تحديد الرمز الشخصي (مذكر/مؤنث).");
      return;
    }

    onComplete({ name, gender });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 5  backdrop-blur-sm font-gaming backdrop:bg-ui-bg ">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl p-6 text-right text-brand-sand border border-ui-btn rounded-2xl shadow-2xl"
        dir="rtl"
      >
        {/* ترويسة سيرفر التيرمنال */}
        <div
          className="mb-8 border-b border-brand-muted/30 pb-4 text-left font-mono text-xs text-brand-muted"
          dir="ltr"
        >
          SECURE CONNECTION ESTABLISHED // SHAHAD_OS_v4.0
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-brand-clay mb-2">
              [+] تهيئة النظام الرقمي
            </h2>
            <p className="text-sm text-brand-muted">
              يرجى بناء الهوية الافتراضية.
            </p>
          </div>

          {/* سطر الـ Input النقي (طريقة التيرمنال) */}
          <div
            className="group relative flex items-center gap-2 pt-4 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <span className="text-brand-clay text-xl font-bold font-mono select-none">
              shahad@guest:~$&nbsp;
            </span>

            <div className="relative flex-1">
              {/* الـ Input المخفي بروازه والمكشوف نصه فقط */}
              <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                maxLength={20}
                placeholder="أدخل اسمك الحركي هنا..."
                className="w-full bg-transparent border-none outline-none text-xl text-brand-sand placeholder:text-brand-muted/40 p-0 m-0 focus:ring-0 text-right pr-1"
                autoComplete="off"
              />

              {/* مؤشر الطباعة الوميضي المخصص عند الكتابة */}
              {name.length === 0 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-5 bg-brand-clay animate-pulse pointer-events-none" />
              )}
            </div>
          </div>

          {/* تحديد الرمز الشخصي */}
          <div className="pt-4 border-t border-brand-muted/10">
            <label className="block text-sm font-medium mb-3 text-brand-muted">
              [#] حدد نمط واجهة المخاطبة:
            </label>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <button
                type="button"
                onClick={() => {
                  setGender("male");
                  setError("");
                }}
                className={`py-2 px-4 rounded border text-sm transition-all cursor-pointer text-center ${
                  gender === "male"
                    ? "bg-brand-clay text-brand-black border-brand-clay font-bold shadow-[0_0_15px_rgba(166,123,86,0.4)]"
                    : "bg-transparent text-brand-muted border-brand-muted/40 hover:border-brand-clay/60 hover:text-brand-sand"
                }`}
              >
                GUEST_MALE (مستكشف)
              </button>
              <button
                type="button"
                onClick={() => {
                  setGender("female");
                  setError("");
                }}
                className={`py-2 px-4 rounded border text-sm transition-all cursor-pointer text-center ${
                  gender === "female"
                    ? "bg-brand-clay text-brand-black border-brand-clay font-bold shadow-[0_0_15px_rgba(166,123,86,0.4)]"
                    : "bg-transparent text-brand-muted border-brand-muted/40 hover:border-brand-clay/60 hover:text-brand-sand"
                }`}
              >
                GUEST_FEMALE (مستكشفة)
              </button>
            </div>
          </div>

          {/* رسائل خطأ السيستم */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm font-bold pt-2"
            >
              {error}
            </motion.p>
          )}

          {/* زر التفعيل النهائي بستايل التيرمنال */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 border border-brand-clay text-brand-clay hover:bg-brand-clay hover:text-brand-black font-bold rounded transition-all cursor-pointer text-sm tracking-wider uppercase"
            >
              EXECUTE_LOGIN.SH
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
