import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
export default function Contact() {
  const formRef = useRef(null);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' أو 'error'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitStatus(null);
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_499uexn",
        "template_7vdz9iq",
        formRef.current,
        "KdA3BpxVxfRUp9LpJ",
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EMAILJS ERROR", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // const formData = new FormData(e.target);

  // // 💡 تنبيه: ضعي هنا مفتاح الـ Access Key الخاص بكِ من موقع Web3Forms (مجاني ويصلك بلحظة)
  // formData.append("access_key", "service_499uexn");

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setSubmitStatus("success");
  //       e.target.reset(); // تفريغ الحقول بعد الإرسال بنجاح
  //     } else {
  //       setSubmitStatus("error");
  //     }
  //   } catch (error) {
  //     setSubmitStatus("error");
  //   } finally {
  //     setisLoading(false);
  //   }
  // };

  return (
    <div
      id="contact"
      className="max-w-4xl mx-auto px-6 py-12 flex flex-col justify-center min-h-screen text-white"
    >
      {/* عنوان القسم بأسلوب نهاية اللعبة */}
      <div className="mb-10 text-center md:text-right">
        <span className="text-xs font-mono uppercase tracking-widest text-[#51a4d08b] font-bold block mb-1">
          {"// INITIATE CONNECTION"}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight ">
          Send a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51a4d08b] to-cyan-400">
            Message
          </span>
        </h2>
      </div>

      {/* حاوية الفورم الزجاجية */}
      <div className="bg-[#11141a]/60 backdrop-blur-md border border-gray-800/80 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* حقل الاسم */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
              />
            </div>
            {/* حقل الإيميل */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
                className="bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
              />
            </div>
          </div>

          {/* حقل نص الرسالة */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your project details or message here..."
              className="bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600 resize-none"
            />
          </div>

          {/* زر الإرسال التفاعلي */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#51a4d08b] to-cyan-500 hover:from-[#51a4d08b] hover:to-cyan-400 text-gray-950 font-bold font-mono py-3.5 px-6 rounded-xl transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>SENDING ...</span>
            ) : (
              <>
                <span>SEND MESSAGE</span>
              </>
            )}
          </button>

          {/* رسائل التغذية الراجعة (نجاح / خطأ) */}
          {submitStatus === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm font-mono text-emerald-400 mt-4"
            >
              ✔ Transmission received successfully! I will contact you soon.
            </motion.p>
          )}
          {submitStatus === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm font-mono text-red-400 mt-4"
            >
              ✖ Failed to send transmission. Please try again.
            </motion.p>
          )}
        </form>
      </div>
      <footer className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-500 w-full">
        {/* الحقوقب */}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-400 font-bold">&lt;SHAHAD /&gt;</span>. ALL
          RIGHTS RESERVED.
        </div>

        {/* روابط الحسابات المهنية بأسلوب تفاعلي ناعم */}
        <div className="flex items-center space-x-6 space-x-reverse">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-1"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shahad-alsaneea-58a886346"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="/resume.pdf" // ارفعي ملف السيرة الذاتية في مجلد public باسم resume.pdf
            download
            className="ml-12 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1 font-bold text-gray-400 border border-gray-800 px-2.5 py-1 rounded bg-gray-950/40"
          >
            <span>DOWNLOAD CV</span>
          </a>
        </div>

        {/* مؤشر حالة السيرفر الوهمي لتعزيز ثيم الألعاب */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-gray-600">PORTFOLIO STATUS: ONLINE</span>
        </div>
      </footer>
    </div>
  );
}
