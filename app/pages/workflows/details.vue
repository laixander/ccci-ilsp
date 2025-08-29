<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import WorkflowDetailsBasic from '~/components/feature/WorkflowDetailsBasic.vue'
import WorkflowDetailsObjectives from '~/components/feature/WorkflowDetailsObjectives.vue'
import WorkflowDetailsResponsibilities from '~/components/feature/WorkflowDetailsResponsibilities.vue'
import WorkflowDetailsTerms from '~/components/feature/WorkflowDetailsTerms.vue'
import WorkflowDetailsReview from '~/components/feature/WorkflowDetailsReview.vue'

const items = [
    {
        label: 'Basic Info',
        icon: 'i-lucide-telescope',
        slot: 'basic' as const
    },
    {
        label: 'Objectives & Scope',
        icon: 'i-lucide-paperclip',
        slot: 'objectives' as const
    },
    {
        label: 'Responsibilities',
        icon: 'i-lucide-file-text',
        slot: 'responsibilities' as const
    },
    {
        label: 'Terms & Conditions',
        icon: 'i-lucide-file-text',
        slot: 'terms' as const
    },
    {
        label: 'Review & Submit',
        icon: 'i-lucide-file-text',
        slot: 'review' as const
    }
] satisfies TabsItem[]

// Local values
const workflow = {
    name: 'Edit MOU Draft',
    version: '1.0',
    lastModified: '2025-01-26'
}

const uiCardConfig = {
    body: 'flex items-center gap-4'
}
</script>
<template>
    <Page>
        <UContainer class="mx-auto space-y-6">
            <div class="flex items-center justify-between">
                <UButton label="Back to Workflows" icon="i-lucide-chevron-left" size="lg" variant="link" color="neutral"
                    to="/workflows" />
                <UButton label="Save Draft" icon="i-lucide-save" size="lg" color="success" />
            </div>
            <UCard :ui="uiCardConfig">
                <div class="w-full">
                    <div class="text-2xl font-bold">{{ workflow.name }}</div>
                    <div class="flex items-center *:text-sm *:text-muted">
                        <span>Version {{ workflow.version }}</span>
                        <UIcon name="i-lucide-dot" class="size-8" />
                        <span>Last modified: {{ workflow.lastModified }}</span>
                    </div>
                </div>
                <div class="flex gap-3">
                    <UBadge label="Draft" color="secondary" variant="soft" />
                </div>
            </UCard>

            <UTabs :items="items" :ui="{ trigger: 'grow' }" color="neutral" class="gap-4 w-full">
                <template #basic>
                    <WorkflowDetailsBasic />
                </template>
                <template #objectives>
                    <WorkflowDetailsObjectives />
                </template>
                <template #responsibilities>
                    <WorkflowDetailsResponsibilities />
                </template>
                <template #terms>
                    <WorkflowDetailsTerms />
                </template>
                <template #review>
                    <WorkflowDetailsReview />
                </template>
            </UTabs>
        </UContainer>
    </Page>
</template>