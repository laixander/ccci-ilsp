export interface PageProps {
    title?: string
    description?: string
    alignCenter?: boolean
}

export interface BlockProps {
    title?: string
    description?: string
    showDivider?: boolean        // Optional: shows divider if true
    noBodyPadding?: boolean      // Optional: removes body padding if true
    icon?: string
}

export interface StepperLayoutProps {
    step: number
    steps: string[]
    value: number
    stepComponents: any[] // You can replace `any` with a more specific type if needed
}

export interface StatCardProps {
    label: string
    count: number
    color: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary' | 'purple' | 'orange'
    icon: string
    hasDetails?: boolean
    trendValue?: string           // e.g. "2%" or "-4%"
    trendDescription?: string     // optional sublabel
    useGradient?: boolean         // grdiet option
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

export interface BoardProps {
    title: string
    badgeLabel?: string | number
    badgeColor?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary' | 'orange' | 'purple'
}

export type ProposalCardSource = 'external' | 'internal'
export type ProposalCardPriority = 'high' | 'medium' | 'low'
export interface ProposalCardProps {
    boardColor?: string
    title: string
    institution: string
    contact: string
    description: string
    source: ProposalCardSource
    priority: ProposalCardPriority
    timeSubmitted: string
}

export type ProposalCardType = {
    title: string
    institution: string
    contact: string
    description: string
    source: 'external' | 'internal'
    priority: 'high' | 'medium' | 'low'
    timeSubmitted: string
}

export type ProposalBoardType = {
    title: string
    badgeLabel: number
    badgeColor: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'secondary' | 'orange' | 'purple'
    cards: ProposalCardType[]
}

export interface ListIconProps {
  icon?: string
  label: string
  withContainer?: boolean
  iconColor?: string
}

export interface ListProfileProps {
    profilePhoto?: string
    profileName?: string
    profileDescription?: string
}