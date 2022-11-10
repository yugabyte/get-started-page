<template>
  <q-btn
    :class="copyClicked ? 'copy-code-btn active' : 'copy-code-btn'"
    flat
    :label="copyClicked ? null : 'Copy'"
    :icon="copyClicked ? 'check' : undefined"
    @click="copyText(text)"
  />
</template>

<script>
import { copyToClipboard } from './helpers';

export default {
  name: 'CopyButton.vue',
  data: function () {
    return {
      copyClicked: false,
    };
  },
  props: ['text'],

  methods: {
    copyText: function (str) {
      this.copyClicked = true;
      copyToClipboard(typeof str === 'string' ? str : str.join('\n'));
      setTimeout(() => {
        this.copyClicked = false;
      }, 1500);
    },
  },
};
</script>

<style>
.copy-code-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 100;
  visibility: visible;
  background-color: #fff;
  color: #f75821;
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  width: 72px;
}

.copy-code-btn:hover {
  color: white;
  background-color: #f75821;
}

.copy-code-btn.active {
  color: white;
  background-color: #48ab52;
}

.copy-code-btn.active i {
  margin-left: auto;
  margin-right: auto;
}
</style>
