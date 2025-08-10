import type { ActivityItemProps } from '~/types/models'
export const activityItems: ActivityItemProps[] = [
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



import type { DeadlineItemProps } from '~/types/models'
export const deadlineItems: DeadlineItemProps[] = [
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