<script setup lang="ts">
import type { ProposalCardProps } from '~/types/models'

const props = defineProps<ProposalCardProps & { showDetails: boolean }>()

// Mapping source type to color
const sourceColor = computed(() => {
    return props.source === 'external' ? 'primary' : 'secondary'
})

// Mapping priority level to color
const priorityColor = computed(() => {
    switch (props.priority) {
        case 'high':
            return 'error'
        case 'medium':
            return 'warning'
        case 'low':
            return 'neutral'
        default:
            return 'neutral'
    }
})

const emit = defineEmits(['navigate'])

function handleClick() {
    // Just tell the parent to navigate — no path given
    emit('navigate')
}
</script>
<template>
    <Block noBodyPadding>
        <div :class="['absolute w-full h-2', `bg-${boardColor}`]">
            <div class="absolute inset-0 bg-white/80 dark:bg-black/80"></div>
        </div>
        <div :class="['p-3 sm:p-4 hover:cursor-pointer', showDetails ? 'space-y-4' : 'space-y-2']" @click="handleClick">
            <!-- Title & Institution/Contact -->
            <div class="space-y-1 pt-0.5 sm:pt-1">
                <div class="font-semibold">{{ title }}</div>
                <div v-if="showDetails" class="space-y-0.5 *:flex *:justify-start *:items-center *:gap-2">
                    <div class="*:text-sm *:text-muted">
                        <UIcon name="i-lucide-building" />
                        <span>{{ institution }}</span>
                    </div>
                    <div class="*:text-sm *:text-muted">
                        <UIcon name="i-lucide-users" />
                        <span>{{ contact }}</span>
                    </div>
                </div>
            </div>

            <!-- Description -->
            <div class="text-sm text-toned text-pretty truncate line-clamp-2">
                {{ description }}
            </div>

            <!-- Badges -->
            <div class="flex gap-2">
                <UBadge :label="source" :color="sourceColor" variant="soft" />
                <UBadge :label="priority" :color="priorityColor" variant="soft" />
            </div>

            <!-- Time Submitted -->
            <div v-if="showDetails" class="flex justify-start items-center gap-2 *:text-xs *:text-dimmed">
                <UIcon name="i-lucide-clock" />
                <span>{{ timeSubmitted }}</span>
            </div>
        </div>
    </Block>
</template>
