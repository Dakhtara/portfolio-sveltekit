<script lang="ts">

    type Props = {
        icon: string;
        title: string;
        description: string;
    }

    let {icon, title, description}: Props = $props();
</script>

<div
	class="text-center hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 bg-white/[0.02] border-white/10 hover:border-white/20 backdrop-blur-sm group"
>
	<div class="p-6">
		<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
			{icon}
		</div>
		<h3 class="text-xl font-semibold text-white mb-2">{title}</h3>
		<p class="text-white/70 leading-relaxed">{description}</p>
	</div>
</div>
