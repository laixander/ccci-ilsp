<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { departments, typeDetails } from '~/data/reviewForm'
import { defaultMous } from '~/data'

const mous = ref({ ...defaultMous })

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})
</script>
<template>
    <UCard>
        <div class="text-highlighted font-semibold mb-2">
            Basic Information
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UFormField label="MOU Title">
                <UInput v-model="mous.title" variant="soft" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="Partner Institution">
                <UInput v-model="mous.institution" variant="soft" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="Collaboration Type">
                <USelect v-model="mous.type" variant="soft" :items="typeDetails" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="Duration">
                <UInput v-model="mous.duration" variant="soft" size="lg" class="w-full" />
                <!-- <UPopover>
                    <UButton color="neutral" variant="soft" size="lg" class="w-full justify-between">
                        <template v-if="mous.duration.start">
                            <template v-if="mous.duration.end">
                                {{ df.format(mous.duration.start.toDate(getLocalTimeZone())) }} - {{
                                    df.format(mous.duration.end.toDate(getLocalTimeZone())) }}
                            </template>

                            <template v-else>
                                {{ df.format(mous.duration.start.toDate(getLocalTimeZone())) }}
                            </template>
                        </template>
                        <template v-else>
                            Pick a date
                        </template>
                        <template #trailing>
                            <UIcon name="i-lucide-calendar" class="size-4 text-muted" />
                        </template>
                    </UButton>

                    <template #content>
                        <UCalendar :v-model="mous.duration" class="p-2" :number-of-months="2" range />
                    </template>
                </UPopover> -->
            </UFormField>
            <UFormField label="Start Date">
                <UPopover>
                    <UButton color="neutral" variant="soft" size="lg" class="w-full justify-between">
                        {{ mous.startDate ? df.format(mous.startDate.toDate(getLocalTimeZone())) : 'Select a date' }}
                        <template #trailing>
                            <UIcon name="i-lucide-calendar" class="size-4 text-muted" />
                        </template>
                    </UButton>

                    <template #content>
                        <UCalendar :v-model="mous.startDate" class="p-2" />
                    </template>
                </UPopover>
            </UFormField>
            <UFormField label="End Date">
                <UPopover>
                    <UButton color="neutral" variant="soft" size="lg" class="w-full justify-between">
                        {{ mous.endDate ? df.format(mous.endDate.toDate(getLocalTimeZone())) : 'Select a date' }}
                        <template #trailing>
                            <UIcon name="i-lucide-calendar" class="size-4 text-muted" />
                        </template>
                    </UButton>

                    <template #content>
                        <UCalendar :v-model="mous.endDate" class="p-2" />
                    </template>
                </UPopover>
            </UFormField>
        </div>
        <UFormField label="Involved Departments" class="mt-4">
            <UCheckboxGroup v-model="mous.involved" :items="departments" :ui="{fieldset: 'grid lg:grid-rows-3 grid-flow-col gap-1.5'}" />
        </UFormField>
        <UFormField label="Description" class="mt-4">
            <UTextarea v-model="mous.description" variant="soft" size="lg" class="w-full" />
        </UFormField>
    </UCard>
</template>