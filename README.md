# Intro

This is a minimum reproducible repo of a bug I've been having with env variables in another Next.js project. The env variables are set for a split second and then they disappear.

I have a `.env` with two environment variables. It is consumed in `next.config.js`, so I try to display it in `index.js`. If you run this project in dev, you will notice that they appear for a split second, then they disappear.

# Steps

- `git clone` this repo
- `yarn`
- `yarn run dev`
