import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "uploadthing.com",   // Thêm domain "uploadthing.com"
      "utfs.io"            // Thêm domain "utfs.io" để hỗ trợ tải ảnh từ đây
    ]
  }
};

export default nextConfig;
