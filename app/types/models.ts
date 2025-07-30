export interface PageProps {
    title?: string
    description?: string
}

export interface BlockProps {
  title?: string
  description?: string
  showDivider?: boolean        // Optional: shows divider if true
  noBodyPadding?: boolean      // Optional: removes body padding if true
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

export interface ActivityItemProps {
    title: string
    university: string
    department: string
    timeAgo: string
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface DeadlineItemProps {
    title: string
    deadline: string
    status: string
    statusColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
    statusVariant?: 'solid' | 'soft' | 'outline' | 'subtle'
}

export interface PartnerItemProps {
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

export interface StatSmCardProps {
  label: string
  count: number
  color: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary'
  icon: string
}