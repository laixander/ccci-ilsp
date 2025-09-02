<script setup lang="ts">
import PartnerDetailsOverview from '~/components/feature/PartnerDetailsOverview.vue'

// Local values
const partner = {
    name: 'AI Research Collaboration Initiative',
    location: 'Japan',
    active: 2,
    completed: 6,
    ongoing: 12,
    institution: {
        label: 'university',
        color: 'purple' as 'purple'
    },
    status: {
        label: 'active',
        color: 'green' as 'green'
    }
}

const uiCardConfig = {
    body: 'flex items-center gap-4'
}
</script>
<template>
    <Page>
        <UContainer class="mx-auto space-y-6">
            <div class="flex items-center justify-between">
                <UButton label="Back to Partners" icon="i-lucide-chevron-left" size="lg" variant="link" color="neutral"
                    to="/partners" />
                <UButton label="Edit Partner" icon="i-lucide-square-pen" size="lg" variant="outline" color="neutral" />
            </div>
            <UCard :ui="uiCardConfig">
                <div class="w-full">
                    <div class="text-2xl font-bold">{{ partner.name }}</div>
                    <div class="flex items-center gap-2 mt-4">
                        <div class="flex items-center gap-1 *:text-xs *:text-muted">
                            <UIcon name="i-lucide-map-pin" class="size-4 shrink-0" />
                            <span>{{ partner.location }}</span>
                        </div>
                        <UBadge :label="partner.institution.label" :color="partner.institution.color" variant="soft" />
                        <UBadge :label="partner.status.label" :color="partner.status.color" variant="soft" />
                    </div>
                    <!-- Additional partner details can be added here -->
                </div>
                <div class="flex gap-3">
                    <UAlert color="sky" variant="subtle" class="min-w-[136px]">
                        <template #description>
                            <div class="mb-1">Active MOUs</div>
                            <div class="text-2xl font-bold">{{ partner.active }}</div>
                        </template>
                    </UAlert>
                    <UAlert color="green" variant="subtle" class="min-w-[136px]">
                        <template #description>
                            <div class="mb-1">Completed</div>
                            <div class="text-2xl font-bold">{{ partner.completed }}</div>
                        </template>
                    </UAlert>
                    <UAlert color="rose" variant="subtle" class="min-w-[136px]">
                        <template #description>
                            <div class="mb-1">Ongoing</div>
                            <div class="text-2xl font-bold">{{ partner.ongoing }}</div>
                        </template>
                    </UAlert>
                </div>
            </UCard>
            <PartnerDetailsOverview />
        </UContainer>
    </Page>
</template>