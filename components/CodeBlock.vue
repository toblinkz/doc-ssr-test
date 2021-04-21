<template>
  <div class="code-block relative" :class="[active && 'active']">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.code-block {
  display: none;
}
.code-block.active {
  display: block;
}
</style>
