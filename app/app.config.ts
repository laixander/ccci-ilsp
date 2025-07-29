export default defineAppConfig({
    ui: {
        colors: {
            primary: 'green',
            neutral: 'zinc'
        },
        card: {
            slots: {
                root: 'shadow-sm hover:shadow-lg transition-shadow',
                header: 'p-3 sm:p-4',
                body: 'p-3 sm:p-4',
                footer: 'p-3 sm:p-4'
            }
        },
        badge: {
            slots: {
                base: '!rounded-full',
            },
        }
    }
})