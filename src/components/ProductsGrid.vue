<template>
	<section id="savings" class="bg-white py-20 sm:py-24" data-aos="fade-in">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center" data-aos="fade-up">
				<p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 font-['Inria_Sans']">Our Products</p>
				<h2 class="mt-4 text-3xl font-extrabold sm:text-5xl font-['Inria_Sans']">Halal financial solutions</h2>
			</div>

			<div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-in">
				<article
					v-for="(product, index) in products"
					:key="product.title"
					class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md font-['Roboto']"
					:data-aos="'zoom-in'"
					:data-aos-delay="`${index * 100}`"
				>
					<div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-800 text-white overflow-hidden">
						<img :src="product.icon" :alt="product.title" class="h-full w-full" />
					</div>

					<h3 class="mt-5 text-xl font-semibold">{{ product.title }}</h3>
					<p class="mt-2 text-sm text-[#808080]">{{ product.description }}</p>
					<ul class="mt-4 space-y-2 text-sm font-semibold leading-6">
						<li v-for="point in product.points" :key="point">{{ point }}</li>
					</ul>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup>
import targetIcon from "./assets/icons/TargetIcon.png";
import cardIcon from "./assets/icons/CardIcon.png";
import groupIcon from "./assets/icons/GroupIcon.png";
import growthIcon from "./assets/icons/GrowthIcon.png";
import folderIcon from "./assets/icons/FolderIcon.png";
import calendarIcon from "./assets/icons/CalendarIcon.png";

const products = [
	{
		title: "DOVA Target Save",
		icon: targetIcon,
		description: "Save toward a goal like hajj, education, or marriage",
		points: ["Lock your funds for discipline", "No interest involved", "Earn halal returns"],
	},
	{
		title: "DOVA Flex Save",
		icon: cardIcon,
		description: "Save anytime without locking funds",
		points: ["Manages daily liquidity needs", "Potential halal returns", "Funds deployed in halal assets"],
	},
	{
		title: "DOVA Ummah Save",
		icon: groupIcon,
		description: "Group savings for families or communities",
		points: ["Community-driven wealth building", "Shariah governance oversight", "Transparent reporting"],
	},
	{
		title: "DOVA Growth",
		icon: growthIcon,
		description: "For professionals and long-term investors",
		points: ["Diversified halal investment exposure", "Profit-sharing portfolio", "Quarterly performance reporting"],
	},
	{
		title: "DOVA Legacy",
		icon: folderIcon,
		description: "For families and institutions",
		points: ["Long-term wealth structuring", "Waqf planning support", "Islamic estate advisory"],
	},
	{
		title: "DOVA Starter",
		icon: calendarIcon,
		description: "Perfect for students and young professionals",
		points: ["Automated halal savings", "Financial literacy tools", "Wealth tracking dashboard"],
	},
];
</script>

