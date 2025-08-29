// /data/reviewForm.ts
import type { CheckboxGroupItem, TimelineItem } from '@nuxt/ui'

export const departments: CheckboxGroupItem[] = [
  'College of Engineering',
  'College of Computer Studies',
  'College of Agriculture',
  'College of Science',
  'College of Liberal Arts',
  'College of Business',
  'Graduate School'
]

export const coordinators = [
  'Dr. Hiroshi Tanaka',
  'Prof. Maria Santos',
  'Engr. Juan Dela Cruz'
]

export const actions = [
  { label: 'Approve', value: 'approve' },
  { label: 'Reject', value: 'reject' },
  { label: 'Mark as under review', value: 'review' }
]

export const uiFormFieldConfig = {
  wrapper: 'space-y-1',
  label: 'font-semibold text-highlighted',
  container: 'mt-2'
}

export const timelineItems: TimelineItem[] = [
  {
    date: 'Jan 15, 2023',
    title: 'Proposal Submitted',
    description: 'Initial proposal submission with all required documents',
    author: 'Dr. Sarah Johnson'
  },
  {
    date: 'Jan 20, 2023',
    title: 'Reviewed by Committee',
    description: 'Proposal reviewed and awaiting feedback',
    author: 'system',
    authorColor: 'warning'
  }
]

export const typeDetails = [
    { label: 'Research Partnership', value: 'research' },
    { label: 'Consulting Agreement', value: 'consulting' },
    { label: 'Joint Venture', value: 'joint-venture' }
]