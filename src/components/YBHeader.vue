<template>
  <h3>
    <img v-if="type === 'yb-logo'" src="../assets/yb-server.png" :alt="text" />
    <img v-else src="../assets/yb-cli.png" :alt="text" />
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: 'YBHeader.vue',
  props: {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
