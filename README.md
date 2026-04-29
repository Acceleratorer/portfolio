
# Accelra Portfolio Pro

A polished static portfolio for **Tan Le / Accelra**.

## What changed from the original version

- Replaced placeholder `Lorem ipsum` content with a real personal-brand structure.
- Added React.js, Next.js, Node.js, Tailwind CSS, AI/ML, Data, and MLOps positioning.
- Improved skill filtering with multi-category support.
- Added real project directions aligned with GitHub, UIT, Kaggle, CV/AI, Discord bot, and automation work.
- Added responsive glassmorphism UI, dark/light mode, typing role effect, animated counters, reveal-on-scroll, contact email draft, copy-email button, and theme persistence.
- Fixed common deployment path issues by using relative asset paths like `./assets/...`.

## How to run locally

Just open `index.html` in your browser.

For a better local server preview:

```bash
python -m http.server 5500
```

Then open:

```
txt
http://localhost:5500
```

## Suggested deployment

### Vercel

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Deploy.
4. Add your custom domain.
5. Copy the DNS records from Vercel to Tenten DNS.

### GitHub Pages

1. Push to a public repo.
2. Go to Settings → Pages.
3. Choose branch `main` and root folder.
4. Add custom domain later.

## Optional next upgrade

Convert this static site to Next.js:

```bash
npx create-next-app@latest accelra-next
```

