<template>
	<section class="bg-white py-16 sm:py-20" data-aos="fade-in">
		<div class="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4" data-aos="fade-up">
				<img src="/assets/dova-logo.png" alt="DOVA Logo" class="h-10 w-auto" />
				<h2 class="text-xl font-extrabold text-[#000080] sm:text-2xl lg:text-3xl xl:text-4xl font-['Inria_Sans']">
					Build Wealth the Halal Way.
				</h2>
			</div>

			<button
				@click="submitted = !submitted"
				class="mt-6 rounded-lg bg-[#000080] px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:mt-8"
				data-aos="zoom-in"
				data-aos-delay="200"
			>
				{{ submitted ? "You're Ready to Begin" : "Start Saving Today" }}
			</button>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const submitted = ref(false);
</script>

