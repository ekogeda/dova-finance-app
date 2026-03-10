<template>
	<section id="shariah-compliance" class="bg-slate-50 py-16 sm:py-20 lg:py-24" data-aos="fade-in">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="text-center" data-aos="fade-up">
				<div
					class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-800 text-white sm:h-16 sm:w-16 overflow-hidden"
				>
					<img :src="ScaleIcon" class="h-full w-full" alt="Scale icon" />
				</div>
				<h2 class="mt-4 text-2xl font-extrabold uppercase sm:text-3xl lg:text-4xl font-['Inria_Sans']">Shariah Compliance</h2>
				<p class="mt-3 text-sm text-slate-600 sm:text-base sm:mt-4 font-['Inria_Sans']">
					DOVA operates under the supervision of a Shariah Advisory Board.
				</p>
			</div>

			<div
				class="mt-8 grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-12 sm:p-8 lg:grid-cols-2"
				data-aos="fade-in"
			>
				<div>
					<h3 class="text-base font-semibold text-slate-900 sm:text-lg">We avoid</h3>
					<ul class="mt-4 space-y-3 sm:mt-5">
						<li
							v-for="(item, index) in avoidList"
							:key="item"
							class="flex items-start gap-3 text-sm text-slate-700"
							:data-aos="'fade-right'"
							:data-aos-delay="`${index * 100}`"
						>
							<span class="mt-1 inline-block h-2 w-2 rounded-full bg-red-500"></span>
							<span>{{ item }}</span>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="text-base font-semibold text-slate-900 sm:text-lg">We operate using</h3>
					<ul class="mt-4 space-y-3 sm:mt-5">
						<li
							v-for="(item, index) in operateList"
							:key="item"
							class="flex items-start gap-3 text-sm text-slate-700"
							:data-aos="'fade-left'"
							:data-aos-delay="`${index * 100}`"
						>
							<span class="mt-0.5 text-brand-700">✓</span>
							<span>{{ item }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import ScaleIcon from "./assets/icons/ScaleIcon.png";

const avoidList = [
	"Riba (interest)",
	"Gharar (excessive uncertainty)",
	"Maisir (gambling)",
	"Unethical or speculative assets",
];

const operateList = [
	"Mudarabah (profit sharing)",
	"Musharakah (joint venture)",
	"Ijarah (leasing)",
	"Murabaha (cost-plus financing)",
];
</script>

