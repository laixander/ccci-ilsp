<script setup lang="ts">
import type { ListIconProps } from '~/types/models'

defineProps<ListIconProps>()
</script>

<template>
    <div class="flex items-center gap-2 *:text-sm *:text-muted">
        <UIcon v-if="icon" :name="icon" />
        <span>{{ label }}</span>
    </div>
</template>
