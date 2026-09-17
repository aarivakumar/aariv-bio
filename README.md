# aariv-bio

Aariv's personal bio site — a five-year roadmap (2026–2030) covering robotics & physical AI, swimming, and founding a nonprofit and a startup.

## Structure

- `index.html` — page content
- `css/style.css` — styling (light/dark aware, responsive)
- `js/script.js` — timeline data and render/animation logic

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the repo settings, go to **Pages**.
3. Set the source to the `main` branch, root folder.
4. The site will be published at `https://<username>.github.io/aariv-bio/`.
