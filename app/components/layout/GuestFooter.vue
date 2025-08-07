<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    [
        {
            icon: 'i-hugeicons-internet',
            label: 'CBSUA International Linkages',
            to: '#CBSUA International Linkages'
        }
    ],
    [
        {
            label: `© ${(new Date()).getFullYear()} Central Bicol State University of Agriculture. All rights reserved.`,
            to: '#registration'
        }
    ]
])
</script>
<template>
    <div class="border-t dark:border-gray-800 border-gray-100 shadow-sm">
        <UContainer>
            <UNavigationMenu :items="items">
            </UNavigationMenu>
        </UContainer>
    </div>
</template>
