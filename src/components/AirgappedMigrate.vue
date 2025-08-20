<template>
  <div class="migrate-container">
    <div class="airgapped-section">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="docker" label="Docker" />
        <q-tab name="yum" label="Yum" />
        <q-tab name="ubuntu" label="Ubuntu" />
        <q-space />
        <div class="docs-container">
          <a
            class="complete-docs"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            title="Complete Docs"
            target="_blank"
            rel="noopener"
            >Complete Docs</a
          >
        </div>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="docker" class="bg-form">
          <docker />
        </q-tab-panel>

        <q-tab-panel name="yum" class="bg-form">
          <yum />
        </q-tab-panel>

        <q-tab-panel name="ubuntu" class="bg-form">
          <ubuntu />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import docker from './migrate/airgapped/docker.vue';
import ubuntu from './migrate/airgapped/ubuntu.vue';
import yum from './migrate/airgapped/yum.vue';

export default {
  name: 'AirgappedMigrate',
  components: {
    docker: docker,
    ubuntu: ubuntu,
    yum: yum,
  },
  setup() {
    return {
      tab: ref('docker'),
    };
  },
};
</script>

<style>
.q-panel > div {
  max-width: 100%;
}
.migrate-container {
  text-align: left;
}
.airgapped-section {
  margin-bottom: 80px;
  position: relative;
}
.pre-helper {
  color: #3e3e3e;
  position: relative;
  display: block;
  line-height: 1.5;
  font-size: 16px;
}
.pre-helper:before {
  position: absolute;
  left: 0;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@media (max-width: 767px) {
  .migrate-container ol,
  .migrate-container ul {
    padding-left: 10px;
  }
}
ul {
  list-style: disc;
}
ol li,
ul li {
  margin: 0 0 10px 0;
}
.code-relative.q-tab-panel {
  margin-bottom: 20px;
}
.code-relative.q-tab-panel {
  max-width: 100%;
  width: 100%;
}
p a {
  color: #f7601d;
}
.docs-container {
  margin-right: 15px;
}
</style>
