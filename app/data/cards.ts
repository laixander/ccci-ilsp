import type { StatCardProps } from '~/types/models'

export const statDashboardCards: StatCardProps[] = [
    {
        icon: 'i-lucide-users',
        color: 'success',
        label: 'Total Partners',
        count: 156,
        trendValue: '+12%',
        trendDescription: 'Active institutional partnerships',
    },
    {
        icon: 'i-lucide-file-text',
        color: 'secondary',
        label: 'Active MOUs',
        count: 89,
        trendValue: '+5%',
        trendDescription: 'Currently valid agreements',
    },
    {
        icon: 'i-lucide-folder-open',
        color: 'warning',
        label: 'Ongoing Activities',
        count: 34,
        trendValue: '-8%',
        trendDescription: 'Projects in progress',
    },
    {
        icon: 'i-lucide-info',
        color: 'error',
        label: 'Expiring Soon',
        count: 7,
        trendValue: '-2%',
        trendDescription: 'MOUs expiring in 60 days',
    },
]

export const statProposalCards: StatCardProps[] = [
    {
        label: 'Pending Review',
        count: 3,
        color: 'secondary',
        icon: 'i-lucide-inbox'
    },
    {
        label: 'Under Review',
        count: 2,
        color: 'warning',
        icon: 'i-lucide-scan-text'
    },
    {
        label: 'Approved',
        count: 2,
        color: 'success',
        icon: 'i-lucide-thumbs-up'
    },
    {
        label: 'Need Revision',
        count: 1,
        color: 'error',
        icon: 'i-lucide-circle-alert'
    }
]

export const statWorkflowCards: StatCardProps[] = [
    {
        label: 'Drafting',
        count: 3,
        color: 'secondary',
        icon: 'i-lucide-file-pen'
    },
    {
        label: 'Internal Review',
        count: 2,
        color: 'warning',
        icon: 'i-lucide-file-search'
    },
    {
        label: 'Partner Review',
        count: 2,
        color: 'pink',
        icon: 'i-lucide-file-user'
    },
    {
        label: 'Legal Review',
        count: 1,
        color: 'info',
        icon: 'i-lucide-file-badge'
    },
    {
        label: 'Final Approval',
        count: 1,
        color: 'success',
        icon: 'i-lucide-circle-check-big'
    }
]

import type { ProposalBoardType } from '~/types/models'
export const proposals: ProposalBoardType[] = [
  {
    title: 'Pending',
    badgeLabel: 3,
    badgeColor: 'secondary',
    cards: [
      {
        title: 'AI Research Collaboration Initiative',
        institution: 'MIT Technology Institute',
        contact: 'Dr. Sarah Johnson',
        description:
          'Exploring collaborative AI projects focused on natural language processing and robotics applications.',
        source: 'external',
        priority: 'high',
        timeSubmitted: '2025-02-01, 10:15 AM'
      },
      {
        title: 'Renewable Energy Solutions Pitch',
        institution: 'Green Future Corp.',
        contact: 'Alex Tan',
        description:
          'Proposal for a joint project on large-scale solar energy farms targeting rural electrification.',
        source: 'internal',
        priority: 'medium',
        timeSubmitted: '2025-02-02, 09:42 AM'
      },
      {
        title: 'Smart City Infrastructure Plan',
        institution: 'UrbanTech Alliance',
        contact: 'Maria Gomez',
        description:
          'Developing IoT-based traffic and public safety systems for mid-sized urban areas.',
        source: 'external',
        priority: 'low',
        timeSubmitted: '2025-02-03, 04:27 PM'
      }
    ]
  },
  {
    title: 'Under Review',
    badgeLabel: 2,
    badgeColor: 'warning',
    cards: [
      {
        title: 'Marine Conservation Research',
        institution: 'Oceanic Institute',
        contact: 'Prof. Liam Chen',
        description:
          'Long-term biodiversity monitoring of coral reefs using underwater drone technology.',
        source: 'external',
        priority: 'high',
        timeSubmitted: '2025-01-29, 02:00 PM'
      },
      {
        title: 'Blockchain for Supply Chain',
        institution: 'TechSphere Ltd.',
        contact: 'Olivia Reyes',
        description:
          'Implementing blockchain to improve transparency and traceability in global supply chains.',
        source: 'internal',
        priority: 'medium',
        timeSubmitted: '2025-02-01, 05:18 PM'
      }
    ]
  },
  {
    title: 'Approved',
    badgeLabel: 2,
    badgeColor: 'success',
    cards: [
      {
        title: 'Autonomous Delivery Drones',
        institution: 'SkyPath Logistics',
        contact: 'Daniel Park',
        description:
          'Pilot program for autonomous drone delivery service in suburban neighborhoods.',
        source: 'internal',
        priority: 'medium',
        timeSubmitted: '2025-01-20, 08:45 AM'
      },
      {
        title: 'Telemedicine Expansion Program',
        institution: 'HealthNet Global',
        contact: 'Dr. Priya Menon',
        description:
          'Scaling telemedicine access to remote communities with low-bandwidth technology.',
        source: 'external',
        priority: 'high',
        timeSubmitted: '2025-01-22, 11:10 AM'
      }
    ]
  },
  {
    title: 'Need Revision',
    badgeLabel: 1,
    badgeColor: 'error',
    cards: [
      {
        title: 'Waste-to-Energy Facility Plan',
        institution: 'EcoGen Industries',
        contact: 'Christopher Lee',
        description:
          'Feasibility study for converting municipal waste into clean energy using plasma gasification.',
        source: 'external',
        priority: 'high',
        timeSubmitted: '2025-01-28, 09:55 AM'
      }
    ]
  }
]

