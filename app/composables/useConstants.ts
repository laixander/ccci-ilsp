export type ConstantFeatureItem = {
    icon: string
    iconBackground: string
    iconColor: string
    title: string
    description: string
}

export const useConstantFeatures = (): ConstantFeatureItem[] =>([
    {
        icon: 'i-mage-users',
        iconBackground: '#DBEAFE',
        iconColor: '#3B82F6',
        title: 'Partner Management',
        description: `Comprehensive database of institutional partners with detailed profiles, contact management, and collaboration history tracking.`
    },
    {
        icon: 'i-lucide-file-text',
        iconBackground: '#FEF3C7',
        iconColor: '#F59E0B',
        title: 'MOU Repository',
        description: `Generate, store, and manage Memorandums of Understanding with automated expiration tracking and renewal notifications.`
    },
    {
        icon: 'i-mynaui-activity-square',
        iconBackground: '#D1FAE5',
        iconColor: '#10B981',
        title: 'Activity Monitoring',
        description: `Track collaborative projects, exchange programs, and research initiatives with progress monitoring and outcome evaluation.`
    },
    {
        icon: 'i-material-symbols-pie-chart-outline',
        iconBackground: '#FCE7F3',
        iconColor: '#EC4899',
        title: 'Analytics & Reports',
        description: `Generate comprehensive reports on partnership performance, activity outcomes, and strategic insights for decision-making.`
    },
    {
        icon: 'i-material-symbols-shield-outline',
        iconBackground: '#EDE9FE',
        iconColor: '#8B5CF6',
        title: 'Role-Based Access',
        description: `Secure, role-based access control for ILSP staff, coordinators, administrators, and external partners.`
    },
    {
        icon: 'i-hugeicons-zap',
        iconBackground: '#FFEDD5',
        iconColor: '#F97316',
        title: 'Workflow Automation',
        description: `Streamlined approval processes, automated notifications, and workflow management for efficient operations.`
    },

])
