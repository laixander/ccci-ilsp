<template>
    <UCard>
        <div class="flex items-center gap-2">
            <div class="flex-1 space-y-1">
                <h4 class="font-semibold">
                    {{ title }}
                </h4>
                <div class="flex items-center gap-1 *:text-xs *:text-dimmed">
                    <UIcon name="i-lucide-calendar" class="size-4 shrink-0" />
                    <div>{{ deadline }}</div>
                </div>
            </div>
            <UBadge :label="status" :color="statusColor || 'primary'" :variant="statusVariant || 'soft'" class="rounded-full" />
            <!-- <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" /> -->
        </div>
    </UCard>
</template>

<script setup lang="ts">
import type { DeadlineCardProps } from '~/types/models'
defineProps<DeadlineCardProps>()
</script>