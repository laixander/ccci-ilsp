<script setup lang="ts">
import { departments, coordinators, actions, uiFormFieldConfig, timelineItems } from '~/data/reviewForm'

const actionDefault = ref('review')
</script>
<template>
    <div class="flex gap-4">
        <div class="flex-1 space-y-4">
            <Block title="Assignment & Routing" noBodyPadding>
                <div class="space-y-6 px-3 pb-3 sm:px-4 sm:pb-4">
                    <UFormField label="Assign to departments" description="Select which departments should review and potentially implement this partnership proposal" :ui="uiFormFieldConfig">
                        <UCheckboxGroup :items="departments" :ui="{fieldset: 'grid lg:grid-rows-4 grid-flow-col gap-1.5'}" />
                    </UFormField>
                    <UFormField label="Assign Coordinator" :ui="uiFormFieldConfig">
                        <USelect placeholder="Select Coordinator" :items="coordinators" variant="soft" size="lg" class="w-full" />
                    </UFormField>
                </div>
            </Block>

            <Block title="Review & Decision" noBodyPadding>
                <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
                    <UFormField label="Action" :ui="uiFormFieldConfig">
                        <USelect v-model="actionDefault" :items="actions" variant="soft" size="lg" class="w-full" />
                    </UFormField>
                    <UFormField label="Review Comments" :ui="uiFormFieldConfig">
                        <UTextarea placeholder="Add your review comments here..." variant="soft" size="lg" class="w-full" />
                    </UFormField>

                    <div class="text-right space-x-2">
                        <UButton label="Save Draft" icon="i-lucide-save" variant="outline" color="neutral" size="lg" />
                        <UButton label="Submit Review" icon="i-lucide-circle-check-big" color="primary" size="lg" />
                    </div>
                </div>
            </Block>
        </div>
        
        <div class="w-full max-w-[450px] space-y-4">
            <Block title="Review History" noBodyPadding>
                <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
                    <UTimeline color="info" size="3xs" :default-value="0" :items="timelineItems" reverse  class="w-96" :ui="{indicator: 'mt-0.5 w-2.5 h-2.5'}">
                        <template #indicator="{ item }">
                            <span></span>
                        </template>
                        <!-- Custom title slot for "proposal" -->
                        <template #title="{ item }">
                        <div class="mt-1 space-y-1">
                            <UBadge :color="item.authorColor || 'neutral'" variant="soft">
                                {{ item.author }}
                            </UBadge>
                            <div>{{ item.title }}</div>
                        </div>
                        </template>
                    </UTimeline>
                </div>
            </Block>
        </div>
    </div>
</template>