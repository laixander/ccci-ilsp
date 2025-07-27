<script setup lang="ts">
import { VisXYContainer, VisStackedBar, VisAxis, VisBulletLegend } from '@unovis/vue'
import { ref } from 'vue'

type DataRecord = { x: number, groupA: number, groupB: number }

const data = ref<DataRecord[]>([
    { x: 1, groupA: 2, groupB: 3 },
    { x: 2, groupA: 1, groupB: 2 },
    { x: 3, groupA: 3, groupB: 1 },
    { x: 4, groupA: 5, groupB: 2 },
    { x: 5, groupA: 4, groupB: 3 },
])

const xLabels: Record<number, string> = {
    1: 'Engineering',
    2: 'Business',
    3: 'Agriculture',
    4: 'Education',
    5: 'IT',
}

const colors = ['var(--ui-primary)', 'var(--ui-color-primary-300)']

const items = [
    { name: 'Completed', color: colors[0] },
    { name: 'Active', color: colors[1] },
]

const xTickFormat = (val: number) => xLabels[val] || `#${val}`
</script>

<template>
    <ClientOnly>
        <VisXYContainer :data="data">
            <VisStackedBar :x="(d: { x: number }) => d.x"
                :y="[(d: { groupA: number }) => d.groupA, (d: { groupB: number }) => d.groupB]"
                :color="(_d: any, i: number) => colors[i]" />
            <VisAxis type="x" :tickFormat="xTickFormat" :gridLine="false" :tickLine="false" :numTicks="5" />
            <VisAxis type="y" :numTicks="5" :gridLine="false" :tickLine="false" />
        </VisXYContainer>
        <div class="text-center">
            <VisBulletLegend :items="items" />
        </div>
    </ClientOnly>
</template>

<style scoped>
.unovis-xy-container {
    --vis-axis-grid-color: var(--ui-border);
    --vis-axis-tick-color: var(--ui-border);
    --vis-axis-tick-label-color: var(--ui-text-dimmed);
}
</style>
