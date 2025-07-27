<template>
    <UCard>
        <div class="flex flex-col gap-4 sm:gap-6">
            <div v-if="title" class="relative flex flex-col gap-5 lg:flex-row lg:items-center">
                <div class="flex-1 space-y-0.5">
                    <div class="text-pretty font-semibold text-highlighted">
                        {{ title }}
                    </div>
                    <div class="text-sm text-pretty text-muted">
                        {{ description }}
                    </div>
                </div>
                <div class="grid gap-1 md:gap-2 md:flex">
                    <slot name="actions" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <slot name="content" />
            </div>
        </div>
    </UCard>
</template>
<script setup lang="ts">
import type { BlockProps } from '~/types/models'
defineProps<BlockProps>()
</script>