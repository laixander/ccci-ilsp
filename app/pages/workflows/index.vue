<script setup lang="ts">
import { statWorkflowCards, priorities, workflows } from '~/data'

const _priorities = ref('all')
const search = ref('')
const handleSearch = (value: string) => {
    console.log('Search triggered with:', value)
    // Add filter logic here...
}
const handleNavigation = () => {
    navigateTo('/workflows/details')
}

// Add a reactive progress variable
const progress = ref(0)

const open = ref(false)
const loading = ref(true)

const confidence = ref(0)
const targetConfidence = 88

let timer: NodeJS.Timeout | null = null
let interval: NodeJS.Timeout | null = null

watch(open, (isOpen) => {
    if (isOpen) {
        // reset
        loading.value = true
        confidence.value = 0

        // simulate "loading" for 2s
        timer = setTimeout(() => {
            loading.value = false
        }, 2000)

        // animate confidence going up
        interval = setInterval(() => {
            if (confidence.value < targetConfidence) {
                confidence.value++
            } else {
                clearInterval(interval!)
                interval = null
            }
        }, 30) // speed (lower = faster)
    } else {
        // cleanup when closing
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        if (interval) {
            clearInterval(interval)
            interval = null
        }
    }
})

const handleModal = () => {
    open.value = true
}
</script>
<template>
    <!-- <Page title="MOU Workflow" description="Track MOU progress through drafting, review, and approval stages" toolbarClass="justify-start gap-4 sm:py-4 bg-warning/10 border-b border-warning/20 text-warning">
        <template #toolbar>
            <UIcon name="i-lucide-sparkles" class="size-8" />
            <div class="space-y-0.5 flex-1">
                <div class="font-semibold text-sm">
                    AI-Powered Document Processing
                </div>
                <div class="text-sm">
                    Upload existing MOU documents and let AI automatically extract key details to jumpstart your workflow.
                </div>
            </div>
            <UButton label="Upload MOU" icon="i-lucide-upload" color="warning" variant="outline" />
        </template> -->
    <Page title="MOU Workflow" description="Track MOU progress through drafting, review, and approval stages">
        <template #actions>
            <UButton label="Export Report" icon="i-lucide-file-text" size="lg" variant="outline" color="neutral" />
            <UButton label="Upload MOU" icon="i-lucide-upload" size="lg" variant="outline" color="neutral" @click="handleModal" />
            <UButton label="New MOU" icon="i-lucide-plus" size="lg" />
        </template>
        <Grid :lg="5" :gap="4">
            <StatCard v-for="(workflow, index) in statWorkflowCards" :key="index" v-bind="workflow" useGradient />
        </Grid>

        <UAlert icon="i-lucide-sparkles" title="AI-Powered Document Processing"
            description="Upload existing MOU documents and let AI automatically extract key details to jumpstart your workflow."
            variant="subtle" color="secondary" orientation="horizontal" :ui="{
                root: 'items-center',
                icon: 'size-8'
            }" :actions="[
                {
                    label: 'Upload MOU',
                    color: 'secondary',
                    size: 'lg',
                    icon: 'i-lucide-upload',
                    onClick: handleModal
                }
            ]" />

        <SearchBar v-model:search="search" placeholder="Search Partners..." @search="handleSearch">
            <USelect v-model="_priorities" :items="priorities" class="lg:w-44" />
        </SearchBar>
        <Grid :lg="3" :gap="4">
            <Board v-for="(board, bIndex) in workflows" :key="bIndex" :title="board.title"
                :badge-label="board.badgeLabel" :badge-color="board.badgeColor">
                <template #default="{ showDetails }">
                    <BoardCard v-model:progress="progress" v-for="(card, cIndex) in board.cards" :key="cIndex"
                        :board-color="board.badgeColor" v-bind="card" :show-details="showDetails"
                        @navigate="handleNavigation">
                    </BoardCard>
                </template>
            </Board>
        </Grid>
    </Page>

    <UModal v-model:open="open">
        <template #title>
            <div class="flex items-center gap-4">
                <div class="text-highlighted">Extracted Details</div>
                <!-- Badge with skeleton -->
                <template v-if="loading">
                    <UBadge :label="`${confidence}% confidence`" variant="subtle" />
                </template>
                <template v-else>
                    <UBadge :label="`${confidence}% confidence`" variant="subtle" />
                </template>
            </div>
        </template>

        <template #body>
            <div class="flex flex-col gap-4">
                <!-- Loading Skeletons -->
                <template v-if="loading">
                    <div class="flex flex-col gap-3">
                        <USkeleton class="h-4 w-40" />
                        <USkeleton class="h-4 w-60" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <USkeleton class="h-4 w-40" />
                        <USkeleton class="h-4 w-52" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <USkeleton class="h-4 w-40" />
                        <USkeleton class="h-4 w-64" />
                    </div>
                    <div class="inline-flex gap-6">
                        <USkeleton class="h-4 w-32" />
                        <USkeleton class="h-4 w-32" />
                    </div>
                    <USkeleton class="h-20 w-full rounded-lg" />
                    <div class="flex flex-col gap-2">
                        <USkeleton class="h-4 w-32" />
                        <div class="flex gap-2">
                            <USkeleton class="h-6 w-32 rounded-full" />
                            <USkeleton class="h-6 w-40 rounded-full" />
                            <USkeleton class="h-6 w-36 rounded-full" />
                        </div>
                    </div>
                </template>

                <!-- Actual Content -->
                <template v-else>
                    <div class="flex flex-col gap-1">
                        <div class="font-semibold text-highlighted text-sm">MOU Title</div>
                        <div class="text-muted text-sm">AI Research Collaboration Agreement</div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="font-semibold text-highlighted text-sm">Partner Institution</div>
                        <div class="text-muted text-sm">MIT Technology Institute</div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="font-semibold text-highlighted text-sm">Collaboration Type</div>
                        <div class="text-muted text-sm">Academic Collaboration</div>
                    </div>
                    <div class="inline-flex gap-6">
                        <div class="flex-1 inline-flex flex-col gap-1">
                            <div class="font-semibold text-highlighted text-sm">Start Date</div>
                            <div class="text-muted text-sm">2025-03-01</div>
                        </div>
                        <div class="flex-1 inline-flex flex-col gap-1">
                            <div class="font-semibold text-highlighted text-sm">End Date</div>
                            <div class="text-muted text-sm">2028-02-28</div>
                        </div>
                    </div>
                    <USeparator />
                    <div class="flex flex-col gap-1">
                        <div class="font-semibold text-highlighted text-sm">Scope</div>
                        <div class="text-muted text-sm">
                            Joint research activities in emerging technologies, faculty exchange programs, and
                            collaborative curriculum development initiatives.
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="font-semibold text-highlighted text-sm">Objectives</div>
                        <ul class="list-disc list-inside text-muted text-sm">
                            <li>Establish collaborative research programs</li>
                            <li>Facilitate faculty and student exchanges</li>
                            <li>Develop joint academic curricula</li>
                            <li>Share research facilities and resources</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="font-semibold text-highlighted text-sm">Key Personnel</div>
                        <div class="inline-flex gap-2 flex-wrap content-start">
                            <UBadge label="Prof. John Anderson (Co-Investigator)" color="neutral" variant="soft"
                                size="md" />
                            <UBadge label="Dr. Maria Santos (Principal Investigator)" color="neutral" variant="soft"
                                size="md" />
                            <UBadge label="Dr. Sarah Johnson (Project Coordinator)" color="neutral" variant="soft"
                                size="md" />
                        </div>
                    </div>
                </template>
            </div>
        </template>

        <template #footer="{ close }">
            <UButton label="Cancel" size="lg" variant="ghost" color="neutral" class="w-full justify-center"
                @click="close" />
            <UButton label="Edit" icon="i-lucide-edit" size="lg" class="w-full justify-center" />
        </template>
    </UModal>
</template>