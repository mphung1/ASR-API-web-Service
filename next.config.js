/** @type {import('next').NextConfig} */
// require("dotenv").config();

module.exports = {
    reactStrictMode: true,
    // env: {
    //   NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    // },
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Cross-Origin-Embedder-Policy',
              value: 'require-corp',
            },
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin',
            },
          ],
        },
      ];
    },
  
  }
  

  
  