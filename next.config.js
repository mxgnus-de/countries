/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['flagcdn.com', 'upload.wikimedia.org'],
    }
}

module.exports = nextConfig
