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
        <q-tab name="Cloud Formation" label="Cloud Formation" icon="img:/statics/cloudformation-logo.png" class="option-tabs" v-on:click="sendAnalytics('cloud-formation')" />
        <q-tab name="Terraform" label="Terraform" icon="img:/statics/terraform-logo.png" class="option-tabs" v-on:click="sendAnalytics('terraform')" />
        <q-space />
        <div class="quickstart-container">
          <a v-if="databaseTab === 'Terraform'" target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://github.com/YugaByte/terraform-aws-yugabyte">Quick-Start Guide</a>
          <a v-else target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/deploy/public-clouds/aws/">Quick-Start Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Cloud Formation" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in cfBashLines" v-bind:key="`aws-cf-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="Terraform" class="bg-form">
          <terraform-form code="aws" providerName="AWS"></terraform-form>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import YBHeader from './YBHeader'
import TerraformForm from './TerraformForm'
import cfCode from './snippets/awsCFDeploy'

import { event } from 'vue-analytics'

export default {
  name: 'AWSDeploy',
  data: function () {
    return {
      databaseTab: 'Cloud Formation',
      cfBashLines: cfCode.trim().split('\n')
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
        eventAction: `click.aws.${service}`,
        eventLabel: `User clicked AWS ${service} section button`
      })
    }
  }
}
</script>
