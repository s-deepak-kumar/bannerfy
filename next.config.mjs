/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/((?!api|join-waitlist|_next|public).*)",
                destination: "/join-waitlist",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
