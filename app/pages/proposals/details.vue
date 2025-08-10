<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

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

const contactDetails = [
    { icon: 'i-lucide-building', label: 'MIT Technology Institute' },
    { icon: 'i-lucide-mail', label: 'hiroshi.tanaka@mit.edu' },
    { icon: 'i-lucide-phone', label: '+1-617-253-1000' },
    { icon: 'i-lucide-calendar', label: 'Submitted: 2025-01-25' }
]

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
                    <div class="text-2xl font-bold">AI Research Collaboration Initiative</div>
                    <div class="flex items-center gap-2 *:text-sm *:text-muted">
                        <UIcon name="i-lucide-building" />
                        <span>MIT Technology Institute</span>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <UBadge label="pending" color="secondary" variant="soft" />
                        <UBadge label="external" color="primary" variant="soft" />
                        <UBadge label="high" color="error" variant="soft" />
                        <div class="text-sm text-dimmed">Type: <span class="font-medium text-toned">Research
                                Partnership</span></div>
                    </div>
                    <!-- Additional proposal details can be added here -->
                </div>
                <div class="flex gap-3">
                    <UAlert color="info" variant="subtle" class="min-w-[150px]">
                        <template #description>
                            <div class="text-2xl font-bold">3</div>
                            <div class="mt-1">Departments</div>
                        </template>
                    </UAlert>
                    <UAlert color="success" variant="subtle" class="min-w-[150px]">
                        <template #description>
                            <div class="text-2xl font-bold">3yrs</div>
                            <div class="mt-1">Duration</div>
                        </template>
                    </UAlert>
                    <UAlert color="orange" variant="subtle" class="min-w-[150px]">
                        <template #description>
                            <div class="text-2xl font-bold">₱500K</div>
                            <div class="mt-1">Budget</div>
                        </template>
                    </UAlert>
                </div>
            </UCard>

            <UTabs :items="items" :ui="{ trigger: 'grow' }" color="neutral" class="gap-4 w-full">
                <template #overview>
                    <div class="flex gap-4">
                        <UCard class="flex-1">
                            Tab 1
                        </UCard>
                        <div class="min-w-[450px] space-y-4">
                            <Block title="Contact Information" noBodyPadding>
                                <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
                                    <ListProfile />
                                    <div class="space-y-2">
                                        <ListIcon v-for="(item, index) in contactDetails" :key="index" v-bind="item" />
                                    </div>
                                    <UButton label="Visit Website" icon="i-lucide-external-link" variant="soft"
                                        color="neutral" size="lg" block class="justify-center" />
                                </div>
                            </Block>
                            <Block title="Departments Involved">
                                Tab 1
                            </Block>
                        </div>
                    </div>
                </template>
                <template #attachments>
                    <UCard>
                        Tab 2
                    </UCard>
                </template>
                <template #review>
                    <UCard>
                        Tab 3
                    </UCard>
                </template>
            </UTabs>
        </UContainer>
    </Page>
</template>