import type { WorkflowBoardType } from '~/types/models'
export const workflows: WorkflowBoardType[] = [
  {
    title: 'Drafting',
    badgeLabel: 3,
    badgeColor: 'secondary',
    cards: [
      {
        title: 'AI Research Collaboration Initiative',
        institution: 'MIT Technology Institute',
        contact: 'Dr. Sarah Johnson',
        priority: 'high',
        dueDate: 'Feb 10',
        alert: 'Next: Awaiting department approval',
        timeSubmitted: '2025-02-01, 10:15 AM'
      },
      {
        title: 'Renewable Energy Solutions Pitch',
        institution: 'Green Future Corp.',
        contact: 'Alex Tan',
        priority: 'medium',
        dueDate: 'Feb 10',
        alert: 'Next: Awaiting department approval',
        timeSubmitted: '2025-02-02, 09:42 AM'
      },
      {
        title: 'Smart City Infrastructure Plan',
        institution: 'UrbanTech Alliance',
        contact: 'Maria Gomez',
        priority: 'low',
        dueDate: 'Feb 10',
        alert: 'Next: Awaiting department approval',
        timeSubmitted: '2025-02-03, 04:27 PM'
      }
    ]
  },
  {
    title: 'Under Review',
    badgeLabel: 2,
    badgeColor: 'warning',
    cards: [
      {
        title: 'Marine Conservation Research',
        institution: 'Oceanic Institute',
        contact: 'Prof. Liam Chen',
        progress: 25,
        reviewer: 'Internal',
        priority: 'high',
        dueDate: 'Feb 10',
        alert: 'Next: Awaiting department approval',
        timeSubmitted: '2025-01-29, 02:00 PM'
      },
      {
        title: 'Blockchain for Supply Chain',
        institution: 'TechSphere Ltd.',
        contact: 'Olivia Reyes',
        progress: 50,
        reviewer: 'Partner',
        priority: 'medium',
        dueDate: 'Feb 10',
        alert: 'Next: Awaiting department approval',
        timeSubmitted: '2025-02-01, 05:18 PM'
      }
    ]
  },
  {
    title: 'Final Approval',
    badgeLabel: 2,
    badgeColor: 'success',
    cards: [
      {
        title: 'Waste-to-Energy Facility Plan',
        institution: 'EcoGen Industries',
        contact: 'Christopher Lee',
        priority: 'high',
        dueDate: 'Feb 10',
        alert: 'Next: Awaiting department approval',
        timeSubmitted: '2025-01-28, 09:55 AM'
      }
    ]
  }
]



export const partners = [
    {
        id: 1,
        icon: 'i-lucide-building',
        title: 'Tokyo Institute of Technology',
        subtitle: 'Japan',
        description: 'Tokyo Institute of Technology, a leading technological university in Japan...',
        tags: ['Research', 'Environment', 'Partnership'],
        highlights: { mous: 3, projects: 8 }
    },
    {
        id: 2,
        icon: 'i-lucide-university',
        title: 'Kyoto University',
        subtitle: 'Japan',
        description: 'Kyoto University is famous for its research excellence...',
        tags: ['Education', 'Innovation'],
        highlights: { mous: 5, projects: 10 }
    },
    // ...add more
]