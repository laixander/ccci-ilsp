export interface PageProps {
    title?: string
    description?: string
}

export interface BlockProps {
    title?: string
    description?: string
}

export interface StatCardProps {
    icon: string
    iconColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    iconVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
    title: string
    value: string | number
    trendIcon?: 'i-lucide-trending-up' | 'i-lucide-trending-down'
    trendValue?: string
    trendColor?: 'success' | 'error'
    trendDescription?: string
    description?: string
}

export interface ActivityCardProps {
    title: string
    university: string
    department: string
    timeAgo: string
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface DeadlineCardProps {
    title: string
    deadline: string
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface PartnerListProps {
  name: string
  icon?: string
  sector: string
  country: string
  contactPerson: string
  activeMous: number
  completed: number
  ongoing: number
  status: string
  statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
  statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}
