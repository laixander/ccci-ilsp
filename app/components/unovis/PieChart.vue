<script setup lang="ts">
import { VisSingleContainer, VisDonut, VisBulletLegend, VisTooltip } from '@unovis/vue'
// import { Donut } from '@unovis/ts'

type DataRecord = { key: string; value: number }

const data: DataRecord[] = [
    { key: 'academic_institutions', value: 1396 },
    { key: 'industry_partners', value: 928 },
    { key: 'government', value: 864 }
]

const colors = ['#EC4899', '#60A5FA', '#34D399']

// const triggers = {
//   [Donut.selectors.segment]: (d: DataRecord) =>
//     `<strong>${d.value}</strong>`
// }

const legendItems = data.map((d, i) => ({
    name: d.key
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    color: colors[i]
}))
</script>

<template>
    <ClientOnly>
        <VisSingleContainer :data="data">
            <VisDonut :value="(d: { value: any; }) => d.value" :showEmptySegments="true" :padAngle="0.01" :arcWidth="50"
                :color="colors" />
            <!-- <VisTooltip :triggers="triggers" /> -->
        </VisSingleContainer>
        <div class="text-center">
            <VisBulletLegend :items="legendItems" class="mb-4" />
        </div>
    </ClientOnly>
</template>

<style scoped>
.unovis-single-container {
    --vis-donut-background-color: var(--ui-bg);
}
</style>