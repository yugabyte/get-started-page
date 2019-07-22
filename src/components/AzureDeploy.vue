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
        <!-- <q-tab name="Resource Manager" class="option-tabs" v-on:click="sendAnalytics('resource-manager')">
            <img width="24" style="margin-bottom: 5px" src="/statics/resourcemanager-logo.png" />
            Resource Manager
          </q-tab> -->
        <q-tab name="Terraform" label="Terraform" icon="img:/statics/terraform-logo.png" class="option-tabs" v-on:click="sendAnalytics('terraform')" />
        <q-space />
        <div class="quickstart-container">
          <a v-if="databaseTab === 'Terraform'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://github.com/YugaByte/terraform-azure-yugabyte">Quick-Start Guide</a>
          <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/public-clouds/azure/">Quick-Start Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <!-- <q-tab-panel name="Resource Manager" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in resourceManagerCode" v-bind:key="`azure-rm-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel> -->
        <q-tab-panel name="Terraform" class="bg-form">
          <terraform-form code="azureerm" providerName="Azure"></terraform-form>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a v-if="databaseTab === 'Terraform'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://github.com/YugaByte/terraform-azure-yugabyte">Quick-Start Guide</a>
        <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/public-clouds/azure/">Quick-Start Guide</a>
      </div>
    </div>
  </div>
</template>

<script>
import YBHeader from './YBHeader'
import dbCode from './snippets/azureRMDeploy'
import TerraformForm from './TerraformForm'

import { event } from 'vue-analytics'

export default {
  name: 'AzureDeploy',
  data: function () {
    return {
      databaseTab: 'Terraform',
      resourceManagerCode: dbCode.trim().split('\n')
    }
  },
  components: {
    'yb-header': YBHeader,
    'terraform-form': TerraformForm
  },
  methods: {
    sendAnalytics: function (service) {
      event({
        eventCategory: 'Install-Page',
        eventAction: `click.azure.${service}`,
        eventLabel: `User clicked Azure ${service} section button`
      })
    }
  }
}
</script>
