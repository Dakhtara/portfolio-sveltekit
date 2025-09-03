<script lang="ts">
	let canvasRef: HTMLCanvasElement;

	$effect(() => {
		const ctx = canvasRef.getContext('2d');
		if (!ctx) {
			return;
		}

		let animationId: number;
		let time = 0;

		const resize = () => {
			canvasRef.width = canvasRef.offsetWidth * window.devicePixelRatio;
			canvasRef.height = canvasRef.offsetHeight * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		const animate = () => {
			time += 0.01;

			const bgGradient = ctx.createLinearGradient(0, 0, 0, canvasRef.offsetHeight);
			bgGradient.addColorStop(0, '#000000');
			bgGradient.addColorStop(0.4, '#0a0a0a');
			bgGradient.addColorStop(1, '#111111');
			ctx.fillStyle = bgGradient;
			ctx.fillRect(0, 0, canvasRef.offsetWidth, canvasRef.offsetHeight);

			const gradient1 = ctx.createRadialGradient(
				canvasRef.offsetWidth / 2 + Math.sin(time * 0.5) * 100,
				canvasRef.offsetHeight / 2 + Math.cos(time * 0.3) * 80,
				0,
				canvasRef.offsetWidth / 2 + Math.sin(time * 0.5) * 100,
				canvasRef.offsetHeight / 2 + Math.cos(time * 0.3) * 80,
				300
			);
			gradient1.addColorStop(0, `rgba(251, 146, 60, ${0.25 + Math.sin(time) * 0.05})`); // Orange
			gradient1.addColorStop(0.4, `rgba(245, 101, 101, ${0.2 + Math.cos(time * 1.2) * 0.03})`); // Red-orange
			gradient1.addColorStop(0.7, `rgba(14, 165, 233, ${0.18 + Math.sin(time * 0.8) * 0.02})`); // Blue
			gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

			ctx.fillStyle = gradient1;
			ctx.fillRect(0, 0, canvasRef.offsetWidth, canvasRef.offsetHeight);

			const gradient2 = ctx.createRadialGradient(
				canvasRef.offsetWidth / 2 - 1 + Math.cos(time * 0.7) * 120,
				canvasRef.offsetHeight / 2 - 1 + Math.sin(time * 0.4) * 90,
				0,
				canvasRef.offsetWidth / 2 - 1 + Math.cos(time * 0.7) * 120,
				canvasRef.offsetHeight / 2 - 1 + Math.sin(time * 0.4) * 90,
				250
			);
			gradient2.addColorStop(0, `rgba(20, 184, 166, ${0.22 + Math.cos(time * 1.1) * 0.04})`); // Teal
			gradient2.addColorStop(0.5, `rgba(6, 182, 212, ${0.18 + Math.sin(time * 0.9) * 0.03})`); // Cyan
			gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');

			ctx.fillStyle = gradient2;
			ctx.fillRect(0, 0, canvasRef.offsetWidth, canvasRef.offsetHeight);

			ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
			ctx.lineWidth = 1;
			for (let i = 0; i < canvasRef.offsetWidth; i += 120) {
				ctx.beginPath();
				ctx.moveTo(i, 0);
				ctx.lineTo(i, canvasRef.offsetHeight);
				ctx.stroke();
			}
			for (let i = 0; i < canvasRef.offsetHeight; i += 120) {
				ctx.beginPath();
				ctx.moveTo(0, i);
				ctx.lineTo(canvasRef.offsetWidth, i);
				ctx.stroke();
			}

			animationId = requestAnimationFrame(animate);
		};

		resize();
		animate();
		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvasRef} class="absolute inset-0 h-full w-full" style="width:100%;height:100%;"
></canvas>
