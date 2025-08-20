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
          name="Cloud Formation"
          class="option-tabs"
          v-on:click="sendAnalytics('cloud-formation')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/cloudformation-logo.png"
          />
          Cloud Formation
        </q-tab>
        <q-tab
          name="Terraform"
          class="option-tabs"
          v-on:click="sendAnalytics('terraform')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/terraform-logo.png"
          />
          Terraform
        </q-tab>
        <q-tab
          name="EKS"
          class="option-tabs wide"
          v-on:click="sendAnalytics('eks')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/amazon-eks.png"
          />
          Elastic Kubernetes Service
        </q-tab>
        <q-space />
        <div class="quickstart-container">
          <a
            v-if="databaseTab === 'Terraform'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/public-clouds/aws/terraform/"
            >Complete Docs</a
          >
          <a
            v-else-if="databaseTab === 'EKS'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/kubernetes/multi-zone/eks/helm-chart/"
            >Complete Docs</a
          >
          <a
            v-else
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/public-clouds/aws/cloudformation/"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Cloud Formation" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="cfBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in cfBashLines" v-bind:key="`aws-cf-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="Terraform" class="bg-form">
          <terraform-form
            code="aws"
            providerName="AWS"
            :version="version"
          ></terraform-form>
        </q-tab-panel>
        <q-tab-panel name="EKS" class="bg-form">
          <cloud-managed-k8s code="eks" :version="version"></cloud-managed-k8s>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          v-if="databaseTab === 'Terraform'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/public-clouds/aws/terraform/"
          >Complete Docs</a
        >
        <a
          v-else-if="databaseTab === 'EKS'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/kubernetes/multi-zone/eks/helm-chart/"
          >Complete Docs</a
        >
        <a
          v-else
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/public-clouds/aws/cloudformation/"
          >Complete Docs</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { event } from 'vue-gtag';
import YBHeader from './YBHeader.vue';
import TerraformForm from './TerraformForm.vue';
import CloudManagedK8s from './CloudManagedK8s.vue';
import { cloudFormationCode } from './snippets/awsCFDeploy';

import CopyButton from './CopyButton.vue';

export default {
  name: 'AWSDeploy',
  data: function () {
    return {
      databaseTab: 'Cloud Formation',
    };
  },
  computed: {
    cfBashLines: function () {
      return cloudFormationCode(this.version.version).trim().split('\n');
    },
  },
  components: {
    'yb-header': YBHeader,
    'terraform-form': TerraformForm,
    'cloud-managed-k8s': CloudManagedK8s,
    'copy-button': CopyButton,
  },
  props: ['version'],
  methods: {
    sendAnalytics: function (service) {
      event('click', {
        event_category: 'Install-Page',
        value: `click.aws.${service}`,
        event_label: `User clicked AWS ${service} section button`,
      });
    },
  },
};
</script>
