# AB-IT

Portfolio and company website for **Nick Meiremans**, freelance software developer. Designed for the root of **https://ab-it.io/**.

## Stack

Plain HTML, CSS and JavaScript. No dependencies, build step, external fonts, analytics or backend. All page content and navigation remain accessible without JavaScript.

## Preview

Open `index.html` directly, or run `python -m http.server 8080 --bind 127.0.0.1` in this directory and visit http://127.0.0.1:8080. The email copy button uses the Clipboard API on HTTPS or localhost and displays the address if copying is unavailable.

## Host

### GitHub Pages

The same website is also published at **https://ab-itteam.github.io/** from the `master` branch of [ab-itteam/ab-itteam.github.io](https://github.com/ab-itteam/ab-itteam.github.io). That repository has no custom domain, so the short GitHub URL continues to work directly. Changes pushed here update `ab-it.io`; update the organization-site copy separately when the website changes. Its README documents the files to copy and the existing site-verification tag to preserve.

The workflow in `.github/workflows/pages.yml` publishes only the public website files whenever `main` is updated. GitHub Pages must use **GitHub Actions** as its source, with **ab-it.io** configured as the custom domain in repository Settings → Pages. With Actions deployment, the repository's `CNAME` file documents the intended domain; the domain must also be saved in Pages settings.

Replace the old apex (`@`) A record pointing to `94.130.123.150` with these records (TTL 3600 is fine):

| Name | Type | Value |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | ab-itteam.github.io |

Remove conflicting apex A/AAAA records and conflicting records for `www`, while preserving mail records and unrelated subdomains. Enable **Enforce HTTPS** in Pages settings once GitHub has issued the certificate after DNS propagation.

Reference: [GitHub's custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

### Other static hosts

An upload-ready archive is available at `output/ab-it-website.zip`. Extract its contents directly into the domain's public document root. Recreate the archive after editing the source files.

Upload these files to the public document root of your static host:

- `index.html`
- `styles.css`
- `script.js`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`

No server-side routing or build configuration is required. Serve over HTTPS. For hosts that require a build command, leave it empty and use the repository root as the publish directory; deploy only the public files above. Do not upload `.git`, `.idea`, development tools, or source documents.

## Content and maintenance

- Content, project links, contact details and metadata: `index.html`.
- Colours, typography and responsive layout: `styles.css`.
- Mobile navigation and copy-email interaction: `script.js`.
- Contact email: `nick@ab-it.io`, also published on the Restocker website.
- Canonical URL and sitemap assume `https://ab-it.io/`. Update both if the final hostname differs.
- Project visual panels are typographic presentations, not product screenshots.
- Professional experience is based on the supplied CV; the full CV and personal phone number are not included in the public files.
- Project descriptions are based on the supplied links. GarageManager exposes only an app title publicly, so its description is deliberately general.

The six projects link directly to their websites; Romanian Shipping links to its Shopify App Store listing. Contact links open an email client; there is no form service to configure.
