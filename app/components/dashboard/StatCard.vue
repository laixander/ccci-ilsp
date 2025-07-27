<template>
    <UCard>
        <div class="flex flex-row-reverse justify-between items-center mb-3 lg:mb-6">
            <UBadge :icon="icon" :color="iconColor || 'primary'" :variant="iconVariant || 'soft'" size="lg" class="rounded-full p-3" />
            <h4 class="font-semibold text-toned">{{ title }}</h4>
        </div>

        <div class="space-y-0.5">
            <div class="text-3xl font-bold text-highlighted">
                {{ value }}
            </div>

            <div v-if="trendIcon || trendValue" class="flex items-center space-x-1 text-xs">
                <UIcon v-if="trendIcon" :name="trendIcon" class="size-4 shrink-0"
                    :class="`text-${trendColor || 'primary'}`" />
                <span :class="`text-${trendColor || 'primary'}`">{{ trendValue }}</span>
                <span class="text-muted">{{ trendDescription || 'from last month' }}</span>
            </div>

            <p v-if="description" class="text-xs text-muted">{{ description }}</p>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import type { StatCardProps } from '~/types/models'

defineProps<StatCardProps>()
</script>
