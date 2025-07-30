<template>
    <UCard :class="[
    'bg-gradient-to-tl from-5% to-default',
    color === 'warning' && 'from-warning/10',
    color === 'secondary' && 'from-secondary/10',
    color === 'success' && 'from-success/10',
    color === 'error' && 'from-error/10'
  ]">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm text-muted-foreground">{{ label }}</p>
                <p class="text-2xl font-medium mt-1">{{ count }}</p>
            </div>
            <UIcon :name="icon" :class="`size-6 shrink-0 text-${color}`" />
        </div>
    </UCard>
</template>
<script setup lang="ts">
import type { StatSmCardProps } from '~/types/models'
defineProps<StatSmCardProps>()
</script>