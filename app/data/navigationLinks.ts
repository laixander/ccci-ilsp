import type { NavigationMenuItem } from '@nuxt/ui'

export const navigationLinks: NavigationMenuItem[] = [
    [
        {
            label: 'MAIN NAVIGATION',
            type: 'label'
        },
        {
            label: 'Dashboard',
            icon: 'i-lucide-pie-chart',
            to: '/'
        },
        {
            label: 'Partners',
            icon: 'i-lucide-users',
            to: '/partners'
        },
        {
            label: 'MOUs',
            icon: 'i-lucide-file-text',
            to: '/mous'
        },
        {
            label: 'Activities',
            icon: 'i-lucide-folder-open',
        },
        {
            label: 'Reports',
            icon: 'i-lucide-chart-column',
        },
        {
            label: 'Notifications',
            icon: 'i-lucide-bell',
        },
        {
            label: 'Settings',
            icon: 'i-lucide-settings',
        }
    ]
]
