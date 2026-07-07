/** @type {import('next').NextConfig} */
const nextConfig = {
  // وضع الـ Origins المسموحة في جذر الـ Config مباشرة لحل مشكلة الحظر الأمنية 🚀
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "172.20.240.1:3000",
    "172.20.240.1",
  ],

  // لإسكات كود توربوباك القديم وتجنب أي تعارضات
  turbopack: {},
};

export default nextConfig;
