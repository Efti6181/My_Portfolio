# Efti Portfolio — VS Code and Netlify Guide

This is the editable, standalone Next.js version of the Digital Mind portfolio. It uses standard npm commands and can run on Windows, macOS, or Linux. The original ChatGPT-hosted site is a separate deployment; changes to this copy will not automatically change that site.

## 1. Run in VS Code

1. Install Node.js 22.13 or newer. Your existing Node.js 24 installation is also suitable.
2. Extract the ZIP.
3. In VS Code, choose **File > Open Folder**, then select the `Efti-Portfolio` folder containing `package.json`.
4. Open **Terminal > New Terminal**.
5. Run:

```sh
npm install
npm run dev
```

Open **http://localhost:3000**. Keep the terminal running while you work. Press **Ctrl+C** to stop the server. Later, you normally need only `npm run dev`; rerun `npm install` when dependencies change.

If Windows PowerShell blocks `npm.ps1`, choose **Command Prompt** from the VS Code terminal dropdown, or use `npm.cmd install` and `npm.cmd run dev`. No execution-policy change is required.

Do not use the VS Code Live Server extension for this project. Next.js needs the development server started by `npm run dev`.

### If the 3D area is blank

Stop the old server with Ctrl+C and extract this updated ZIP into a fresh folder. Open that folder in VS Code and run `npm install`, then `npm run dev`. Open the localhost address printed in the terminal and hard-refresh with Ctrl+Shift+R. Do not open an HTML file or use Live Server.

The hero is built from Three.js geometry; there is no missing model file to download. An animated canvas fallback remains visible while WebGL starts, or when WebGL is unavailable. The fallback is also restored if the graphics context is lost. The full WebGL scene still depends on browser and graphics-driver support.

If the entire page remains unresponsive, open F12 > Console and copy the first red error. Include the command you ran and the browser address; these distinguish a JavaScript loading problem from a graphics problem.

## 2. Edit the portfolio

Save a file with **Ctrl+S**. The browser refreshes automatically while the development server runs.

| What to change | File |
| --- | --- |
| Name, employer, GitHub, email, LinkedIn, Instagram, Facebook, resume link | `data/profile.ts` |
| Education and certificate details/verification URLs | `data/profile.ts` |
| Projects, descriptions, features, stacks and repository links | `data/projects.ts` |
| Skills and technology categories | `data/skills.ts` |
| Hero introduction and main headline | `components/portfolio/Hero.tsx` |
| About text and portrait layout | `components/portfolio/About.tsx` |
| Violet dot portrait | `public/images/efti-dot-portrait.png` |
| Focus, experience, education and GitHub sections | `components/portfolio/Journey.tsx` |
| Contact text and form behavior | `components/portfolio/Contact.tsx` |
| Colors, fonts, spacing and responsive styles | `app/globals.css` |
| Title, description and social metadata | `app/layout.tsx` |
| Main 3D visual | `components/three/NeuralCore.tsx` |
| Fallback visual for browsers without WebGL | `components/three/CoreFallback.tsx` |
| Project preview visuals | `components/portfolio/ProjectVisual.tsx` |

Your email (najmul27alam@gmail.com), LinkedIn, Instagram and Facebook links are already configured. Your current employer is Britannia Garment Packaging. You can edit your contact details or add your résumé in `data/profile.ts`:

```ts
email: 'najmul27alam@gmail.com',
resume: '/resume/Najmul-Alam-Efti-Resume.pdf',
```

Use your actual values. Put your real PDF at `public/resume/Najmul-Alam-Efti-Resume.pdf`. The `/public` part is not included in the browser URL.

The project visuals are labeled interface concepts, not screenshots of the real applications. Add real screenshots under `public/projects/` and replace the relevant preview in `ProjectVisual.tsx` when desired. Certificate verification URLs can be added in `data/profile.ts`.

### Featured projects and portrait

Cover Page Generator is the leading featured project, with its GitHub repository and `https://covgene.netlify.app/` demo linked in `data/projects.ts`. The project details distinguish the frontend demo from the PHP/MySQL features. The IoT Firefighting Robot is included under Robotics & IoT; add its actual stack, repository and photographs to `data/projects.ts` when available. Featured and archive counts update from the data arrays.

The supplied photo was stylized into a violet dot portrait using image generation. The About card adds a pointer-based 3D tilt; it is an image with a depth effect, not a scanned 3D face. Reduced-motion preferences disable the tilt. Replace `public/images/efti-dot-portrait.png` or change `profile.portrait` to use another image.

### Contact form behavior

The contact link opens a new email addressed to najmul27alam@gmail.com. The form opens the visitor’s email app with a prepared draft addressed to the same email; the visitor reviews and sends it there. It also provides a copyable draft. This does not send email automatically or create a server-side delivery service.

## 3. Check the production build

```sh
npm run build
npm start
```

The build must complete before `npm start`. `npm start` serves the optimized production build at http://localhost:3000. Use `npm run dev` again when editing.

You can also check TypeScript separately:

```sh
npm run typecheck
```

## 4. Host on Netlify

The ZIP includes `netlify.toml` with the build settings. Netlify's Next.js adapter handles the framework deployment automatically.

1. Create a new empty GitHub repository, for example `efti-portfolio`. Leave the README, license and gitignore initialization options unchecked because this folder already contains project files.
2. Open the VS Code terminal inside the project and run:

```sh
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/efti-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. If this folder is already in a Git repository, reuse that repository and its remote rather than initializing or adding another remote.

3. In Netlify, choose **Add new project > Import an existing project**, connect GitHub, and select the repository.
4. Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Base directory | Leave blank when `package.json` is at the repository root |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | `22` (already declared in `netlify.toml`) |

5. Deploy. Netlify will install dependencies and build the application.
6. After you know the final URL, add a build environment variable named `NEXT_PUBLIC_SITE_URL` with your complete site URL, for example `https://your-site-name.netlify.app`. If using a custom domain, use that domain instead.
7. Redeploy so the sitemap, canonical URL and structured data use your domain.

Use the GitHub import workflow for this Next.js project. Do not drag the source ZIP or raw `.next` folder into Netlify Drop; that does not run the Next.js build and adapter setup.

Netlify documentation:
- https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- https://docs.netlify.com/snippets/frameworks/nextjs-config-values/

## 5. Update the live Netlify site later

Edit and save the files in VS Code. Check the local preview and production build. Then run:

```sh
git add .
git commit -m "Update portfolio content"
git push
```

Netlify automatically builds and deploys pushes to the configured production branch. If a deployment fails, inspect its deploy log; the last successful deployment remains the one to use while you fix the error.

Do not commit `node_modules`, `.next`, or local environment files. The included `.gitignore` handles them.

## Optional: Vercel

Import the same GitHub repository into Vercel. `vercel.json` is included. Set `NEXT_PUBLIC_SITE_URL` to your Vercel or custom domain before the production build.

## October 2026 update

The resume button downloads `public/resume/Najmul-Alam-Efti-Resume.pdf`. Replace that file with your newer CV to update the download.

All 14 uploaded certificates are in `public/certificates/`; titles and image paths are configured in `data/profile.ts`. Learning details now opens the relevant certificate image, with full-size and download links.

Project source links were added for the robot, Stratego and Smart City Network. AI Militia was added with an actual gameplay screenshot; FastAPI Bookshop and Notes Application were removed.
