<script setup lang="ts">
import type { ListIconProps } from '~/types/models'
import { objectives as defaultObjectives } from '~/data'
import { scopes as defaultScopes } from '~/data'

// make it reactive & editable (local copy)
const objectives = ref<ListIconProps[]>([...defaultObjectives])
const scopes = ref<ListIconProps[]>([...defaultScopes])

// new objective text
const newObjective = ref('')
const newScope = ref('')

// add objective
const addObjective = () => {
    if (!newObjective.value.trim()) return
    objectives.value.push({ label: newObjective.value })
    newObjective.value = ''
}
const addScope = () => {
    if (!newScope.value.trim()) return
    scopes.value.push({ label: newScope.value })
    newScope.value = ''
}

// delete objective
const deleteObjective = (index: number) => {
    objectives.value.splice(index, 1)
}
const deleteScope = (index: number) => {
    scopes.value.splice(index, 1)
}
</script>

<template>
    <div class="w-full space-y-4">
        <Block title="Objectives" noBodyPadding>
            <div class="space-y-2 px-3 pb-3 sm:px-4 sm:pb-4">
                <ListIcon v-for="(item, index) in objectives" :key="index" v-bind="item" icon="i-lucide-target"
                iconColor="text-secondary" withContainer>
                    <template #actions>
                        <UButton icon="i-lucide-trash" size="xs" variant="ghost" color="error"
                            @click="deleteObjective(index)" />
                    </template>
                </ListIcon>

                <div class="flex items-center gap-2">
                    <UInput v-model="newObjective" placeholder="Add new objective..." size="lg" variant="soft" class="w-full"
                        @keyup.enter="addObjective" />
                    <UButton label="Add" icon="i-lucide-plus" size="lg" color="blue" @click="addObjective" />
                </div>
            </div>
        </Block>
        <Block title="Scope of Collaboration" noBodyPadding>
            <div class="space-y-2 px-3 pb-3 sm:px-4 sm:pb-4">
                <ListIcon v-for="(item, index) in scopes" :key="index" v-bind="item" icon="i-lucide-circle-check-big" iconColor="text-success" withContainer>
                    <template #actions>
                        <UButton icon="i-lucide-trash" size="xs" variant="ghost" color="error"
                            @click="deleteScope(index)" />
                    </template>
                </ListIcon>

                <div class="flex items-center gap-2">
                    <UInput v-model="newScope" placeholder="Add new scope..." size="lg" variant="soft" class="w-full"
                        @keyup.enter="addScope" />
                    <UButton label="Add" icon="i-lucide-plus" size="lg" color="blue" @click="addScope" />
                </div>
            </div>
        </Block>
    </div>
</template>
