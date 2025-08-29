<script setup lang="ts">
import { classifications, regions, statProposalCards, proposals } from '~/data'

const search = ref('')
const _classifications = ref('all')
const _regions = ref('all')

const handleSearch = (value: string) => {
    console.log('Search triggered with:', value)
    // Add filter logic here...
}

const handleNavigation = () => {
    navigateTo('/proposals/details')
}
</script>
<template>
    <Page title="Proposal Intake" description="Manage incoming partnership proposals and collaboration requests">
        <template #actions>
            <UButton label="Add Internal Proposal" icon="i-lucide-plus" size="lg" variant="outline" color="neutral" />
            <UButton label="Export Report" icon="i-lucide-file-text" size="lg" />
        </template>
        <Grid :lg="4" :gap="4">
            <StatCard v-for="(proposal, index) in statProposalCards" :key="index" v-bind="proposal" useGradient />
        </Grid>
        <SearchBar v-model:search="search" placeholder="Search Partners..." @search="handleSearch">
            <USelect v-model="_classifications" :items="classifications" class="lg:w-44" />
            <USelect v-model="_regions" :items="regions" class="lg:w-44" />
        </SearchBar>
        <Grid :lg="4" :gap="4">
            <Board v-for="(board, bIndex) in proposals" :key="bIndex" :title="board.title"
                :badge-label="board.badgeLabel" :badge-color="board.badgeColor">
                <template #default="{ showDetails }">
                    <BoardCard v-for="(card, cIndex) in board.cards" :key="cIndex" :board-color="board.badgeColor"
                        v-bind="card" :show-details="showDetails" @navigate="handleNavigation" />
                </template>
            </Board>
        </Grid>
    </Page>
</template>