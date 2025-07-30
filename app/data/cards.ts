import type { StatCardProps } from '~/types/models'
export const statCards: StatCardProps[] = [
    {
        icon: 'i-lucide-users',
        iconColor: 'success',
        iconVariant: 'soft',
        title: 'Total Partners',
        value: 156,
        trendIcon: 'i-lucide-trending-up',
        trendValue: '+12%',
        trendColor: 'success',
        trendDescription: 'from last month',
        description: 'Active institutional partnerships',
    },
    {
        icon: 'i-lucide-file-text',
        iconColor: 'secondary',
        iconVariant: 'soft',
        title: 'Active MOUs',
        value: 89,
        trendIcon: 'i-lucide-trending-up',
        trendValue: '+5%',
        trendColor: 'success',
        trendDescription: 'from last month',
        description: 'Currently valid agreements',
    },
    {
        icon: 'i-lucide-folder-open',
        iconColor: 'warning',
        iconVariant: 'soft',
        title: 'Ongoing Activities',
        value: 34,
        trendIcon: 'i-lucide-trending-down',
        trendValue: '-8%',
        trendColor: 'error',
        trendDescription: 'from last month',
        description: 'Projects in progress',
    },
    {
        icon: 'i-lucide-info',
        iconColor: 'error',
        iconVariant: 'soft',
        title: 'Expiring Soon',
        value: '7',
        trendIcon: 'i-lucide-trending-down',
        trendValue: '-2%',
        trendColor: 'error',
        trendDescription: 'from last month',
        description: 'MOUs expiring in 60 days',
    },
]

import type { StatSmCardProps } from '~/types/models'
export const statSmCards: StatSmCardProps[] = [
  { label: 'Pending Review', count: 156, color: 'warning', icon: 'i-lucide-inbox' },
  { label: 'Under Review', count: 89, color: 'secondary', icon: 'i-lucide-file-search' },
  { label: 'Approved', count: 34, color: 'success', icon: 'i-lucide-thumbs-up' },
  { label: 'Need Revision', count: 7, color: 'error', icon: 'i-lucide-circle-alert' }
]