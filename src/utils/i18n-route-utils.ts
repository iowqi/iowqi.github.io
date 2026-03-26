import type { APIContext } from "astro";
import type { SiteConfig } from "src/types/config";
import { normalizeLang, setI18nLang, supportedLanguages } from "@i18n/translation";

export function getLangStaticPaths() {
	return supportedLanguages.map((lang) => ({ params: { lang } }));
}

export function setupI18nLangFromValue(
	langInput?: string | null,
	fallback: SiteConfig["lang"] = "en",
): SiteConfig["lang"] {
	const lang = normalizeLang(langInput || fallback);
	setI18nLang(lang);
	return lang;
}

export function setupI18nLangFromAstro(
	astro: Pick<APIContext, "params">,
	fallback: SiteConfig["lang"] = "en",
): SiteConfig["lang"] {
	return setupI18nLangFromValue(astro.params.lang, fallback);
}
