
<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import AboutSection from './components/AboutSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import ProductsGrid from './components/ProductsGrid.vue'
import ComplianceSection from './components/ComplianceSection.vue'
import InvestmentOpportunities from './components/InvestmentOpportunities.vue'
import FooterCTA from './components/FooterCTA.vue'
</script>
 
<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />
    <main>
      <Hero />
      <AboutSection />
      <HowItWorks />
      <ProductsGrid />
      <ComplianceSection />
      <InvestmentOpportunities />
      <FooterCTA />
    </main>
  </div>
</template>

