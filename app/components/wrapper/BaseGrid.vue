<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cols: { type: [Number, String], default: 1 },
  sm: { type: [Number, String], default: null },
  md: { type: [Number, String], default: null },
  lg: { type: [Number, String], default: null },
  xl: { type: [Number, String], default: null },
  xxl: { type: [Number, String], default: null },

  gap: { type: [Number, String], default: 4 },
  gapX: { type: [Number, String], default: null },
  gapY: { type: [Number, String], default: null },
})

const computedClass = computed(() => {
  const classes = ['grid']

  // Base columns
  if (props.cols) classes.push(`grid-cols-${props.cols}`)
  if (props.sm) classes.push(`sm:grid-cols-${props.sm}`)
  if (props.md) classes.push(`md:grid-cols-${props.md}`)
  if (props.lg) classes.push(`lg:grid-cols-${props.lg}`)
  if (props.xl) classes.push(`xl:grid-cols-${props.xl}`)
  if (props.xxl) classes.push(`2xl:grid-cols-${props.xxl}`)

  // Gap handling
  if (props.gapX || props.gapY) {
    if (props.gapX) classes.push(`gap-x-${props.gapX}`)
    if (props.gapY) classes.push(`gap-y-${props.gapY}`)
  } else {
    classes.push(`gap-${props.gap}`)
  }

  return classes.join(' ')
})
</script>
