<template>
  <h3>
    <img v-if="type === 'yb-logo'" src="../assets/ybsymbol-original.jpg" :alt="text" />
    <img v-else src="../assets/yb-cli.jpg" :alt="text" />
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: 'YBHeader',
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
