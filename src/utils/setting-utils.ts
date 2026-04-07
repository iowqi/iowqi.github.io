import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig, siteConfig } from "@/config";
import type { LIGHT_DARK_MODE, SiteConfig } from "@/types/config";

export type PostLayoutMode = "list" | "grid";

export function getDefaultHue(): number {
	const fallback = "250";
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
}

export function getHue(): number {
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}

export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", String(hue));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
	}

	// Set the theme for Expressive Code
	document.documentElement.setAttribute(
		"data-theme",
		expressiveCodeConfig.theme,
	);
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}

export function getDefaultLang(): SiteConfig["lang"] {
	const configCarrier = document.getElementById("config-carrier");
	return (configCarrier?.dataset.lang as SiteConfig["lang"]) || siteConfig.lang;
}

export function getLang(): SiteConfig["lang"] {
	return (
		(localStorage.getItem("lang") as SiteConfig["lang"]) || getDefaultLang()
	);
}

export function setLang(lang: SiteConfig["lang"]): void {
	localStorage.setItem("lang", lang);
}

export function getPostLayoutMode(): PostLayoutMode {
	const stored = localStorage.getItem("post-layout-mode");
	return stored === "grid" ? "grid" : "list";
}

export function setPostLayoutMode(layout: PostLayoutMode): void {
	localStorage.setItem("post-layout-mode", layout);
	document.documentElement.dataset.postLayout = layout;
}

export function applyPostLayoutModeToDocument(layout: PostLayoutMode): void {
	document.documentElement.dataset.postLayout = layout;
}
