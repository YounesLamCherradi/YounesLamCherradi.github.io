# Real project website screenshots

The portfolio currently includes illustrative project images. The environment used to package this project could not access the websites in a working graphical browser, so no fabricated screenshots have been substituted.

To capture **real current screenshots** from your own computer:

1. In the extracted portfolio directory, run `npm install`.
2. Run `npx playwright install chromium` once to install Playwright's browser.
3. Run `npm run capture:projects`.
4. Run `npm run dev` and open `http://localhost:3000`.

The screenshot script visits the four public URLs listed in `lib/site.ts` and replaces the matching images inside `public/images/` **only if the capture succeeds**. For inaccessible/password-protected pages, the existing images stay untouched. If your computer cannot access a site, use an authorized, sanitized screenshot manually saved over the corresponding image file.

| Project | File |
|---|---|
| Digital Innovation Lab | `public/images/project-innovation-lab.png` |
| Praxis | `public/images/project-praxis.png` |
| Atlas Voices | `public/images/project-atlas-voices.png` |
| WYF Morocco | `public/images/project-wyf.png` |

Review captured content before publicly deploying. Do not share private student records, names, internal information or confidential dashboard content.
