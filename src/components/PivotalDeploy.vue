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
        <q-tab name="Cloud Foundry" label="Cloud Foundry" icon="img:/statics/pivotal-pcf-logo.svg" class="option-tabs" />
        <!-- <q-tab name="Container Service" label="Container Service" icon="img:/statics/pivotal-pks-logo.svg" class="option-tabs"/> -->
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/pivotal-cloud-foundry/">QuickStart Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Cloud Foundry" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in cfBashLines" v-bind:key="`pivotal-cf-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>

        <!-- <q-tab-panel name="Container Service" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell">wget https://dl.min.io/client/mc/release/darwin-amd64/mc</code>
            <code class="pre-helper pre-helper--shell">chmod +x mc</code>
          </pre>
        </q-tab-panel> -->
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import YBHeader from './YBHeader'
import cfCode from './snippets/pivotalCFDeploy'

export default {
  name: 'PivotalDeploy',
  data: function () {
    return {
      databaseTab: 'Cloud Foundry',
      shellTab: 'Cloud Foundry',
      cfBashLines: cfCode.trim().split('\n')
    }
  },
  components: {
    'yb-header': YBHeader
  }
}
</script>
