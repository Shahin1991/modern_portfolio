# shahinnazer.com

Personal site for Shahin Nazer, built with Astro and Tailwind CSS and deployed to GitHub Pages.

## Editing content

All copy (bio, experience, skills, projects, social links) lives in `src/data/site.ts`.

To show the **Download CV** button, add your CV as `public/resume.pdf`. The button appears automatically on the next build.

## Development

Requires Node 22.22 or later (`nvm use 26` on this machine).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main` or `master`.
In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
`public/CNAME` keeps the `shahinnazer.com` custom domain.

The old `about.html` and `contact.html` URLs redirect to the matching sections of the new single page.
