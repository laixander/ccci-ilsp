<script setup lang="ts">
    defineProps(['title'])
</script>
<template>
    <UCard>
        <div class="p-2 space-y-4">
            <div class="flex items-center gap-3">
                <slot name="icon"/>
                <span class="font-semibold text-default">{{ title }}</span>
            </div>
            <div class="font-light text-sm text-muted text-pretty leading-6">
                <slot />
            </div>
            </div>
    </UCard>
</template>