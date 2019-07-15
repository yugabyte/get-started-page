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
        <q-tab name="x64" label="X64" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#linux">Quick-Start Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="() => copyToClipboard(dbBashLines.join('\n'))"/>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbBashLines" v-bind:key="`linux-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#linux">Quick-Start Guide</a>
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
        <q-tab name="x64" label="X64" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Quick-Start Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="() => copyToClipboard(shellBashLines.join('\n'))"/>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`linux-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Quick-Start Guide</a>
        </div>
    </div>
  </div>
</template>

<script>
import dbCode from './snippets/linuxDbBash'
import shellCode from './snippets/linuxShellBash'
import YBHeader from './YBHeader'
import { copyToClipboard } from './helpers'

export default {
  name: 'LinuxInstall',
  data: function () {
    return {
      databaseTab: 'x64',
      shellTab: 'x64',
      dbBashLines: dbCode.trim().split('\n'),
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
