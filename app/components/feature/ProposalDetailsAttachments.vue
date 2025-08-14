<script setup lang="ts">
import { attachments } from '~/data'

const handleDownload = (file: { name: string }) => {
    console.log(`Downloading ${file.name}`);
}

const handleView = (file: { name: string }) => {
    console.log(`Viewing ${file.name}`);
}
</script>
<template>
    <Block title="Attachments" noBodyPadding>
        <div class="space-y-2 px-3 pb-3 sm:px-4 sm:pb-4">
            <ListIcon v-for="file in attachments" :label="file.name" icon="i-lucide-file-text" withContainer styledIcon>
                <template #description>
                    <span class="text-xs text-muted">{{ file.size }} &bullet; {{ file.date }}</span>
                </template>
                <template #actions>
                    <UButton icon="i-lucide-download" variant="soft" color="neutral" size="sm" label="Download"
                        class="justify-center" @click="() => handleDownload(file)" />
                    <UTooltip text="View in Browser">
                        <UButton icon="i-lucide-eye" variant="soft" color="neutral" size="sm"
                            class="justify-center" @click="() => handleView(file)" />
                    </UTooltip>
                </template>
            </ListIcon>
        </div>
    </Block>
</template>