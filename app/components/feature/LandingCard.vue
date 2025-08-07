<script setup lang="ts">
    defineProps(['title'])
</script>
<template>
    <UCard>
        <div class="space-y-4">
            <div class="flex items-center gap-4">
                <slot name="icon"/>
                <span class="font-semibold text-highlighted">{{ title }}</span>
            </div>
            <div class="font-light text-muted text-pretty">
                <slot />
            </div>
            </div>
    </UCard>
</template>
