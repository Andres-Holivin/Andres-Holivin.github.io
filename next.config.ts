import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export', // Enable static HTML export
    images: {
        unoptimized: true, // Required for static export
    },
    // Only add basePath if deploying to a subfolder (not needed for username.github.io)
    // basePath: '',
}

export default nextConfig
