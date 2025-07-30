<template>
    <Page title="Proposal Intake" description="Manage incoming partnership proposals and collaboration requests">
        <template #actions>
            <UButton label="Add Internal Proposal" icon="i-lucide-plus" size="lg" variant="outline" color="neutral" />
            <UButton label="Export Report" icon="i-lucide-file-text" size="lg" />
        </template>
        <template #content>
            <div class="grid grid-cols-4 gap-4">
                <StatCard
                    v-for="(statSm, index) in statSmCards"
                    :key="index"
                    v-bind="statSm"
                />
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
import { statSmCards } from '~/data';
</script>