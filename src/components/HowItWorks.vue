<template>
	<section id="how-it-works" class="bg-slate-50 py-16 sm:py-20 lg:py-24" data-aos="fade-in">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center" data-aos="fade-up">
				<span
					class="inline-flex rounded-lg bg-[#000080] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:px-4 sm:text-sm font-['Inria_Sans']"
				>
					How Dova Works
				</span>
				<h2 class="mt-4 text-2xl font-extrabold sm:text-3xl lg:text-4xl font-['Inria_Sans']">Four Simple Steps</h2>
			</div>

			<div class="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4" data-aos="fade-in">
				<div
					v-for="(step, index) in steps"
					:key="step.title"
					class="relative rounded-2xl border-b-2 border-b-[#000080] bg-white p-5 shadow-sm sm:p-6"
					:data-aos="'slide-up'"
					:data-aos-delay="`${index * 150}`"
				>
					<div class="flex items-center justify-between">
						<div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 sm:h-12 sm:w-12">
							<img :src="step.icon" :alt="step.title" class="h-5 w-5 sm:h-6 sm:w-6" />
						</div>
						<span class="text-sm font-bold text-brand-700">0{{ index + 1 }}</span>
					</div>

					<h3 class="mt-4 text-base font-semibold sm:mt-5 sm:text-lg">{{ step.title }}</h3>
					<p class="mt-2 text-sm leading-5 text-slate-600 sm:text-base sm:leading-6">{{ step.description }}</p>

					<div class="mt-4">
						<button
							class="inline-flex items-center gap-2 rounded-lg border border-[#000080] px-4 py-2 text-sm font-medium text-[#000080] transition hover:bg-[#000080] hover:text-white sm:px-5"
						>
							{{ step.ctaText }}
							<img src="./assets/icons/clarity_arrow-line.png" alt="Arrow" class="h-3 w-3" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import userIcon from "./assets/icons/UserIcon.png";
import checkIcon from "./assets/icons/CheckIcon.png";
import walletIcon from "./assets/icons/WalletIcon.png";
import chartIcon from "./assets/icons/ChartIcon.png";

const steps = [
	{
		title: "Create Your Account",
		description: "Simple digital onboarding with quick verification and a secure setup process.",
		icon: userIcon,
		ctaText: "Sign Up",
	},
	{
		title: "Choose Your Plan",
		description: "Select savings or investment options based on your financial goals.",
		icon: checkIcon,
		ctaText: "View Plans",
	},
	{
		title: "Fund Your Wallet",
		description: "Transfer funds securely from your bank into your halal savings wallet.",
		icon: walletIcon,
		ctaText: "Add Funds",
	},
	{
		title: "Watch Your Wealth Grow",
		description: "Track profit distributions and monitor asset-backed performance in real time.",
		icon: chartIcon,
		ctaText: "Track Progress",
	},
];
</script>

