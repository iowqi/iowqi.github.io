import I18nKey from "@i18n/i18nKey";
import { extractLangFromPath, getCurrentLang, i18n } from "@i18n/translation";

export function pathsEqual(path1: string, path2: string) {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

export function isHomePath(path: string): boolean {
	return pathsEqual(stripLangPrefix(path), "/");
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join("/");
	return joined.replace(/\/+/g, "/");
}

export function getPostUrlBySlug(slug: string): string {
	return url(`/posts/${slug}/`);
}

export function getTagUrl(tag: string): string {
	if (!tag) return url("/archive/");
	return url(`/archive/?tag=${encodeURIComponent(tag.trim())}`);
}

export function getCategoryUrl(category: string | null): string {
	if (
		!category ||
		category.trim() === "" ||
		category.trim().toLowerCase() === i18n(I18nKey.uncategorized).toLowerCase()
	)
		return url("/archive/?uncategorized=true");
	return url(`/archive/?category=${encodeURIComponent(category.trim())}`);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/");
	if (lastSlashIndex < 0) {
		return "/";
	}
	return path.substring(0, lastSlashIndex + 1);
}

function withLangPrefix(path: string): string {
	const lang = getCurrentLang();
	const normalized = path.startsWith("/") ? path : `/${path}`;
	if (extractLangFromPath(normalized)) {
		return normalized;
	}
	if (normalized === "/") {
		return `/${lang}/`;
	}
	return `/${lang}${normalized}`;
}

export function stripLangPrefix(path: string): string {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	const match = normalized.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
	const pathname = match?.[1] || "/";
	const search = match?.[2] || "";
	const hash = match?.[3] || "";

	const segments = pathname.split("/").filter(Boolean);
	if (segments.length === 0) {
		return `/${search}${hash}`;
	}
	const first = decodeURIComponent(segments[0]);
	if (extractLangFromPath(`/${first}/`)) {
		const rest = segments.slice(1).join("/");
		const base = rest ? `/${rest}/` : "/";
		return `${base}${search}${hash}`;
	}
	return `${pathname}${search}${hash}`;
}

export function isLocalizedHomePath(path: string): boolean {
	const normalizedPath = stripLangPrefix(path);
	return pathsEqual(normalizedPath, "/");
}

export function localizePath(path: string, lang = getCurrentLang()): string {
	const basePath = stripLangPrefix(path);
	if (basePath === "/") {
		return `/${lang}/`;
	}
	return `/${lang}${basePath.startsWith("/") ? basePath : `/${basePath}`}`;
}

export function url(path: string) {
	return joinUrl("", import.meta.env.BASE_URL, withLangPrefix(path));
}
