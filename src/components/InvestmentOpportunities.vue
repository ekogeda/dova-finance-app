<template>
	<section class="border-t border-slate-200 bg-white py-16 sm:py-20 lg:py-24" data-aos="fade-in">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="text-center" data-aos="fade-up">
				<h2 class="text-2xl font-extrabold sm:text-3xl lg:text-4xl font-['Inria_Sans']">Halal Investment Opportunities</h2>
			</div>

			<div class="mt-8 grid gap-6 rounded-3xl bg-slate-50 p-6 sm:mt-12 sm:p-8 lg:grid-cols-2" data-aos="fade-in">
				<div>
					<h3 class="text-base font-semibold text-slate-900 sm:text-lg">Your funds are invested only in</h3>
					<ul class="mt-4 space-y-3 sm:mt-5">
						<li
							v-for="(item, index) in allowed"
							:key="item"
							class="flex gap-3 text-sm text-slate-700"
							:data-aos="'fade-right'"
							:data-aos-delay="`${index * 100}`"
						>
							<span class="text-emerald-600">•</span>
							<span>{{ item }}</span>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="text-base font-semibold text-slate-900 sm:text-lg">We do not invest in</h3>
					<ul class="mt-4 space-y-3 sm:mt-5">
						<li
							v-for="(item, index) in excluded"
							:key="item"
							class="flex gap-3 text-sm text-slate-700"
							:data-aos="'fade-left'"
							:data-aos-delay="`${index * 100}`"
						>
							<span class="text-rose-500">•</span>
							<span>{{ item }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const allowed = [
	"Sukuk (Islamic bonds)",
	"Real estate-backed assets",
	"Agriculture partnerships",
	"Halal businesses",
	"Equity in Shariah-screened companies",
];

const excluded = ["Conventional banks", "Alcohol", "Gambling", "Tobacco", "Weapons", "Interest-based instruments"];
</script>

