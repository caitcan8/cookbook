<p align="center">
  <img src="assets/banner.png" alt="Caitlin's Cookbook banner" width="100%">
</p>

<h3 align="center">A hand-illustrated, accessibility-first recipe site</h3>

<p align="center">
  <a href="https://caitcan8.github.io/cookbook/"><strong>🍳 View the live site »</strong></a>
</p>

---

This website showcases all of my favorite delicious recipes, organized into Appetizers, Entrees, and Desserts. It was my first personal project, and I wanted it to show off the front-end skills I'd been learning at the time — while still having a lot of personality.

Accessibility was a major focus throughout the build. The site is screen-reader accessible, keyboard-navigation friendly, works across three different device views (mobile, tablet, and desktop), and has been tested to be free of accessibility errors (via WAVE, Axe, and other tools).

## Table of Contents

- [Features](#features)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Architecture](#architecture)
- [Demo](#demo)
- [FAQ](#faq)
- [Acknowledgements](#acknowledgements)

## Features

- 🎨 Built from scratch with **HTML, CSS, and JavaScript**
- ✏️ **Hand-drawn custom illustrations** for every recipe, adding personality and theming throughout
- 📱 Fully responsive **mobile, tablet, and desktop views**
- 🔊 **Screen-reader accessible**
- ⌨️ **Keyboard-navigation friendly**

## Quickstart

No build tools or dependencies are required — the site is static HTML/CSS/JS. To run it locally:

```bash
# Clone the repository
git clone https://github.com/caitcan8/cookbook.git

# Move into the project folder
cd cookbook

# Open it in your browser
open index.html
```

Or skip all of that and just visit the [live site](https://caitcan8.github.io/cookbook/).

## Usage

Browse recipes by category from the navigation bar, then click into any recipe card to view full ingredients and instructions.

<p align="center">
  <img src="assets/demo-browsing.gif" alt="Browsing recipe categories on Caitlin's Cookbook" width="700">
</p>

Every recipe card is fully keyboard-navigable, so you can tab through and open a recipe without ever touching a mouse.

<p align="center">
  <img src="assets/demo-recipe.gif" alt="Opening a recipe using keyboard navigation" width="700">
</p>

## Architecture

The site follows a simple static-site structure: `index.html` pulls in the stylesheet, script, and assets, and the script handles rendering recipe data to the DOM while preserving accessibility.

<p align="center">
  <img src="assets/architecture.png" alt="Architecture diagram of Caitlin's Cookbook" width="600">
</p>

## Demo

Check out the site for yourself here: **[caitcan8.github.io/cookbook](https://caitcan8.github.io/cookbook/)**

## FAQ

**Where did these recipes come from?**
They're all recipes I've gathered, tested, and perfected myself over the years. Each one is meant to be easy, beginner-friendly, and delicious.

**Who drew the illustrations?**
I did! Every illustration on the site is hand-drawn.

**How do I know this site is accessible?**
The site has been tested with WAVE and Axe, along with several other CSS checkers and color-contrast validators. I've also personally tested it across device sizes to confirm it's responsive, screen-reader friendly, and fully navigable without a mouse.

## Acknowledgements

Caitlin Cantrell, 2026
