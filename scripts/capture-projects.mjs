/** Captures real, public website screenshots for project cards.
 * Run: npm run capture:projects
 * Requires internet access and Chromium for Playwright.
 * Existing preview images are only overwritten on successful capture.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, renameSync, unlinkSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const out = join(root, 'public', 'images')
mkdirSync(out, { recursive: true })
const sites = [
  ['Digital Innovation Lab', 'https://dil.aui.ma/', 'project-innovation-lab.png'],
  ['Praxis', 'https://praxis.aui.ma/', 'project-praxis.png'],
  ['Atlas Voices', 'https://atlasvoices.org/', 'project-atlas-voices.png'],
  ['WYF Morocco', 'https://wyfmorocco.com/', 'project-wyf.png'],
]
for (const [name, url, filename] of sites) {
  console.log(`\nCapturing ${name} — ${url}`)
  const destination = join(out, filename)
  const temp = destination + '.capture.png'
  if (existsSync(temp)) unlinkSync(temp)
  const result = spawnSync('npx', [
    '--yes', 'playwright', 'screenshot', '--browser', 'chromium',
    '--viewport-size', '1440,900', '--wait-for-timeout', '3500',
    '--timeout', '20000', url, temp
  ], { stdio: 'inherit', shell: process.platform === 'win32' })
  if (result.status === 0 && existsSync(temp) && statSync(temp).size > 10000) {
    renameSync(temp, destination)
    console.log(`Updated ${filename}`)
  } else {
    if (existsSync(temp)) unlinkSync(temp)
    console.log(`Could not capture ${name}; keeping original project image.`)
  }
}
console.log('\nDone. Refresh your portfolio page to see any captured screenshots.')
