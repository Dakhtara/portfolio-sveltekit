<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { ArrowLeft, Clock, Search } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import * as m from '$lib/paraglide/messages';
	import { cn } from '$lib/utils/cn';

	let { data }: PageProps = $props();

	let searchTerm = $state('');
	let filteredArticles = $state(data.articles);
	let categories = $derived.by(() => {
		let tags = ['all'];
		tags.push(...data.articles.flatMap((article) => article.tags || []));

		return Array.from(new Set(tags));
	});

	let selectedCategory = $state('all');

	$effect(() => {
		if (searchTerm !== null || searchTerm !== undefined) {
			filterArticles();
		}
	});

	function filterArticles() {
		filteredArticles = data.articles.filter((article) => {
			if (selectedCategory === 'all' && searchTerm === '') {
				return true;
			} else if (selectedCategory === 'all' && searchTerm !== '') {
				return (
					article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
					(article.tags &&
						article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
				);
			} else if (selectedCategory !== 'all' && searchTerm === '') {
				return (
					article.category === selectedCategory ||
					(article.tags && article.tags.includes(selectedCategory))
				);
			} else {
				return (
					(article.category === selectedCategory ||
						(article.tags && article.tags.includes(selectedCategory))) &&
					(article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
						(article.tags &&
							article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))))
				);
			}
		});
	}

	function setSelectedCategory(category: string) {
		selectedCategory = category;
		filterArticles();
	}
</script>

<svelte:head>
	<title>Articles - Anthony Matignon</title>
	<meta
		name="description"
		content="Read articles about web development, programming, and more by Anthony Matignon."
	/>
</svelte:head>

<section class="bg-gradient-to-b from-slate-900 via-gray-900/20 to-slate-900 px-6 pt-32 pb-16">
	<div class="mx-auto max-w-4xl">
		<div class="mb-8">
			<Button
				variant="ghost"
				href={localizeHref('/')}
				class="flex w-max items-center p-0 px-2 font-normal text-white/60 hover:bg-white/5 hover:text-white"
			>
				<ArrowLeft class="mr-2 h-4 w-4" />
				{m.brief_dizzy_otter_ripple()}
			</Button>
		</div>

		<div class="mb-12 text-center">
			<h1 class="mb-6 text-5xl font-bold tracking-tight text-balance md:text-6xl">
				Articles &
				<span
					class="block bg-gradient-to-r from-orange-400 via-red-400 to-cyan-400 bg-clip-text text-transparent"
				>
					{m.clear_ideal_tiger_succeed()}
				</span>
			</h1>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-pretty text-white/70 md:text-xl">
				{m.actual_bold_fish_hurl()}
			</p>
		</div>

		<div class="mb-12 flex flex-col gap-4 md:flex-row">
			<div class="relative flex-1">
				<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-white/40" />
				<input
					placeholder={m.busy_ago_jay_relish()}
					bind:value={searchTerm}
					class="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-12 w-full min-w-0 rounded-md border border-white/10 bg-white/5 px-3 py-1 pl-10 text-base text-white shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/40 focus:border-white/20 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
				/>
			</div>
			<div class="flex gap-1 overflow-x-auto pb-2">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => setSelectedCategory(category)}
						class={cn(
							'h-auto px-3 py-2 text-sm',
							selectedCategory === category
								? 'bg-white whitespace-nowrap text-black hover:bg-white/90'
								: 'border-white/20 bg-transparent whitespace-nowrap text-white backdrop-blur-sm hover:bg-white/5'
						)}
					>
						{category === 'all' ? m.sleek_aloof_toad_bloom() : category}
					</Button>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="bg-white/[0.01] px-6 py-16">
	<div class="mx-auto max-w-4xl">
		<div class="mb-8 flex items-center justify-between">
			<h2 class="text-3xl font-bold text-white">{m.great_few_gibbon_bake()}</h2>
			<span class="text-sm text-white/50"> {filteredArticles.length} {m.ok_bold_elk_push()}</span>
		</div>

		<div class="space-y-4">
			{#each filteredArticles as article}
				<a
					href={localizeHref(`/articles/${article.slug}`)}
					class="group block cursor-pointer rounded-lg border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/5"
				>
					<div class="p-6">
						<div class="flex flex-col gap-4 lg:flex-row lg:items-start">
							<div class="flex-1">
								<div class="mb-3 flex items-center gap-3">
									<span class="rounded-full border border-white/20 px-2 py-1 text-xs text-white/60"
										>{article.category}</span
									>
									<span class="text-sm text-white/40">•</span>
									<span class="flex items-center gap-1 text-sm text-white/50">
										<Clock class="h-3 w-3" />
										{article.readTime}
									</span>
								</div>
								<div
									class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400"
								>
									{article.title}
								</div>

								<div class="mb-4 line-clamp-2 text-base leading-relaxed text-white/70">
									{article.description}
								</div>

								<div class="flex flex-wrap gap-2">
									{#if article.tags}
										{#each article.tags.slice(0, 3) as tag}
											<span class="rounded-lg bg-white/5 px-2 py-1 text-xs text-white/60"
												>{tag}</span
											>
										{/each}
									{/if}
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
			{#if filteredArticles.length === 0}
				<div class="py-16 text-center">
					<div class="mb-4 text-white/40">
						<Search class="mx-auto mb-4 h-12 w-12" />
					</div>
					<h3 class="mb-2 text-xl font-semibold text-white/60">Aucun article trouvé</h3>
					<p class="text-white/40">Essayez d'ajuster vos critères de recherche ou de filtrage</p>
				</div>
			{/if}
			<!-- {regularArticles.map((article, index) => (
              <Card
                class="group hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 bg-white/[0.02] border-white/10 hover:border-white/20 backdrop-blur-sm cursor-pointer"
              >
                <CardHeader class="p-6">
                  <div class="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div class="flex-1">
                      <div class="flex items-center gap-3 mb-3">
                        <Badge variant="outline" class="border-white/20 text-white/60 text-xs">
                          {article.category}
                        </Badge>
                        <span class="text-white/40 text-sm">•</span>
                        <span class="text-white/50 text-sm flex items-center gap-1">
                          <Clock class="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <CardTitle class="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </CardTitle>

                      <CardDescription class="text-white/70 text-base leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </CardDescription>

                      <div class="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            class="bg-white/5 text-white/60 hover:bg-white/10 border-0 font-normal text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div class="text-sm text-white/50 lg:text-right flex-shrink-0">
                      <div class="flex items-center gap-1.5 lg:justify-end mb-1">
                        <Calendar class="h-3.5 w-3.5" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div class="flex items-center gap-1.5 lg:justify-end">
                        <User class="h-3.5 w-3.5" />
                        {article.author}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))} -->
		</div>

		<!-- {filteredArticles.length === 0 && (
            <div class="text-center py-16">
              <div class="text-white/40 mb-4">
                <Search class="h-12 w-12 mx-auto mb-4" />
              </div>
              <h3 class="text-xl font-semibold text-white/60 mb-2">No articles found</h3>
              <p class="text-white/40">Try adjusting your search or filter criteria</p>
            </div>
          )} -->
	</div>
</section>
