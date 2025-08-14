<script setup lang="ts">
import { contactDetails, objectives, scopes } from '~/data'
</script>
<template>
    <div class="flex gap-4">
        <UCard class="flex-1">
            <div class="text-default font-semibold mb-2">
                Proposal Description
            </div>
            <div class="text-sm text-muted text-pretty leading-relaxed">
                We propose a comprehensive research collaboration initiative focused on the development and application
                of artificial intelligence technologies in agricultural settings. This partnership would leverage MIT's
                expertise in AI algorithms and machine learning with CBSUA's deep knowledge of agricultural practices
                and challenges in the Philippines.
            </div>

            <div class="space-y-4 mt-4">
                <div class="text-sm text-default font-semibold">Objectives</div>
                <div class="space-y-2">
                    <ListIcon v-for="(item, index) in objectives" :key="index" v-bind="item" icon="i-lucide-target"
                        iconColor="text-secondary" withContainer />
                </div>
            </div>

            <div class="space-y-4 mt-4">
                <div class="text-sm text-default font-semibold">Scope of Collaboration</div>
                <div class="space-y-2">
                    <ListIcon v-for="(item, index) in scopes" :key="index" v-bind="item"
                        icon="i-lucide-circle-check-big" iconColor="text-success" withContainer />
                </div>
            </div>
        </UCard>
        <div class="max-w-[450px] space-y-4">
            <Block title="Contact Information" noBodyPadding>
                <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
                    <ListProfile profilePhoto="https://i.pravatar.cc/40" profileName="Dr. Hiroshi Tanaka"
                        profileDescription="Primary Contact" />
                    <div class="space-y-2">
                        <ListIcon v-for="(item, index) in contactDetails" :key="index" v-bind="item" />
                    </div>
                    <UButton label="Visit Website" icon="i-lucide-external-link" variant="soft" color="neutral"
                        size="lg" block class="justify-center" />
                </div>
            </Block>
            <Block title="Departments Involved">
                <div class="flex flex-wrap gap-2">

                    <UBadge label="College of Engineering" color="neutral" variant="soft" />
                    <UBadge label="College of Computer Studies" color="neutral" variant="soft" />
                    <UBadge label="College of Agriculture" color="neutral" variant="soft" />
                </div>
            </Block>
        </div>
    </div>
</template>