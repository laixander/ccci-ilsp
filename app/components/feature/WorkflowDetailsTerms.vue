<script setup lang="ts">
const legal = ref({
    financialTerms: 'Each party shall bear its own costs unless otherwise agreed in writing for specific projects.',
    intellectualProperty: 'Joint intellectual property rights for collaborative research outcomes, with individual rights retained for pre-existing IP.',
    terminationClause: 'Either party may terminate this agreement with 90 days written notice.',
    governingLaw: 'This agreement shall be governed by the laws of the Republic of the Philippines.',
    contact: {
        institution: 'Dr. Maria Santos, Director, International Linkages Office',
        partner: 'Dr. Sarah Johnson, Director, International Partnerships'
    }
})
</script>
<template>
    <Block title="Legal Terms & Conditions" noBodyPadding>
        <div class="space-y-4 px-3 pb-3 sm:px-4 sm:pb-4">
            <UFormField label="Financial Terms">
                <UTextarea v-model="legal.financialTerms" variant="soft" class="w-full" />
            </UFormField>
            <UFormField label="Intellectual Property">
                <UTextarea v-model="legal.intellectualProperty" variant="soft" class="w-full" />
            </UFormField>
            <UFormField label="Termination Clause">
                <UTextarea v-model="legal.terminationClause" variant="soft" class="w-full" />
            </UFormField>
            <UFormField label="Governing Law">
                <UTextarea v-model="legal.governingLaw" variant="soft" class="w-full" />
            </UFormField>
            <div class="flex gap-4">
                <UFormField label="CBSUA Contact" class="w-full">
                    <UInput v-model="legal.contact.institution" variant="soft" class="w-full" />
                </UFormField>
                <UFormField label="Partner Contact" class="w-full">
                    <UInput v-model="legal.contact.partner" variant="soft" class="w-full" />
                </UFormField>
            </div>
        </div>
    </Block>
</template>