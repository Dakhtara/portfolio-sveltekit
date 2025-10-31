<script lang="ts">
	import Button from "../button/Button.svelte";
	import Github from "../icon/Github.svelte";
	import Linkedin from "../icon/Linkedin.svelte";
    import * as m from "$lib/paraglide/messages";
</script>


<footer class="py-16 px-6 bg-white/5 border-t border-white/10">
    <div class="max-w-4xl mx-auto text-center">

        <h3 class="text-3xl font-bold mb-4 text-white">{m.dull_stale_midge_twist()}</h3>
        <p class="text-white/60 mb-8 text-lg">{m.mean_odd_parrot_honor()}</p>

        <div class="flex justify-center gap-3 mb-8">
            <Button href="https://github.com/Dakhtara" target="_blank" class="py-2 px-2 h-auto flex items-center gap-3" variant="outline">
                <Github />
                Github
            </Button>
            <Button href="https://www.linkedin.com/in/anthonymatignon/" target="_blank" class="py-2 px-2 h-auto flex items-center gap-3" variant="outline">
                <Linkedin />
                LinkedIn
            </Button>
        </div>
        <p class="text-sm text-white/40">© {new Date().getFullYear()} Anthony Matignon. Tous droits réservés.<br>
            {m.shy_tangy_thrush_bloom()}
            
        </p>
    </div>
</footer>