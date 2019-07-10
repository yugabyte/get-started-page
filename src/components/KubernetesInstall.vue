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
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/">QuickStart Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="default" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbBashLines" v-bind:key="`linux-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import dbCode from './snippets/kubernetesDbBash'
import YBHeader from './YBHeader'

export default {
  name: 'KubernetesInstall',
  data: function () {
    return {
      databaseTab: 'default',
      dbBashLines: dbCode.trim().split('\n')
    }
  },
  components: {
    'yb-header': YBHeader
  }
}
</script>
