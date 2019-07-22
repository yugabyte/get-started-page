<template>
  <div class="install-container">
    <div class="download-section">
      <yb-header type="yb-logo" text="Yugabyte DB"></yb-header>
      <q-tabs
        v-model="databaseTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="Helm" label="Helm" class="option-tabs"/>
        <q-tab name="YAML" label="YAML" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a v-if="databaseTab === 'YAML'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#kubernetes">Quick-Start Guide</a>
          <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/kubernetes/helm-chart/">Quick-Start Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Helm" class="bg-grey-3">
          <pre class="code-container">
            <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="copyToClipboard(dbHelmLines.join('\n'))"/>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbHelmLines" v-bind:key="`kubernetes-helm-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="YAML" class="bg-grey-3">
          <pre class="code-container">
            <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="copyToClipboard(dbYamlLines.join('\n'))"/>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbYamlLines" v-bind:key="`kubernetes-yaml-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a v-if="databaseTab === 'YAML'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#kubernetes">Quick-Start Guide</a>
        <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/kubernetes/helm-chart/">Quick-Start Guide</a>
      </div>
    </div>
    <div class="download-section">
      <yb-header type="yb-shell" text="Yugabyte Shell"></yb-header>
      <q-tabs
        v-model="shellTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Quick-Start Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="Helm" class="bg-grey-3">
          <pre class="code-container">
            <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="copyToClipboard(shellBashLines.slice(1).join('\n'))"/>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`kubernetes-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="YAML" class="bg-grey-3">
          <pre class="code-container">
            <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="copyToClipboard(shellBashLines.slice(1).join('\n'))"/>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`kubernetes-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Quick-Start Guide</a>
      </div>
    </div>
  </div>
</template>

<script>
import { helm, yaml } from './snippets/kubernetesDbBash'
import shellCode from './snippets/kubernetesShellBash'
import YBHeader from './YBHeader'

import { copyToClipboard } from './helpers'

export default {
  name: 'KubernetesInstall',
  data: function () {
    return {
      databaseTab: 'Helm',
      shellTab: 'Helm',
      dbHelmLines: helm.trim().split('\n'),
      dbYamlLines: yaml.trim().split('\n'),
      shellBashLines: shellCode.trim().split('\n')
    }
  },
  components: {
    'yb-header': YBHeader
  },
  methods: {
    copyToClipboard: copyToClipboard
  }
}
</script>
