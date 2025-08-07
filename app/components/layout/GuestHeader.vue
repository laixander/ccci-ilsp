<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const toast = useToast()

async function login () {
    toast.add({
        title: 'Success',
        description: `Login successfully!`
    })
    await navigateTo('/', {
        replace: true
    })
}

const items: NavigationMenuItem[] = [
    [
        {
            avatar: {
                src: '',
                size: 'xl'
            },
            label: 'ILSP',
            value: 'Management System',
            isBrand: true,
        }
    ],
    [
        {
            isColorMode: true,
        },
        {
            label: 'Login',
            buttonColor: 'neutral',
            buttonVariant: 'outline',
            to: '/dashboard',
            onSelect: async () => {
                await login()
            }
        },
        {
            label: 'Partner Registration',
            buttonColor: 'primary',
            buttonVariant: 'solid',
            to: '#registration'
        }
    ]
]
</script>
<template>
    <div class="border-b dark:border-gray-800 border-gray-100 shadow-sm">
        <UContainer>
            <UNavigationMenu :items="items">
                <template #item-label="{item}">
                    <div class="text-left" v-if="item.isBrand">
                        <div class="font-bold">
                            {{ item.label }}
                        </div class="text-xs">
                        <div>{{ item.value }}</div>
                    </div>
                    <div v-else-if="item.isColorMode" >
                         <FeatureColorModeButton />
                    </div>
                    <UButton v-else :variant="item.buttonVariant" :color="item.buttonColor">
                        {{ item.label }}
                    </UButton>
                </template>
            </UNavigationMenu>
        </UContainer>
    </div>
</template>
