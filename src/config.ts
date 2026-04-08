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
			content: [
				"哔~~人类访客认证通过✅\n欢迎登舰🚀",
				"(●ˇ∀ˇ●) 你刷新了这一页🔄\n今日成就 +1🏆",
				"这里没有弹窗🚫\n只有碎碎念和偶尔靠谱的笔记📝",
				"418 I'm a teapot😉…\n骗你的，其实是欢迎你来🫖",
				"Welcome👋, wanderer\n代码在跑，茶在泡，慢慢逛☕",
				"检测到好奇心溢出🧪…\n允许继续向下滚动✨",
				"本页已缓存你的「路过」状态💾\n下次刷新记得假装第一次来🎭",
				"404 找不到烦恼🔍\n200 OK 找到你啦🎯",
				"正在编译⚙️… \n0 warning, 1 visitor🎉",
				"别紧张，这不是终端🖥️\n只是博客在对你眨眼睛😉",
				"Ctrl+S 救不了人生🔧\n但收藏这篇也许能救你五分钟⏱️",
				"暗号对接成功🤝\n人类 / 好奇 / 还没关标签页🔖",
				"此处无广告🚫\n只有作者和错别字在和平共处✍️",
				"Loading 是假的⏳\n欢迎是真的💛（大概）",
				"你已进入「随便看看」模式👀\n请放心摸鱼，老板不在我这边🐟",
				"feat: welcome visitor🌱\n本次提交：把好奇心写进 changelog📝",
				"夜间模式已就位🌙\n适合阅读、发呆、顺便搜个报错🔎",
				"Hey，键盘侠⌨️\n今天也把问号打在公屏上吧❓",
				"欢迎来到「半成品博物馆」🛠️\n有些是干货，有些是冲动产物💭",
				"就像 npm install 一样🪄\n你点开了一个可能很长的依赖树📦",
				"Wi‑Fi 满格📶\n灵感随缘，快乐尽量在线😄",
				"模拟退火中🔥…\n继续滚动，逼近你的全局最优解✨",
				"你点的是链接🔗\n收获的是作者的脑内弹幕💬",
				"这里没有 KPI📊\n只有想把一件事讲清楚的执念🧠",
				"像 git stash 一样📌\n把烦恼暂存，把好奇 pop 出来🎁",
				"量子态阅读👻\n点开前：既是笔记也可能是碎碎念🌀",
				"deploy 成功🚢\n本版 release note：多了一个可爱的你💫",
				"缓存命中率 +100%🎯\n因为你刚好路过这里❤️",
				"本页支持「慢读」模式🐢\n急也没用，bug 也要喝口水☕",
				"console.log('hi')👋\n浏览器没回你，但我回了💛",
				"欢迎来到平行宇宙分支🌿\n主分支还在改，但欢迎永远 merge 你🤝",
				"RSS 可能迟到📡\n但你的到来从不缺席⏰",
				"把光标交给我🖱️\n把好心情留给你自己🎈",
			], // Use \n for manual line breaks in the banner typing loop
			typingSpeed: 120, // Milliseconds per character
			lineBreakPauseMs: 500, // Longer pause at manual `\n` (typing + deleting)
			holdAfterTypedMs: 2000, // Wait after each string is fully typed
			holdAfterDeletedMs: 280, // Wait after each string is fully deleted
			fontFamily:
				'"Space Grotesk", "Segoe UI", "Inter", system-ui, -apple-system, sans-serif', // CSS font-family for banner welcome text
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
			gradientMultiplier: 1.1, // Unused: overlays move with the parallax layer only (avoids seams when scrolling)
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
	bio: "一个普通人，在折腾的路上 ο(=•ω<=)ρ⌒☆",
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
