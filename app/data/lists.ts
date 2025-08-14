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

import type { ListIconProps } from '~/types/models'
export const contactDetails: ListIconProps[] = [
    { icon: 'i-lucide-building', label: 'MIT Technology Institute' },
    { icon: 'i-lucide-mail', label: 'hiroshi.tanaka@mit.edu' },
    { icon: 'i-lucide-phone', label: '+1-617-253-1000' },
    { icon: 'i-lucide-calendar', label: 'Submitted: 2025-01-25' }
]
export const objectives: ListIconProps[] = [
    { label: 'Develop AI-powered crop monitoring systems' },
    { label: 'Create predictive models for agricultural yield optimization' },
    { label: 'Implement smart irrigation and fertilization systems' },
    { label: 'Establish joint research publications and patents' },
    { label: 'Train graduate students through exchange programs' }
]
export const scopes: ListIconProps[] = [
    { label: 'Joint research papers in top-tier journals' },
    { label: 'Prototype AI agricultural monitoring system' },
    { label: 'Patent applications for innovative technologies' },
    { label: 'Capacity building for CBSUA faculty and students' },
    { label: 'Technology transfer to local farming communities' }
]