<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import ProposalDetailsOverview from '~/components/feature/ProposalDetailsOverview.vue'
import ProposalDetailsAttachments from '~/components/feature/ProposalDetailsAttachments.vue'
import ProposalDetailsReview from '~/components/feature/ProposalDetailsReview.vue'

const items = [
    {
        label: 'Overview',
        icon: 'i-lucide-telescope',
        slot: 'overview' as const
    },
    {
        label: 'Attachments',
        icon: 'i-lucide-paperclip',
        slot: 'attachments' as const
    },
    {
        label: 'Review',
        icon: 'i-lucide-file-text',
        slot: 'review' as const
    }
] satisfies TabsItem[]

// Local values
const proposal = {
    name: 'AI Research Collaboration Initiative',
    institute: 'MIT Technology Institute',
    type: 'Research Partnership',
    departments: 3,
    duration: '3yrs',
    budget: '₱500K',
    status: {
        label: 'pending',
        color: 'secondary' as 'secondary'
    },
    source: {
        label: 'external',
        color: 'primary' as 'primary'
    },
    priority: {
        label: 'high',
        color: 'error' as 'error'
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
                <UButton label="Back to Proposals" icon="i-lucide-chevron-left" size="lg" variant="link" color="neutral"
                    to="/proposals" />
                <UButton label="Edit Proposal" icon="i-lucide-square-pen" size="lg" variant="outline" color="neutral" />
            </div>
            <UCard :ui="uiCardConfig">
                <div class="w-full">
                    <div class="text-2xl font-bold">{{ proposal.name }}</div>
                    <div class="flex items-center gap-2 *:text-sm *:text-muted">
                        <UIcon name="i-lucide-building" />
                        <span>{{ proposal.institute }}</span>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <UBadge :label="proposal.status.label" :color="proposal.status.color" variant="soft" />
                        <UBadge :label="proposal.source.label" :color="proposal.source.color" variant="soft" />
                        <UBadge :label="proposal.priority.label" :color="proposal.priority.color" variant="soft" />
                        <div class="text-sm text-dimmed">Type: <span class="font-medium text-toned">{{ proposal.type }}</span></div>
                    </div>
                    <!-- Additional proposal details can be added here -->
                </div>
                <div class="flex gap-3">
                    <UAlert color="info" variant="subtle" class="min-w-[136px]">
                        <template #description>
                            <div class="mb-1">Departments</div>
                            <div class="text-2xl font-bold">{{ proposal.departments }}</div>
                        </template>
                    </UAlert>
                    <UAlert color="success" variant="subtle" class="min-w-[136px]">
                        <template #description>
                            <div class="mb-1">Duration</div>
                            <div class="text-2xl font-bold">{{ proposal.duration }}</div>
                        </template>
                    </UAlert>
                    <UAlert color="orange" variant="subtle" class="min-w-[136px]">
                        <template #description>
                            <div class="mb-1">Budget</div>
                            <div class="text-2xl font-bold">{{ proposal.budget }}</div>
                        </template>
                    </UAlert>
                </div>
            </UCard>

            <UTabs :items="items" :ui="{ trigger: 'grow' }" color="neutral" class="gap-4 w-full">
                <template #overview>
                    <ProposalDetailsOverview />
                </template>
                <template #attachments>
                    <ProposalDetailsAttachments />
                </template>
                <template #review>
                    <ProposalDetailsReview />
                </template>
            </UTabs>
        </UContainer>
    </Page>
</template>