<script setup lang="ts">
import { classifications, regions, partners } from '~/data'
const _classifications = ref('all')
const _regions = ref('all')
const search = ref('')
const handleSearch = (value: string) => {
    console.log('Search triggered with:', value)
    // Add filter logic here...
}
const handleNavigation = () => {
    navigateTo('/partners/details')
}
</script>
<template>
    <Page title="Partner Management" description="Manage institutional partnerships and collaborations">
        <template #actions>
            <UButton label="Add Partner" icon="i-lucide-plus" size="lg" />
        </template>
        <SearchBar v-model:search="search" placeholder="Search Partners..." @search="handleSearch">
            <USelect v-model="_classifications" :items="classifications" class="lg:w-44" />
            <USelect v-model="_regions" :items="regions" class="lg:w-44" />
        </SearchBar>
        <Grid :lg="3" :gap="4">

            <!-- loop -->
            <Card v-for="card in partners" :key="card.id" :icon="card.icon" :title="card.title"
                :description="card.description" :tags="card.tags" 
                :actions="[
                    { label: 'View', icon: 'i-lucide-eye', onSelect: () => handleNavigation() },
                    { label: 'Edit', icon: 'i-lucide-pencil', onSelect(){ console.log('Click Edit for', card.title) } },
                    { label: 'Delete', icon: 'i-lucide-trash', onSelect(){ console.log('Click Delete for', card.title) } }
                ]"
            >
                <!-- subtitle slot -->
                <template #subtitle>
                    <div class="flex items-center gap-1 text-muted">
                        <UIcon name="i-lucide-map-pin" class="size-3 shrink-0" />
                        <span class="text-sm">{{ card.subtitle }}</span>
                    </div>
                </template>

                <!-- highlights slot -->
                <template #highlights>
                    <div class="flex *:grid *:text-center *:w-full divide-x divide-muted py-4">
                        <div>
                            <span class="text-lg text-highlighted font-bold">{{ card.highlights.mous }}</span>
                            <span class="text-sm text-muted">Active MOUs</span>
                        </div>
                        <div>
                            <span class="text-lg text-highlighted font-bold">{{ card.highlights.projects }}</span>
                            <span class="text-sm text-muted">Active Projects</span>
                        </div>
                    </div>
                </template>
            </Card>
        </Grid>
    </Page>
</template>