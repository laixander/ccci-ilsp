<script setup lang="ts">
import type { ListIconProps } from '~/types/models'

defineProps<ListIconProps>()
</script>

<template>
    <div :class="withContainer ? 'bg-elevated/50 rounded-lg px-4 py-2' : ''">
        <div class="flex items-center gap-2">
            <UIcon v-if="icon" :name="icon" :class="['shrink-0', iconColor || 'text-muted']" />
            <span class="text-sm text-muted">{{ label }}</span>
        </div>
    </div>
</template>
