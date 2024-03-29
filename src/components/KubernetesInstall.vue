<template>
  <div class="install-container">
    <div class="download-section">
      <yb-header type="yb-logo" text="DB Server"></yb-header>
      <q-tabs
        v-model="databaseTab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="Helm" label="Helm 3" class="option-tabs" />
        <q-tab name="YAML" label="YAML" class="option-tabs" />
        <q-space />
        <div class="quickstart-container">
          <a
            v-if="databaseTab === 'YAML'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/quick-start/kubernetes/"
            >Complete Docs</a
          >
          <a
            v-else
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/quick-start/kubernetes/"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Helm" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="dbHelmLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbHelmLines" v-bind:key="`kubernetes-helm-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="YAML" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="dbYamlLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbYamlLines" v-bind:key="`kubernetes-yaml-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          v-if="databaseTab === 'YAML'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/quick-start/kubernetes/"
          >Complete Docs</a
        >
        <a
          v-else
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/kubernetes/helm-chart/"
          >Complete Docs</a
        >
      </div>
    </div>
    <div class="download-section">
      <yb-header type="yb-shell" text="SQL Shell"></yb-header>
      <q-tabs
        v-model="shellTab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-space />
        <div class="quickstart-container">
          <a
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/kubernetes/helm-chart/"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="Helm" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="shellBashLines.slice(1)"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`kubernetes-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/admin/ysqlsh/"
          >Complete Docs</a
        >
      </div>
    </div>
    <div class="download-section">
      <yb-header type="yb-logo" text="Distributed SQL in Action"></yb-header>
      <q-tabs
        v-model="shellTab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-space />
        <div class="quickstart-container">
          <a
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/sample-data/retail-analytics/"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="exploreYSQL" animated>
        <q-tab-panel name="default" class="bg-form">
          <div>
            <h3 class="config-form-header">1. Load Sample Dataset</h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="pgQueries"></copy-button>
                <code class="pre-helper pre-helper--yugabyte" v-for="(line, index) in pgQueries" v-bind:key="`yugabyte-${index}`">{{ line }}</code>
              </pre>
            </div>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="ybDemoQueries"></copy-button>
                <code class="pre-helper pre-helper--yb_demo" v-for="(line, index) in ybDemoQueries" v-bind:key="`yb-demo-${index}`">{{ line }}</code>
              </pre>
            </div>
            <h3 class="config-form-header">2. Run Queries</h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="sampleQueryId"></copy-button>
                <code class="pre-helper pre-helper--yb_demo">{{ sampleQueryId }}</code>
              </pre>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/develop/build-apps/"
          >Complete Docs</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  helmDbServerCode,
  yamlDbServerCode,
  sqlShellCode,
  pgCommands,
  ybDemoCommands,
} from './snippets/kubernetesCode';
import CopyButton from './CopyButton.vue';
import YBHeader from './YBHeader.vue';

export default {
  name: 'KubernetesInstall',
  data: function () {
    return {
      databaseTab: 'Helm',
      shellTab: 'Helm',
      exploreYSQL: 'default',
      shellBashLines: sqlShellCode.trim().split('\n'),
      pgQueries: pgCommands.trim().split('\n'),
      ybDemoQueries: ybDemoCommands.trim().split('\n'),
      sampleQueryId:
        'SELECT users.id, users.name, users.email, orders.id, orders.total FROM orders INNER JOIN users ON orders.user_id=users.id LIMIT 10;',
    };
  },
  computed: {
    dbHelmLines: function () {
      return helmDbServerCode(this.version.appVersion).trim().split('\n');
    },
    dbYamlLines: function () {
      return yamlDbServerCode(this.version.appVersion).trim().split('\n');
    },
  },
  props: ['version'],
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton,
  },
};
</script>
