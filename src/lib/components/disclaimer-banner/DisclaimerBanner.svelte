<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';

	let { slug } = $props();
</script>

<div class="mb-8 rounded-lg border border-yellow-700 bg-yellow-900/30 px-4 py-6">
	<p class="mt-0 mb-0 text-sm text-zinc-300">
		⚠️ This article is a translation from French.<br />
		I'm writing first in French and then translate it to English, so it can contain some inaccuracies.<br/>
        The translation is made by hand and no translation tools are used.<br/>
		For the original version, please refer to the
		<a
			href={localizeHref(`/articles/${slug}`, { locale: 'fr' })}
			class="underline hover:text-zinc-200">French version</a
		>.
	</p>
</div>
