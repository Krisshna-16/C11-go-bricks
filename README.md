# GO-BRICS Product Launch Content Pack

A professional, content-agency style React application built for the **GO-BRICS Business Lab Content Operations team** to manage, copy, verify, and print launch assets for the **Shungite Shield EMF Protection** product range. 

The interface features a premium dark theme (#0A0A0A) with bright green (#00FF41) accents and dark charcoal (#1A1A1A) cards, aligned with the corporate GO-BRICS design system.

---

## 🚀 Key Features

1. **Brand Overview & Briefing (Tab 1)**:
   - Comprehensive campaign data overview card (Audience, Target Platforms, Prepared By, Theme).
   - Dynamic 3x2 Grid Summaries linking directly to other asset tabs.
   - Comprehensive Brand Voice Guide covering tone rules, Do/Don't lists, and styled core keywords (EMF protection, Shungite, Karelian, grounding, etc.).

2. **Social Media Ad Copy (Tab 2)**:
   - Instagram Carousel: Slide-by-slide visual layout descriptions combined with emoji-optimized caption text.
   - LinkedIn: Professional static post highlighting Karelia mines, Nobel-winning fullerene chemistry science, and B2B studio partnerships.
   - Facebook: Family-friendly device sticker and water stone safety promotion.
   - One-click **"Copy Caption" / "Copy Post"** clipboard actions with animated 2s success feedback.

3. **Launch Reel Script Screenplay (Tab 3)**:
   - A fully styled visual-audio screenplay block formatting scenes 1 through 6.
   - Pre-production guide checklists detailing resolution (4K 60FPS), camera modes, and CapCut transition guidelines.
   - "Copy Script" button to extract full screenplay lines instantly.

4. **Press Release (Tab 4)**:
   - Formally formatted press announcement detailing the launch of Shungite Shield in India, B2B wholesale opportunities, regional metrics, and team quotes.
   - "Copy Press Release" button for PR wire distribution.

5. **Interactive Email Mockup (Tab 5)**:
   - Looks like a premium newsletter marketing client window.
   - Displays headers, product showcase grids, trust factor badges, and UPI/COD CTA buttons.
   - **"Copy Email HTML"** action copies clean, production-ready, styled inline HTML source code for direct integration into Mailchimp, HubSpot, or Klaviyo.

6. **Canva Story Frames (Tab 6)**:
   - 5 distinct 9:16 mobile canvas visual mockup blocks.
   - Features exact copy elements (top title, center, bottom CTAs) and detailed styling notes (fonts, hex colors, alignments).

7. **Asset Submission Checklist (Tab 7)**:
   - A checklist containing 19 total items, dividing deliverables (16 items) from workflow steps (3 items).
   - Keeps state using React `useState` to dynamically check/uncheck elements.
   - Updates progress percentage bar and shows "X of 16 assets complete" in real-time.
   - **"Download Checklist PDF"** button triggers `window.print()` with custom print style overrides (hides interactive controls, formats lists in high-contrast black-and-white grid).

---

## 🛠️ Technology Stack

- **Framework**: React 19 (TypeScript)
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4.0
- **Icons**: Lucide React

---

## 💻 Local Setup & Running

To run this application locally, execute the following commands in your terminal:

1. **Navigate to the project directory**:
   ```bash
   cd go-brics-product-launch-content-pack
   ```

2. **Install node dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Compile a production build**:
   ```bash
   npm run build
   ```
   Bundled static files will be placed inside the `./dist` directory.
