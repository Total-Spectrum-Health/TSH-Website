# TSH-Website

The main repository that hosts the Total Spectrum Health website.

A plain static site (HTML/CSS/JS) served via **GitHub Pages**. No build step.

## Structure

```
.
├── index.html          # Home
├── about.html          # About (placeholder)
├── services.html       # Services (placeholder)
├── contact.html        # Contact (placeholder)
├── 404.html            # Custom not-found page
├── css/styles.css      # Base styles
├── js/main.js          # Site scripts
├── assets/
│   ├── favicon.svg
│   └── images/         # Image assets (.gitkeep placeholder)
├── robots.txt
├── sitemap.xml
└── .nojekyll           # Serve files as-is, skip Jekyll processing
```

## Local preview

Open `index.html` directly, or run a static server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. For a custom domain, add it under **Settings → Pages → Custom domain** (this creates a `CNAME` file) and configure DNS. Update the URLs in `robots.txt` and `sitemap.xml` to match.
