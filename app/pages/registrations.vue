<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import StepInstitution from '~/components/feature/RegistrationStepInstitution.vue'
import StepContact from '~/components/feature/RegistrationStepContact.vue'
import StepCollaboration from '~/components/feature/RegistrationStepCollaboration.vue'
import StepReview from '~/components/feature/RegistrationStepReview.vue'
import Success from '~/components/feature/RegistrationSuccess.vue'
import StepperLayout from '~/components/feature/RegistrationStepperLayout.vue'

const toast = useToast()

const submitted = ref(false)

const pageTitle = computed(() =>
    submitted.value ? undefined : 'Partnership Registration'
)
const pageDescription = computed(() =>
    submitted.value ? undefined : 'Submit your partnership proposal to collaborate with Central Bicol State University of Agriculture'
)

const steps = ['Institution Info', 'Contact Details', 'Collaboration', 'Review & Submit']
const totalSteps = steps.length
const step = ref(0)

const value = ref(0)

const stepComponents = [StepInstitution, StepContact, StepCollaboration, StepReview]

watch(step, () => {
    value.value = Math.round(((step.value + 1) / totalSteps) * 100)
}, { immediate: true })

const goToNext = () => {
    if (step.value < totalSteps - 1) {
        step.value++
    } else {
        submitForm()
    }
}

const goToPrevious = () => {
    if (step.value > 0) step.value--
}

const submitForm = () => {
    submitted.value = true
    toast.add({
        title: 'Proposal Submitted',
        description: 'Your proposal has been successfully submitted.',
        color: 'success',
        icon: 'i-lucide-check-circle',
    })
}

const restartForm = () => {
    step.value = 0
    value.value = 0
    submitted.value = false
}

const navigateToWebsite = () => {
    window.open('https://www.cbsua.edu.ph', '_blank')
}
</script>
<template>
    <Page :title="pageTitle" :description="pageDescription" alignCenter>
        <Block class="w-4xl p-4">
            <div class="w-full mx-auto space-y-6">
                <template v-if="!submitted">
                    <StepperLayout :step="step" :steps="steps" :value="value" :step-components="stepComponents"
                        @next="goToNext" @previous="goToPrevious" />
                </template>
                <template v-else>
                    <Success @restart="restartForm" @visit-site="navigateToWebsite" />
                </template>
            </div>
        </Block>
    </Page>
</template>