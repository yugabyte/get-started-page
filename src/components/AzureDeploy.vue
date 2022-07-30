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
        <q-tab name="Resource Manager" class="option-tabs" v-on:click="sendAnalytics('resource-manager')">
            <img width="24" style="margin-bottom: 5px" src="/statics/resourcemanager-logo.png" />
            Resource Manager
          </q-tab>
        <q-tab name="Terraform" label="Terraform" icon="img:/statics/terraform-logo.png" class="option-tabs" v-on:click="sendAnalytics('terraform')" />
        <q-tab name="AKS" label="Azure Kubernetes Service" icon="img:/statics/aks.svg" class="option-tabs wide" v-on:click="sendAnalytics('AKS')" />
        <q-space />
        <div class="quickstart-container">
          <a v-if="databaseTab === 'Terraform'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/deploy/public-clouds/azure/terraform/">Complete Docs</a>
          <a v-else-if="databaseTab === 'Resource Manager'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/deploy/public-clouds/azure/">Complete Docs</a>
          <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/deploy/kubernetes/single-zone/aks/helm-chart/">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Resource Manager" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="rmBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in rmBashLines" v-bind:key="`azure-rm-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="Terraform" class="bg-form">
          <terraform-form code="azurerm" providerName="Azure"></terraform-form>
        </q-tab-panel>
        <q-tab-panel name="AKS" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="aksBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in aksBashLines" v-bind:key="`azure-rm-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a v-if="databaseTab === 'Terraform'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/deploy/public-clouds/azure/terraform/">Complete Docs</a>
        <a v-else-if="databaseTab === 'Resource Manager'" target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/deploy/public-clouds/azure/">Complete Docs</a>
        <a v-else target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/deploy/kubernetes/single-zone/aks/helm-chart/">Complete Docs</a>
      </div>
    </div>
  </div>
</template>

<script>
import YBHeader from './YBHeader'
import { resourceManagerCode, aksServerCode } from './snippets/azureRMDeploy'
import TerraformForm from './TerraformForm'
import CopyButton from './CopyButton'

export default {
  name: 'AzureDeploy',
  data: function () {
    return {
      databaseTab: 'Resource Manager'
    }
  },
  computed: {
    rmBashLines: function () {
      return resourceManagerCode(this.version.version).trim().split('\n')
    },
    aksBashLines: function () {
      return aksServerCode(this.version.appVersion).trim().split('\n')
    }
  },
  components: {
    'yb-header': YBHeader,
    'terraform-form': TerraformForm,
    'copy-button': CopyButton
  },
  props: ['version'],
  methods: {
    sendAnalytics: function (service) {
      this.$gtag.event('click', {
        'event_category': 'Install-Page',
        'value': `click.azure.${service}`,
        'event_label': `User clicked Azure ${service} section button`
      })
    }
  }
}
</script>
