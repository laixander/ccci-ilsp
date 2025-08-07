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