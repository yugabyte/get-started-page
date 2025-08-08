<template>
  <div class="migrate-container">
    <div class="rhel-section">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="rhel8" label="RHEL 8" />
        <q-tab name="rhel9" label="RHEL 9" />
        <q-space />
        <div class="quickstart-container">
          <a class="complete-docs" href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager" title="Complete Docs" target="_blank" rel="noopener">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="rhel8" class="bg-form">
          <rhel8 />
        </q-tab-panel>
        <q-tab-panel name="rhel9" class="bg-form">
          <rhel9 />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Rhel8Migrate from './migrate/rhel/Rhel8.vue';
import Rhel9Migrate from './migrate/rhel/Rhel9.vue';

export default {
  name: 'RhelMigrate.vue',
  components: {
    'rhel8': Rhel8Migrate,
    'rhel9': Rhel9Migrate,
  },
  setup () {
    return {
      tab: ref('rhel8')
    }
  }
};
</script>

<style>
.migrate-container {
  text-align: left;
}
.rhel-section {
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
.docs-container .complete-docs-link {
  color: #322965;
  width: 150px;
  text-decoration: none;
}
.docs-container .complete-docs-link::after {
  content: '\203a';
  font-size: 20px;
  margin-left: 4px;
}
</style>
