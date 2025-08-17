<script setup lang="ts">
import { statWorkflowCards, priorities, workflows } from '~/data'

const _priorities = ref('all')
const search = ref('')
const handleSearch = (value: string) => {
    console.log('Search triggered with:', value)
    // Add filter logic here...
}
</script>
<template>
    <Page title="MOU Workflow" description="Track MOU progress through drafting, review, and approval stages" toolbarClass="justify-start gap-4 sm:py-4 bg-info/10 border-b border-info/30">
        <template #toolbar>
            <UIcon name="i-lucide-sparkles" class="size-8 text-info" />
            <div class="space-y-0.5 flex-1">
                <div class="font-semibold text-info text-sm">
                    AI-Powered Document Processing
                </div>
                <div class="text-info text-sm">
                    Upload existing MOU documents and let AI automatically extract key details to jumpstart your workflow.
                </div>
            </div>
            <UButton label="Upload MOU" icon="i-lucide-upload" color="info" variant="outline" />
        </template>
        <template #actions>
            <UButton label="Export Report" icon="i-lucide-file-text" size="lg" variant="outline" color="neutral" />
            <UButton label="Upload MOU" icon="i-lucide-upload" size="lg" variant="outline" color="neutral" />
            <UButton label="New MOU" icon="i-lucide-plus" size="lg" />
        </template>
        <Grid :lg="5" :gap="4">
            <StatCard v-for="(workflow, index) in statWorkflowCards" :key="index" v-bind="workflow" useGradient />
        </Grid>
        <SearchBar v-model:search="search" placeholder="Search Partners..." @search="handleSearch">
            <USelect v-model="_priorities" :items="priorities" class="lg:w-44" />
        </SearchBar>
        <Grid :lg="3" :gap="4">
            <Board v-for="(board, bIndex) in workflows" :key="bIndex" :title="board.title"
                :badge-label="board.badgeLabel" :badge-color="board.badgeColor">
                <template #default="{ showDetails }">
                    <!-- <ProposalCard v-for="(card, cIndex) in board.cards" :key="cIndex" :board-color="board.badgeColor"
                        v-bind="card" :show-details="showDetails" @navigate="handleNavigation" /> -->
                </template>
            </Board>
        </Grid>
    </Page>
</template>