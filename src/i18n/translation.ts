import { siteConfig } from "../config";
import type { SiteConfig } from "@/types/config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { es } from "./languages/es";
import { id } from "./languages/id";
import { ja } from "./languages/ja";
import { ko } from "./languages/ko";
import { th } from "./languages/th";
import { tr } from "./languages/tr";
import { vi } from "./languages/vi";
import { zh_CN } from "./languages/zh_CN";
import { zh_TW } from "./languages/zh_TW";

export type Translation = {
	[K in I18nKey]: string;
};

export const supportedLanguages: SiteConfig["lang"][] = [
	"en",
	"zh_CN",
	"zh_TW",
	"ja",
	"ko",
	"es",
	"th",
	"vi",
	"tr",
	"id",
];

const defaultTranslation = en;
let currentLangOverride: SiteConfig["lang"] | null = null;

const map: { [key: string]: Translation } = {
	es: es,
	en: en,
	en_us: en,
	en_gb: en,
	en_au: en,
	zh_cn: zh_CN,
	zh_tw: zh_TW,
	ja: ja,
	ja_jp: ja,
	ko: ko,
	ko_kr: ko,
	th: th,
	th_th: th,
	vi: vi,
	vi_vn: vi,
	id: id,
	tr: tr,
	tr_tr: tr,
};

export function normalizeLang(input?: string | null): SiteConfig["lang"] {
	if (!input || typeof input !== "string") {
		return siteConfig.lang;
	}
	const lower = input.toLowerCase();
	const found = supportedLanguages.find((lang) => lang.toLowerCase() === lower);
	return found || siteConfig.lang;
}

export function extractLangFromPath(pathname: string): SiteConfig["lang"] | null {
	const firstSegment = pathname.replace(/^\/+/, "").split("/")[0];
	if (!firstSegment) {
		return null;
	}

	const decoded = decodeURIComponent(firstSegment);
	const found = supportedLanguages.find(
		(lang) => lang.toLowerCase() === decoded.toLowerCase(),
	);
	return found || null;
}

export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

export function setI18nLang(lang: SiteConfig["lang"]) {
	currentLangOverride = normalizeLang(lang);
}

export function clearI18nLang() {
	currentLangOverride = null;
}

export function getCurrentLang(): SiteConfig["lang"] {
	if (currentLangOverride) {
		return currentLangOverride;
	}

	if (typeof window !== "undefined") {
		const fromPath = extractLangFromPath(window.location.pathname);
		if (fromPath) {
			return fromPath;
		}
		const storedLang = localStorage.getItem("lang");
		if (storedLang) {
			return normalizeLang(storedLang);
		}
	}

	return siteConfig.lang;
}

export function i18n(key: I18nKey): string {
	const lang = getCurrentLang();
	return getTranslation(lang)[key];
}
