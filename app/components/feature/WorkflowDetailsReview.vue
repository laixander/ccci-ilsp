<script setup lang="ts">
import { typeDetails } from '~/data/reviewForm'
import { defaultMous } from '~/data'
const mous = ref({ ...defaultMous })

import type { CheckboxGroupItem } from '@nuxt/ui'

const agreements = ref<CheckboxGroupItem[]>([
    'I have reviewed all sections and confirm the information is accurate', 
    'I agree to the terms and conditions outlined in this MOU', 
    'This MOU is ready for internal review and approval'
])
</script>
<template>
    <Block title="Review & Submit" noBodyPadding>
        <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
            <UAlert variant="subtle" color="secondary">
                <template #title>
                    <div class="text-secondary font-bold">MOU Summary</div>
                </template>
                <template #description>
                    <div class="grid lg:grid-rows-3 grid-flow-col gap-2 mt-2">
                        <div class="space-x-4">
                            <span class="text-muted">Title:</span>
                            <span class="text-highlighted font-medium">{{ mous.title }}</span>
                        </div>
                        <div class="space-x-4">
                            <span class="text-muted">Duration:</span>
                            <span class="text-highlighted font-medium">{{ mous.duration }}</span>
                        </div>
                        <div class="space-x-4">
                            <span class="text-muted">Departments:</span>
                            <span class="text-highlighted font-medium">{{ mous.involved.join(', ') }}</span>
                        </div>
                        <div class="space-x-4">
                            <span class="text-muted">Partner:</span>
                            <span class="text-highlighted font-medium">{{ mous.institution }}</span>
                        </div>
                        <div class="space-x-4">
                            <span class="text-muted">Type:</span>
                            <span class="text-highlighted font-medium">{{ typeDetails.find(t => t.value === mous.type)?.label }}</span>
                        </div>
                    </div>
                </template>
            </UAlert>
            <UCheckboxGroup :items="agreements" />
            <div class="text-right space-x-2">
                <UButton label="Export PDF" icon="i-lucide-upload" variant="soft" size="lg" color="neutral" />
                <UButton label="Submit for Review" icon="i-lucide-send" size="lg" color="primary" />
            </div>
        </div>
    </Block>
</template>