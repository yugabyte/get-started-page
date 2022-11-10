<template>
  <a
    :class="active ? 'download-nav-btn active' : 'download-nav-btn'"
    v-on:click="handleButtonClick"
  >
    <slot></slot>
    <span>{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'YBButton',
  props: {
    label: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    handleClick: {
      type: Function,
    },
  },
  methods: {
    handleButtonClick: function () {
      if (this.handleClick) {
        this.handleClick();
      }
    },
  },
};
</script>

<style scoped>
a.download-nav-btn {
  cursor: pointer;
  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  flex: 1 1 0;
  color: #727272;
  border: 1px solid #e2e2e2;
  border-radius: 0.3em;
  font-size: 17px;
  margin: 0 1.5em;
  -webkit-transition: color 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
  transition: color 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
  transition: color 0.3s, box-shadow 0.3s, border-color 0.3s;
  transition: color 0.3s, box-shadow 0.3s, border-color 0.3s,
    -webkit-box-shadow 0.3s;
  padding: 25px 0;
  min-width: 130px;
  background-color: #fff;
}
a.download-nav-btn:hover {
  background-color: #e7e7e7;
}
a.download-nav-btn.active {
  color: #2d2d2d;
  border: 1px solid #f75721;
}
.download-nav-btn img {
  max-height: 30px;
  max-width: 30px;
  opacity: 0.35;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.download-nav-btn.active img {
  opacity: 1;
}
.download-nav-btn span {
  display: block;
}
</style>
