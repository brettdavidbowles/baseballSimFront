/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HASURA_ACCESS_KEY: 'LVgJyGDrrgoxPmCr0Aap507imgvBHSJ5PgIMxndqCzmn8Ep2yuOVQA8zypMDcGre',
    API_URL: 'https://baseball-sim.hasura.app/v1/graphql'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  }
}

module.exports = nextConfig
