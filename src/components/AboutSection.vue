<template>
	<section id="about" class="bg-white py-16 sm:py-20 lg:py-24" data-aos="fade-in">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center" data-aos="fade-up">
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-sm font-['Inria_Sans']">About Dova</p>
				<h2
					class="mt-6 text-2xl font-extrabold uppercase leading-tight sm:text-3xl lg:text-4xl xl:text-5xl font-['Roboto']"
				>
					Wealth should grow without compromising your faith
				</h2>
				<p class="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:mt-6">
					DOVA offers a modern digital platform for halal savings, Shariah-compliant investments, ethical wealth
					planning, and financial discipline tools. We remove interest, excessive uncertainty, and unethical investments
					and replace them with transparent, asset-backed alternatives.
				</p>
			</div>

			<div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-in">
				<div
					v-for="(feature, index) in features"
					:key="feature.title"
					:class="feature.color"
					class="rounded-2xl p-5 text-white shadow-lg shadow-slate-200 sm:p-6"
					:data-aos="'zoom-in'"
					:data-aos-delay="`${index * 100}`"
				>
					<div class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 sm:mb-4 sm:h-16 sm:w-16">
						<img :src="feature.icon" :alt="feature.title" class="h-full w-full" />
					</div>
					<h3 class="text-base font-semibold sm:text-lg text-center">{{ feature.title }}</h3>
					<p class="mt-2 text-sm text-white/85">{{ feature.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import landmarkIcon from "./assets/icons/landmarkIcon.png";
import beakerIcon from "./assets/icons/beakerIcon.png";
import shieldIcon from "./assets/icons/shieldIcon.png";
import eyeIcon from "./assets/icons/eyeIcon.png";

const features = [
	{
		title: "Asset Backed Investment",
		description: "Every investment is linked to real economic activity and measurable value.",
		color: "bg-[#2B92E0]",
		icon: landmarkIcon,
	},
	{
		title: "Profit Sharing Models",
		description: "Returns are structured using ethical risk-sharing and halal finance principles.",
		color: "bg-[#0000FF]",
		icon: beakerIcon,
	},
	{
		title: "Real Economic Value",
		description: "Funds are deployed into productive assets instead of speculative instruments.",
		color: "bg-teal-500 text-slate-950",
		icon: shieldIcon,
	},
	{
		title: "Transparent Fee",
		description: "Simple, clearly stated fees with full visibility on how your money is managed.",
		color: "bg-[#8A38F5]",
		icon: eyeIcon,
	},
];
</script>

