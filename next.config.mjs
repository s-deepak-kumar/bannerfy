/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/((?!api|join-waitlist).*)", // Allow /api/* and /join-waitlist
          destination: "/join-waitlist",
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  