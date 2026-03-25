import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: "top" | "center" | "bottom";
		welcomeText?: {
			enable: boolean;
			content: string;
			typingSpeed?: number;
			fontFamily?: string;
			fontWeight?: number;
			fontSizeMobileRem?: number;
			fontSizeDesktopRem?: number;
			letterSpacingEm?: number;
			lineHeight?: number;
			containerPaddingYRem?: number;
			gradientDurationMs?: number;
			waveDurationMs?: number;
			waveAmplitudePx?: number;
			waveRotateDeg?: number;
		};
		parallax?: {
			enable: boolean;
			maxOffset: number;
			scrollFactor: number;
			spring: number;
			damping: number;
			targetDecay: number;
			gradientMultiplier: number;
		};
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};
	backgroundPattern?: {
		enable: boolean;
		density: number; // 0.4 ~ 2.5, controls polygon count
		strokeAlpha: number; // 0.03 ~ 0.45
		topSafeZoneRatio: number; // 0.15 ~ 0.75, relative to viewport height
		seed?: string; // fixed seed; undefined means device/session based seed
	};

	favicon: Favicon[];
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};
