<script setup lang="ts">
import { partnerContactDetails, attachments } from '~/data'
import { partnerActivities } from '~/data/reviewForm'
const partner = {
    about: 'Leading technological university in Japan with strong research programs in engineering and applied sciences.',
    collabAreas: [ 'Research', 'Engineering', 'Student Exchange' ]
}
const handleDownload = (file: { name: string }) => {
    console.log(`Downloading ${file.name}`);
}
</script>
<template>
    <div class="flex gap-4">
        <div class="flex-1 space-y-4">
            <UCard>
                <div class="text-highlighted font-semibold mb-2">
                    About
                </div>
                <div class="text-sm text-muted text-pretty leading-relaxed">
                    {{ partner.about }}
                </div>
                <div class="mt-6 space-y-2">
                    <div class="text-highlighted text-sm">
                        Areas of Collaboration:
                    </div>
                    <div class="space-x-2">
                        <UBadge v-for="(item, index) in partner.collabAreas" :key="index" :label="item" color="neutral" variant="soft" />
                    </div>
                </div>
            </UCard>
            <Block title="Partnership Documents" noBodyPadding>
                <template #actions>
                    <UButton label="Upload Document" icon="i-lucide-upload" color="neutral" variant="soft" />
                </template>
                <div class="space-y-2 px-3 pb-3 sm:px-4 sm:pb-4">
                    <ListIcon v-for="file in attachments" :label="file.name" icon="i-lucide-file-text" withContainer styledIcon>
                        <template #description>
                            <span class="text-xs text-muted">{{ file.size }} &bullet; {{ file.date }}</span>
                        </template>
                        <template #actions>
                            <UTooltip text="Download">
                                <UButton icon="i-lucide-download" variant="soft" color="neutral" size="sm"
                                class="justify-center" @click="() => handleDownload(file)" />
                            </UTooltip>
                        </template>
                    </ListIcon>
                </div>
            </Block>
        </div>
        <div class="w-full max-w-[450px] space-y-4">
            <Block title="Contact Information" noBodyPadding>
                <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
                    <ListProfile profilePhoto="https://i.pravatar.cc/40" profileName="Dr. Hiroshi Tanaka"
                        profileDescription="Primary Contact" />
                    <div class="space-y-2">
                        <ListIcon v-for="(item, index) in partnerContactDetails" :key="index" v-bind="item" />
                    </div>
                    <UButton label="Visit Website" icon="i-lucide-external-link" variant="soft" color="neutral"
                        size="lg" block class="justify-center" />
                </div>
            </Block>
            <Block title="Recent Activities" noBodyPadding>
                <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
                    <UTimeline color="info" size="3xs" :default-value="0" :items="partnerActivities" class="w-96" :ui="{indicator: 'mt-0.5 w-2.5 h-2.5'}">
                        <template #indicator="{ item }">
                            <span></span>
                        </template>
                        <!-- Custom title slot for "proposal" -->
                        <template #title="{ item }">
                            <div>{{ item.title }}</div>
                        </template>
                    </UTimeline>
                </div>
            </Block>
        </div>
    </div>
</template>