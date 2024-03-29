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
        <q-tab
          name="YugabyteDB Operator"
          class="option-tabs k8s-op-tab"
          v-on:click="sendAnalytics('yb-k8s-operator')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/yugabyte-logo-dark.png"
          />
          Yugabyte Kubernetes Operator
        </q-tab>
        <q-tab
          name="Operator Hub"
          class="option-tabs k8s-op-tab"
          v-on:click="sendAnalytics('operator-hub')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/openshift-logo.png"
          />
          Operator Hub
        </q-tab>
        <q-space />
        <div class="quickstart-container">
          <a
            v-if="databaseTab === 'YugabyteDB Operator'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/kubernetes/single-zone/oss/yugabyte-operator/"
            >Complete Docs</a
          >
          <a
            v-else
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/kubernetes/single-zone/oss/operator-hub/"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="YugabyteDB Operator" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="dbK8sOperator"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbK8sOperator" v-bind:key="`k8s-op-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>

        <q-tab-panel name="Operator Hub" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="opHubLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in opHubLines" v-bind:key="`k8s-op-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          v-if="databaseTab === 'YugabyteDB Operator'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/kubernetes/single-zone/oss/yugabyte-operator/"
          >Complete Docs</a
        >
        <a
          v-else
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/kubernetes/single-zone/oss/operator-hub/"
          >Complete Docs</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { event } from 'vue-gtag';
import YBHeader from './YBHeader.vue';
import { k8sOpServerCode, opHubServerCode } from './snippets/k8sOperatorDeploy';

import CopyButton from './CopyButton.vue';

export default {
  name: 'KubernetesOperator',
  data: function () {
    return {
      databaseTab: 'YugabyteDB Operator',
    };
  },
  computed: {
    dbK8sOperator: function () {
      return k8sOpServerCode(this.version.appVersion).trim().split('\n');
    },
    opHubLines: function () {
      return opHubServerCode(this.version.appVersion).trim().split('\n');
    },
  },
  props: ['version'],
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton,
  },
  methods: {
    sendAnalytics: function (service) {
      event('click', {
        event_category: 'Install-Page',
        value: `click.k8s-operator.${service}`,
        event_label: `User clicked K8s Operator ${service} section button`,
      });
    },
  },
};
</script>
