<template>
	<section class="relative overflow-hidden bg-slate-950 py-24 text-white sm:pt-32" data-aos="fade-in">
		<div class="absolute inset-0">
			<img src="/assets/dova-hero.jpg" alt="DOVA Hero Background" class="h-full w-full object-cover opacity-30" />
			<div class="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-800/80 to-cyan-500/20"></div>
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.20),transparent_20%)]"
			></div>
		</div>

		<div class="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
			<div class="mx-auto max-w-4xl text-center space-y-16" data-aos="fade-up">
				<h1 class="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl font-['Inria_Sans']">
					Grow Your Wealth Without <br class="hidden sm:block" />
					Riba
				</h1>

				<p class="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/85 md:text-xl">
					DOVA helps you save, invest, and build wealth through Shariah-compliant financial solutions that are
					transparent, ethical, and secure.
				</p>

				<div
					class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:mt-8"
					data-aos="zoom-in"
					data-aos-delay="200"
				>
					<button
						@click="selected = 'explore'"
						:class="[
							'rounded-md border px-6 py-[10px] text-sm font-semibold transition sm:px-6',
							selected === 'explore'
								? 'border-white bg-white text-slate-900'
								: 'border-white/40 bg-white/10 text-white hover:bg-white/20',
						]"
					>
						Explore Halal Investments
					</button>

					<button
						@click="selected = 'start'"
						:class="[
							'rounded-md px-6 py-[10px] text-sm font-semibold transition sm:px-6',
							selected === 'start' ? 'bg-[#000080] text-white' : 'bg-brand-800/80 text-white hover:bg-brand-700',
						]"
					>
						Start Saving
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("start");
</script>

