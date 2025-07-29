<template>
    <Page>
        <template #content>
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