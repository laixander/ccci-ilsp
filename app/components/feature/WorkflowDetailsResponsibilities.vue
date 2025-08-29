<script setup lang="ts">
import type { ListIconProps } from '~/types/models'
import { institutionResponsibilities as defaultInstitutionResponsibilities } from '~/data'
import { partnerResponsibilities as defaultPartnerResponsibilities } from '~/data'

// make it reactive & editable (local copy)
const institutionResponsibilities = ref<ListIconProps[]>([...defaultInstitutionResponsibilities])
const partnerResponsibilities = ref<ListIconProps[]>([...defaultPartnerResponsibilities])

// new objective text
const newInstitutionResponsibility = ref('')
const newPartnerResponsibility = ref('')

// add objective
const addInstitutionResponsibility = () => {
    if (!newInstitutionResponsibility.value.trim()) return
    institutionResponsibilities.value.push({ label: newInstitutionResponsibility.value })
    newInstitutionResponsibility.value = ''
}
const addPartnerResponsibility = () => {
    if (!newPartnerResponsibility.value.trim()) return
    partnerResponsibilities.value.push({ label: newPartnerResponsibility.value })
    newPartnerResponsibility.value = ''
}

// delete objective
const deleteInstitutionResponsibility = (index: number) => {
    institutionResponsibilities.value.splice(index, 1)
}
const deletePartnerResponsibility = (index: number) => {
    partnerResponsibilities.value.splice(index, 1)
}
</script>

<template>
    <div class="flex gap-4">
        <Block title="CBSUA Responsibilities" noBodyPadding>
            <div class="space-y-2 px-3 pb-3 sm:px-4 sm:pb-4">
                <ListIcon v-for="(item, index) in institutionResponsibilities" :key="index" v-bind="item" icon="i-lucide-building"
                iconColor="text-secondary" withContainer>
                    <template #actions>
                        <UButton icon="i-lucide-trash" size="xs" variant="ghost" color="error"
                            @click="deleteInstitutionResponsibility(index)" />
                    </template>
                </ListIcon>

                <div class="flex items-center gap-2">
                    <UInput v-model="newInstitutionResponsibility" placeholder="Add new institution responsibility..." size="lg" variant="soft" class="w-full"
                        @keyup.enter="addInstitutionResponsibility" />
                    <UButton label="Add" icon="i-lucide-plus" size="lg" color="blue" @click="addInstitutionResponsibility" />
                </div>
            </div>
        </Block>

        <Block title="Partner Responsibilities" noBodyPadding>
            <div class="space-y-2 px-3 pb-3 sm:px-4 sm:pb-4">
                <ListIcon v-for="(item, index) in partnerResponsibilities" :key="index" v-bind="item" icon="i-lucide-users"
                iconColor="text-success" withContainer>
                    <template #actions>
                        <UButton icon="i-lucide-trash" size="xs" variant="ghost" color="error"
                            @click="deletePartnerResponsibility(index)" />
                    </template>
                </ListIcon>

                <div class="flex items-center gap-2">
                    <UInput v-model="newPartnerResponsibility" placeholder="Add new partner responsibility..." size="lg" variant="soft" class="w-full"
                        @keyup.enter="addPartnerResponsibility" />
                    <UButton label="Add" icon="i-lucide-plus" size="lg" color="blue" @click="addPartnerResponsibility" />
                </div>
            </div>
        </Block>
    </div>
</template>
