import { getSortedPosts } from "@utils/content-utils";
import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
	const posts = await getSortedPosts();
	const data = posts.map((p) => ({
		id: p.slug,
		title: p.data.title,
		published: p.data.published.toISOString(),
	}));
	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
};
