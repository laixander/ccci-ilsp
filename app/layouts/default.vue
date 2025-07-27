<template>
    <div class="fixed inset-0 flex overflow-hidden">
        <!-- collapsed: add class w-auto -->
        <div class="relative hidden lg:flex flex-col min-h-svh shrink-0 border-r border-default bg-elevated/25" :class="collapsed ? 'min-w-16 w-auto' : 'min-w-60'">
            <Sidebar
                :collapsed="collapsed"
                :items="links"
            />
        </div>
        <!-- <USeparator orientation="vertical" /> -->

        <div class="relative flex flex-col min-w-0 min-h-svh lg:not-last:border-r lg:not-last:border-default flex-1">
            <Header
                :collapsed="collapsed"
                :items="links"
                :title="pageTitle"
                @toggleSidebar="toggleSidebar"
            />
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/core/Header.vue'
import Sidebar from '~/components/core/Sidebar.vue'
import { navigationLinks } from '~/data'
const links = navigationLinks

const pageTitle = ref()

// const links = [
//     [
//         {
//             label: 'Guide',
//             icon: 'i-lucide-book-open',
//             children: [
//                 {
//                     label: 'Introduction',
//                     icon: 'i-lucide-house'
//                 },
//                 {
//                     label: 'Installation',
//                     icon: 'i-lucide-cloud-download'
//                 },
//                 {
//                     label: 'Icons',
//                     icon: 'i-lucide-smile'
//                 },
//                 {
//                     label: 'Colors',
//                     icon: 'i-lucide-swatch-book'
//                 },
//                 {
//                     label: 'Theme',
//                     icon: 'i-lucide-cog'
//                 }
//             ]
//         },
//         {
//             label: 'Composables',
//             icon: 'i-lucide-database',
//             children: [
//                 {
//                     label: 'defineShortcuts',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'useOverlay',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'useToast',
//                     icon: 'i-lucide-file-text'
//                 }
//             ]
//         },
//         {
//             label: 'Components',
//             icon: 'i-lucide-box',
//             children: [
//                 {
//                     label: 'Link',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'Modal',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'NavigationMenu',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'Pagination',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'Popover',
//                     icon: 'i-lucide-file-text'
//                 },
//                 {
//                     label: 'Progress',
//                     icon: 'i-lucide-file-text'
//                 }
//             ]
//         }
//     ],
//     [
//         {
//             label: 'Feedback',
//             icon: 'i-lucide-message-square',
//             target: '_blank'
//         },
//         {
//             label: 'Help & Support',
//             icon: 'i-lucide-info',
//             target: '_blank'
//         }
//     ]
// ] satisfies NavigationMenuItem[][]

// Handle sidebar collapsed
const collapsed = ref(false)

const toggleSidebar = () => {
    collapsed.value = !collapsed.value
}
</script>