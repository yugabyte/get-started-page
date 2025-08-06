<template>
  <div class="migrate-container">
    <div class="rhel-section">
      <q-tabs
        v-model="databaseTab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab
          name="RHEL 8"
          class="option-tabs"
          v-on:click="sendAnalytics('rhel8')"
        >
          RHEL 8
        </q-tab>
        <q-tab
          name="RHEL 9"
          class="option-tabs"
          v-on:click="sendAnalytics('rhel9')"
        >
          RHEL 9
        </q-tab>
        <q-space />
        <div class="quickstart-container">
          <a
            v-if="databaseTab === 'RHEL 8'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            >Complete Docs</a
          >
          <a
            v-else-if="databaseTab === 'RHEL 9'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="RHEL 8" class="bg-form">
          <rhel8-migrate code="azurerm" providerName="Azure"></rhel8-migrate>
        </q-tab-panel>
        <q-tab-panel name="RHEL 9" class="bg-form">
          <rhel9-migrate code="azurerm" providerName="Azure"></rhel9-migrate>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          v-if="databaseTab === 'RHEL 8'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/yugabyte-voyager/install-yb-voyager/#install-yb-voyager"
          >Complete Docs</a
        >
        <a
          v-else-if="databaseTab === 'RHEL 9'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/yugabyte-voyager/install-yb-voyager/#install-yb-voyager"
          >Complete Docs</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { event } from 'vue-gtag';
import Rhel8Migrate from './Rhel8Migrate.vue';
import Rhel9Migrate from './Rhel9Migrate.vue';

export default {
  name: 'RhelMigrate',
  data: function () {
    return {
      databaseTab: 'RHEL 8',
    };
  },
  components: {
    'rhel8-migrate': Rhel8Migrate,
    'rhel9-migrate': Rhel9Migrate,
  },
  props: ['version'],
  methods: {
    sendAnalytics: function (service) {
      event('click', {
        event_category: 'Migrate Page',
        value: `click.azure.${service}`,
        event_label: `User clicked RHEL ${service} section button`,
      });
    },
  },
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
