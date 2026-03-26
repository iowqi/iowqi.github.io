<script lang="ts">
import { getCurrentLang } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { setLang } from "@utils/setting-utils";
import { localizePath } from "@utils/url-utils";
import { onMount } from "svelte";
import type { SiteConfig } from "@/types/config";

type LangOption = {
	code: SiteConfig["lang"];
	label: string;
};

const options: LangOption[] = [
	{ code: "en", label: "English" },
	{ code: "zh_CN", label: "简体中文" },
	{ code: "zh_TW", label: "繁體中文" },
	{ code: "ja", label: "日本語" },
	{ code: "ko", label: "한국어" },
	{ code: "es", label: "Español" },
	{ code: "th", label: "ไทย" },
	{ code: "vi", label: "Tiếng Việt" },
	{ code: "tr", label: "Türkçe" },
	{ code: "id", label: "Bahasa Indonesia" },
];

let currentLang: SiteConfig["lang"] = $state("en");
let hideTimer: number | null = null;

onMount(() => {
	currentLang = getCurrentLang();
});

function switchLang(lang: SiteConfig["lang"]) {
	if (lang === currentLang) {
		return;
	}
	currentLang = lang;
	setLang(lang);
	const nextPath = localizePath(
		window.location.pathname + window.location.search + window.location.hash,
		lang,
	);
	window.location.href = nextPath;
}

function clearHideTimer() {
	if (hideTimer !== null) {
		window.clearTimeout(hideTimer);
		hideTimer = null;
	}
}

function showPanel() {
	clearHideTimer();
	const panel = document.querySelector("#language-panel");
	const displayPanel = document.querySelector("#display-setting");
	const lightDarkPanel = document.querySelector("#light-dark-panel");
	if (displayPanel) {
		displayPanel.classList.add("float-panel-closed");
	}
	if (lightDarkPanel) {
		lightDarkPanel.classList.add("float-panel-closed");
	}
	if (panel) {
		panel.classList.remove("float-panel-closed");
	}
}

function scheduleHidePanel() {
	clearHideTimer();
	hideTimer = window.setTimeout(() => {
		const panel = document.querySelector("#language-panel");
		const button = document.querySelector("#language-switch");
		const panelHovered = panel?.matches(":hover");
		const buttonHovered = button?.matches(":hover");
		if (!panelHovered && !buttonHovered && panel) {
			panel.classList.add("float-panel-closed");
		}
	}, 220);
}
</script>

<div class="relative z-50" role="menu" tabindex="-1">
	<button
		aria-label="Language"
		role="menuitem"
		class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"
		id="language-switch"
		onmouseenter={showPanel}
		onmouseleave={scheduleHidePanel}
	>
		<Icon icon="material-symbols:translate-rounded" class="text-[1.25rem]" />
	</button>

	<div id="language-panel" class="hidden lg:block absolute transition float-panel-closed top-[3.85rem] mt-2 -right-2" onmouseenter={showPanel} onmouseleave={scheduleHidePanel}>
		<div class="card-base p-2 min-w-44">
			{#each options as option}
				<button
					class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
					class:current-theme-btn={currentLang === option.code}
					onclick={() => switchLang(option.code)}
				>
					<span class="text-sm">{option.label}</span>
				</button>
			{/each}
		</div>
	</div>
</div>
