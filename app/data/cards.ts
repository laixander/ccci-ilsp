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

import type { ActivityCardProps } from '~/types/models'
export const activityCards: ActivityCardProps[] = [
    {
        title: 'Student Exchange Program with Tokyo University',
        university: 'Tokyo University',
        department: 'Engineering',
        timeAgo: '2 hours ago',
        status: 'ongoing',
        statusColor: 'secondary',
        statusVariant: 'soft',
    },
    {
        title: 'Joint Research Initiative with MIT',
        university: 'MIT',
        department: 'Computer Science',
        timeAgo: '1 day ago',
        status: 'ongoing',
        statusColor: 'secondary',
        statusVariant: 'soft',
    },
    {
        title: 'Internship Program - UC Berkeley',
        university: 'UC Berkeley',
        department: 'Business',
        timeAgo: '3 days ago',
        status: 'completed',
        statusColor: 'success',
        statusVariant: 'soft',
    },
    {
        title: 'Collaborative Workshop: NUS x UP',
        university: 'National University of Singapore',
        department: 'Environmental Science',
        timeAgo: '5 hours ago',
        status: 'upcoming',
        statusColor: 'warning',
        statusVariant: 'soft',
    },
]

import type { DeadlineCardProps } from '~/types/models'
export const deadlineCards: DeadlineCardProps[] = [
    {
        title: 'MOU Renewal - MIT Partnership',
        deadline: '2026-08-15',
        status: 'high',
        statusColor: 'error',
        statusVariant: 'soft',
    },
    {
        title: 'Activity Report Submission',
        deadline: '2026-08-20',
        status: 'medium',
        statusColor: 'warning',
        statusVariant: 'soft',
    },
    {
        title: 'Partner Review Meeting',
        deadline: '2026-08-25',
        status: 'low',
        statusColor: 'success',
        statusVariant: 'soft',
    },
    {
        title: 'Grant Application Deadline - Phase II',
        deadline: '2026-08-30',
        status: 'high',
        statusColor: 'error',
        statusVariant: 'soft',
    }
]