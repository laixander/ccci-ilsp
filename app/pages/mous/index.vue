<script setup lang="ts">
import { status, types, partners } from '~/data'
const _status = ref('all')
const _types = ref('all')
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
    <Page title="MOU Repository" description="Manage memorandums of understanding and partnership agreements">
        <template #actions>
            <UButton label="Upload MOU" icon="i-lucide-upload" size="lg" color="neutral" variant="outline" />
            <UButton label="Create MOU" icon="i-lucide-file-text" size="lg" />
        </template>
        <SearchBar v-model:search="search" placeholder="Search MOUs..." @search="handleSearch">
            <USelect v-model="_status" :items="status" class="lg:w-44" />
            <USelect v-model="_types" :items="types" class="lg:w-44" />
        </SearchBar>
        
        <Grid :lg="2" :gap="4">

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