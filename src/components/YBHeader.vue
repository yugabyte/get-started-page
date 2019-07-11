<template>
  <h3>
    <img v-if="type === 'yb-logo'" src="../assets/ybsymbol_original.png" :alt="text" />
    <img v-else src="../assets/yb-cli.png" :alt="text" />
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

<style>
h3 {
  font-size: 19px;
  text-transform: uppercase;
  color: #f75821;
  margin: 0 0 10px;
  line-height: 1.2;
  font-weight: 700;
}

h3 img {
  max-width: 40px;
  max-height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}
</style>
