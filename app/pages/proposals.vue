<template>
    <Page title="Proposal Intake" description="Manage incoming partnership proposals and collaboration requests">
        <template #actions>
            <UButton label="Add Internal Proposal" icon="i-lucide-plus" size="lg" variant="outline" color="neutral" />
            <UButton label="Export Report" icon="i-lucide-file-text" size="lg" />
        </template>
        <template #content>
            <div class="grid grid-cols-4 gap-4">
                <UCard>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-muted-foreground">Pending Review</p>
                            <p class="text-2xl font-medium mt-1">156</p>
                        </div>
                        <UIcon name="i-lucide-inbox" class="size-8 shrink-0 text-warning" />
                    </div>
                </UCard>
                <UCard>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-muted-foreground">Under Review</p>
                            <p class="text-2xl font-medium mt-1">89</p>
                        </div>
                        <UIcon name="i-lucide-file-search" class="size-8 shrink-0 text-secondary" />
                    </div>
                </UCard>
                <UCard>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-muted-foreground">Approved</p>
                            <p class="text-2xl font-medium mt-1">34</p>
                        </div>
                        <UIcon name="i-lucide-thumbs-up" class="size-8 shrink-0 text-success" />
                    </div>
                </UCard>
                <UCard class="bg-gradient-to-tl from-error/10 from-5% to-default">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-muted-foreground">Need Revision</p>
                            <p class="text-2xl font-medium mt-1">7</p>
                        </div>
                        <UIcon name="i-lucide-pencil-line" class="size-8 shrink-0 text-error" />
                    </div>
                </UCard>
            </div>
            <Block>
                <template #content>
                    <ComingSoon />
                </template>
            </Block>
        </template>
    </Page>
</template>

<script setup lang="ts">
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'
import ComingSoon from '~/components/ComingSoon.vue';
</script>