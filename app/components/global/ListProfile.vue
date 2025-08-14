<script setup lang="ts">
import type { ListProfileProps } from '~/types/models'
defineProps<ListProfileProps>()
</script>
<template>
    <div class="inline-flex items-center gap-3">
        <slot name="profilePhoto">
            <UAvatar v-if="profilePhoto" :src="profilePhoto" :alt="profileName" size="xl" />
        </slot>
        <div>
            <div v-if="$slots.profileName || profileName" class="font-bold text-default">
                <slot name="profileName">
                    {{ profileName }}
                </slot>
            </div>
            <div v-if="$slots.profileDescription || profileDescription" class="text-sm text-muted">
                <slot name="profileDescription">
                    {{ profileDescription }}
                </slot>
            </div>
        </div>
    </div>
</template>