<template>
  <div class="install-container">
    <div class="download-section">
      <yb-header type="yb-logo" text="DB Server"></yb-header>
      <q-tabs
        v-model="databaseTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="Cloud Foundry" label="Pivotal Cloud Foundry (PCF)" icon="img:/statics/pivotal-pcf-logo.svg" class="option-tabs pivotal-tab" v-on:click="sendAnalytics('cloud-foundry')" />
        <q-tab name="PKS" label="Pivotal Container Service (PKS)" icon="img:/statics/pivotal-pks-logo.svg" class="option-tabs pivotal-tab" v-on:click="sendAnalytics('container-service')" />
        <q-space />
        <div class="quickstart-container">
          <a v-if="databaseTab === 'Cloud Foundry'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/pivotal-cloud-foundry/">Complete Docs</a>
          <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.pivotal.io/partners/yugabyte-db/installing.html">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Cloud Foundry" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="cfBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in cfBashLines" v-bind:key="`pivotal-cf-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>

        <q-tab-panel name="PKS" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="csBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in csBashLines" v-bind:key="`pivotal-cf-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/pivotal-cloud-foundry/">Complete Docs</a>
      </div>
    </div>
  </div>
</template>

<script>
import YBHeader from './YBHeader'
import { cloudFoundryCode, containerServiceCode } from './snippets/pivotalCFDeploy'

import CopyButton from './CopyButton'
import { event } from 'vue-analytics'

export default {
  name: 'PivotalDeploy',
  data: function () {
    return {
      databaseTab: 'Cloud Foundry',
      cfBashLines: cloudFoundryCode.split('\n'),
      csBashLines: containerServiceCode.split('\n')
    }
  },
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton
  },
  methods: {
    sendAnalytics: function (service) {
      event({
        eventCategory: 'Install-Page',
        eventAction: `click.pivotal.${service}`,
        eventLabel: `User clicked Pivotal ${service} section button`
      })
    }
  }
}
</script>
