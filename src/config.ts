import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "iowqi's blog",
	subtitle: "(●ˇ∀ˇ●) about everything",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 100, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		welcomeText: {
			enable: true, // Display welcome text on top of banner
			content: ["Hello there👋, welcome!", "欢迎光临OwO", "Have a nice day!🌞", "陌生人，坐下来喝杯茶吧🍵"], // Texts displayed in the banner typing loop
			typingSpeed: 120, // Milliseconds per character
			holdAfterTypedMs: 1000, // Wait after each string is fully typed
			holdAfterDeletedMs: 280, // Wait after each string is fully deleted
			fontFamily: "\"Space Grotesk\", \"Segoe UI\", \"Inter\", system-ui, -apple-system, sans-serif", // CSS font-family for banner welcome text
			fontWeight: 800, // 600~900 recommended
			fontSizeMobileRem: 3, // Mobile font size (rem)
			fontSizeDesktopRem: 4.5, // Desktop font size (rem)
			letterSpacingEm: 0.16, // Letter spacing (em)
			lineHeight: 1.3, // Increase to avoid bottom clipping
			containerPaddingYRem: 0.55, // Vertical padding for the text container (rem)
			gradientDurationMs: 5200, // Gradient flow animation duration
			waveDurationMs: 5200, // Character wave animation duration
			waveAmplitudePx: 26.8, // Wave vertical amplitude in px
			waveRotateDeg: 5.2, // Max character rotation degree in wave
		},
		parallax: {
			enable: true, // Enable delayed spring motion while scrolling
			maxOffset: 240, // Maximum translate distance in px
			scrollFactor: 0.06, // Scroll delta -> target offset ratio
			spring: 0.0065, // Spring force; smaller = slower return
			damping: 0.94, // Velocity damping; closer to 1 = more floaty
			targetDecay: 0.985, // Target decays to 0 when scrolling stops
			gradientMultiplier: 1.1, // Gradient layer movement ratio vs banner
		},
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	backgroundPattern: {
		enable: true,
		density: 1, // 0.4 ~ 2.5, larger means more polygons
		particleDensity: 0.5, // 0.3 ~ 3.5, controls tiny particles & streak fragments
		strokeAlpha: 0.16, // 0.03 ~ 0.45, line opacity
		topSafeZoneRatio: 0.42, // Keep top area cleaner to avoid banner clipping
		seed: "iowqi-bg-v1", // Fixed seed for deterministic pattern. Set empty/undefined for session seed
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/iowqi", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "iowqi",
	bio: "An ordinary person, trying to be better everyday. ο(=•ω<=)ρ⌒☆",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/IQwOI",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/185647003",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/iowqi",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
