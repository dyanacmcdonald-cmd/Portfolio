# Daniel Yanac McDonald — Film portfolio

A complete two-page static website. No installation, account connection, build command, or paid service is needed to open the files.

## Preview on your computer

1. Download and extract the ZIP.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. Keep the `assets` folder beside the HTML files. Opening an HTML file directly from inside the ZIP will not work properly.
4. Choose **Explore the documentary** to open the OMNIMAX page.

The uploaded-footage clips have no audio tracks. The opening plays silently when browser settings allow it. Press **Play video** if it does not start. Reduced-motion settings pause automatic playback. The Peru gallery plays the selected clip; pause controls remain visible. The finished documentary uses YouTube, starts muted, and needs an internet connection. Its direct YouTube link remains available if embedding is unavailable.

## Publish with GitHub Pages

The site has been packaged for publishing; it has not been published to an account.

1. Create a repository in your GitHub account for the portfolio.
2. Upload the extracted contents, including the entire `assets` folder. `index.html` must be at the repository root, beside `omnimax.html`, `styles.css`, and `script.js`. Upload the files, not the ZIP and not an extra enclosing folder.
3. Commit the upload to your repository's main branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select your main branch and **/(root)**, then save.
6. When deployment finishes, GitHub displays your site's address in Pages settings. Open that address and check both pages, footage controls, contact links, and résumé download before submitting the link for class.

GitHub's publishing instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files to edit

| File | What it controls |
| --- | --- |
| `index.html` | Opening film, introduction, purpose, portrait, Peru gallery, contact |
| `omnimax.html` | Documentary, project team, contributions, b-roll, reflection |
| `styles.css` | Colors, fonts, spacing, desktop and mobile layouts |
| `script.js` | Video pause/play, Peru selections, documentary player, b-roll dialog |
| `assets/` | Optimized silent footage, stills, portraits, favicon, résumé |
| `content-reference.json` | Your original supplied portfolio wording, for reference |

The HTML contains the displayed writing. Editing `content-reference.json` alone does not change the site. Substantive wording has been kept as supplied; revise the HTML directly whenever you decide to update your writing. Navigation, headings, and buttons are interface labels.

## Common updates

### Replace the résumé

Replace `assets/daniel-yanac-mcdonald-resume.pdf` with your new PDF using the same filename. The download links on both pages will continue to work.

### Replace a portrait

Replace `assets/daniel-portrait.jpg` or `assets/daniel-on-location.jpg`, keeping the filename. If the content changes, update the corresponding image's `alt` description in `index.html`.

### Update contact information

Search both HTML files for the existing Gmail address and LinkedIn address, then replace the links. The PDF résumé is your original file and retains its own school email address.

### Change a clip

Replace its `.mp4` and matching `.jpg` poster in `assets`, keeping the filenames. Export H.264 MP4 with no audio and a still image from the clip. Keep short previews rather than uploading the original 4K files. The current files use 1280 × 720 pixels, preserving their proportions.

`opening-sequence.mp4` is a short establishing sequence assembled from your OMNIMAX clips: exterior, clock, film handling, conversation. `opening-poster.jpg` is its still fallback. To change the opening, replace those two files.

Peru clips are selectable in `index.html`; change their button `data-video`, `data-poster`, `data-description`, and visible labels together if using new filenames or subjects. OMNIMAX b-roll buttons are in `omnimax.html`.

### Replace the finished documentary

The current YouTube ID is `c5mxEEuOQnI`. Change the ID in `script.js` and the direct YouTube link in `omnimax.html`. The player is created only after a visitor presses **Load documentary**. Captions are requested when available; a transcript or caption file can be added when you have one.

## Media and credits

- OMNIMAX documentary project team: Daniel Yanac McDonald, Evan Meisberger, Aiden Hughes.
- Uploaded OMNIMAX b-roll: filmed by Daniel Yanac McDonald, as confirmed in the portfolio interview.
- Peru footage: filmed by Daniel Yanac McDonald during a mission trip, as confirmed in the portfolio interview.
- Both portraits and the résumé were supplied by Daniel.
- No stock footage, AI imagery, invented experience, testimonials, outcomes, or software claims have been added.

## Checks and next steps

Local asset paths and page anchors have been checked. All twelve local footage videos were verified to contain zero audio streams. The supplied portfolio text was checked against the original wording. The JavaScript passed a syntax check.

Browser-based visual and interaction checks could not be completed in the build environment. Please open the extracted site to review the desktop and phone layouts and playback before publishing. The YouTube player's availability also needs checking in a normal browser. Layouts include mobile breakpoints, keyboard focus styles, image descriptions, reduced-motion handling, pause controls, and still fallbacks.

Optional additions: a second fully explained project, testimonials, and a transcript for the documentary. Instagram was intentionally left out for now. The site includes the supplied résumé and professional contact links.

## For later revisions

In GitHub, open the file you want to edit, choose the pencil icon, make the change, and commit it. Keep a downloaded backup. To request help later, provide the repository address or upload the current files and describe the exact change you want.
