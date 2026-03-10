<template>
	<header class="fixed inset-x-0 top-0 z-50">
		<div class="relative overflow-hidden border-b border-white/10 bg-[#0b1f57] text-white">
			<div class="absolute inset-0">
				<div class="h-full w-full bg-[linear-gradient(90deg,#102a72_0%,#173982_35%,#6d87b7_100%)]"></div>
				<div
					class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%)]"
				></div>
				<div
					class="absolute left-0 top-0 h-full w-64 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]"
				></div>
			</div>

			<div class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<div class="flex items-center gap-10">
					<a href="#" class="flex items-center gap-2">
						<img src="/assets/dova-logo.png" alt="DOVA Logo" class="h-8 w-auto" />
						<!-- <span class="text-lg font-extrabold tracking-tight text-sky-400">DOVA</span> -->
					</a>

					<nav class="hidden items-center gap-8 lg:flex">
						<div v-for="item in navItems" :key="item.label" class="group relative">
							<button
								@click="scrollToSection(item)"
								class="flex items-center gap-1 text-sm font-medium text-white/90 transition hover:text-white"
								type="button"
							>
								<span>{{ item.label }}</span>
								<!-- <svg
									class="h-4 w-4 text-white/70 transition group-hover:text-white"
									viewBox="0 0 20 20"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg> -->
							</button>
						</div>
					</nav>
				</div>

				<div class="hidden lg:block">
					<button
						class="rounded-lg bg-[#000080] px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#0d1697]"
					>
						Get Started
					</button>
				</div>

				<button
					@click="mobileMenuOpen = !mobileMenuOpen"
					class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
					aria-label="Toggle navigation"
					type="button"
				>
					<svg
						v-if="!mobileMenuOpen"
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<div v-if="mobileMenuOpen" class="relative border-t border-white/10 bg-[#0b1f57]/95 px-4 py-4 lg:hidden">
				<nav class="flex flex-col gap-3">
					<button
						v-for="item in navItems"
						:key="item.label"
						@click="scrollToSection(item)"
						class="flex items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
						type="button"
					>
						<span>{{ item.label }}</span>
						<svg
							class="h-4 w-4 text-white/70"
							viewBox="0 0 20 20"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<button
						class="mt-2 rounded-lg bg-[#000080] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d1697]"
						type="button"
					>
						Get Started
					</button>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const navItems = [{ label: "About" }, { label: "How it works" }, { label: "Savings" }, { label: "Shariah Compliance" }];

const sectionIds = {
	About: "about",
	"How it works": "how-it-works",
	Savings: "savings",
	"Shariah Compliance": "shariah-compliance",
};

const scrollToSection = (item) => {
	const id = sectionIds[item.label];
	if (id) {
		const element = document.getElementById(id);
		if (element) {
			const header = document.querySelector("header");
			const headerHeight = header ? header.offsetHeight : 0;
			window.scrollTo({ top: element.offsetTop - headerHeight - 20, behavior: "smooth" });
			mobileMenuOpen.value = false;
		}
	}
};
</script>

