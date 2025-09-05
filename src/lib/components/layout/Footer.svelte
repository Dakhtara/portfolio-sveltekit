<script lang="ts">
	import Button from "../Button.svelte";
	import Github from "../icon/Github.svelte";
	import Linkedin from "../icon/Linkedin.svelte";

</script>


<footer class="py-16 px-6 bg-white/5 border-t border-white/10">
    <div class="max-w-4xl mx-auto text-center">

        <h3 class="text-3xl font-bold mb-4 text-white">Travaillons ensemble</h3>
        <p class="text-white/60 mb-8 text-lg">Prêt à donner vie à votre prochain projet ? Échangeons et concrétisons-le.</p>

        <div class="flex justify-center gap-3 mb-8">
            <Button href="https://github.com/Dakhtara" target="_blank" className="py-2 px-2 h-auto flex items-center gap-3" variant="outline">
                <Github />
                Github</Button>
            <Button href="https://www.linkedin.com/in/anthonymatignon/" target="_blank" className="py-2 px-2 h-auto flex items-center gap-3" variant="outline">
                <Linkedin />
                LinkedIn</Button>
        </div>
        <p class="text-sm text-white/40">© {new Date().getFullYear()} Anthony Matignon. Tous droits réservés.<br>
            Site développé avec SvelteKit et Tailwind CSS.
            
        </p>
    </div>
</footer>