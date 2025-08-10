<script setup lang="ts">
definePageMeta({
    layout: 'guest'
})

const features = useConstantFeatures()
</script>
<template>
    <UContainer class="py-16">
        <div class="min-h-[calc(100vh-70px)] space-y-24 text-center flex flex-col items-center">
            
            <div class="space-y-4 pt-24">
                <UBadge variant="subtle" size="lg" class="px-4 rounded-full">
                    International Linkages & Student Partnerships
                </UBadge>
                <h1 class="text-8xl/24 font-bold">
                    Empowering Global <span class="text-primary">Academic Partnerships</span>
                </h1>
                <p class="font-extralight text-2xl text-muted leading-10">
                    Streamline international collaborations, manage MOUs, track activities, and foster meaningful partnerships between CBSUA and institutions worldwide.
                </p>
            </div>
            <div class="flex justify-center gap-4">
                <UButton label="Get Started" size="lg" class="text-lg px-8 py-4 rounded-xl" trailing-icon="i-lucide-arrow-right" />
                <UButton label="Learn More" size="lg" class="text-lg px-8 py-4 rounded-xl" color="neutral" />
            </div>
        </div>
        <div class="text-center space-y-16">
            <div class="space-y-4">
                <h2 class=" font-sans text-3xl font-bold">
                    Comprehensive Partner Management
                </h2>
                <div class="font-light text-muted text-lg">
                    Everything you need to manage international linkages and partnerships in one integrated platform.
                </div>
            </div>
            <div class="grid grid-cols-3 gap-8 text-left">
                <LazyFeatureLandingCard v-for="feature in features" :title="feature.title" :key="feature.title">
                    <template #icon>
                        <div :style="`background-color:${feature.iconBackground}`" class="items-center flex p-[9px] rounded-[9px]">
                            <UIcon :name="feature.icon" :style="`color:${feature.iconColor}`"/>
                        </div>
                    </template>
                    <div>{{ feature.description }}</div>
                </LazyFeatureLandingCard>
            </div>
        </div>
    </UContainer>
</template>