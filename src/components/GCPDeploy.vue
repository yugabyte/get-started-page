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
          name="Cloud Deployment"
          class="option-tabs"
          v-on:click="sendAnalytics('cloud-deployment')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/clouddeployment-logo.svg"
          />
          Cloud Deployment
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
          name="GKE"
          class="option-tabs wide"
          v-on:click="sendAnalytics('gke')"
        >
          <img
            width="24"
            style="margin-bottom: 5px"
            src="../assets/gke.png"
          />
          Google Kubernetes Engine
        </q-tab>
        <q-space />
        <div class="quickstart-container">
          <a
            v-if="databaseTab === 'Terraform'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/public-clouds/gcp/terraform/"
            >Complete Docs</a
          >
          <a
            v-else-if="databaseTab === 'GKE'"
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/kubernetes/multi-zone/gke/helm-chart/"
            >Complete Docs</a
          >
          <a
            v-else
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/deploy/public-clouds/gcp/"
            >Complete Docs</a
          >
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="Cloud Deployment" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="cloudDeploymentCode"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in cloudDeploymentCode" v-bind:key="`gcp-dm-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
        <q-tab-panel name="Terraform" class="bg-form">
          <terraform-form
            code="google"
            providerName="Google Cloud Platform"
          ></terraform-form>
        </q-tab-panel>
        <q-tab-panel name="GKE" class="bg-form">
          <cloud-managed-k8s code="gke" :version="version"></cloud-managed-k8s>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a
          v-if="databaseTab === 'Terraform'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/public-clouds/gcp/terraform/"
          >Complete Docs</a
        >
        <a
          v-else-if="databaseTab === 'GKE'"
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/kubernetes/multi-zone/gke/helm-chart/"
          >Complete Docs</a
        >
        <a
          v-else
          target="_blank"
          rel="noopener"
          id="macos-quickstart-link"
          href="https://docs.yugabyte.com/preview/deploy/public-clouds/gcp/gcp-deployment-manager/"
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
import { deploymentManagerCode } from './snippets/gcpCDDeploy';
import CopyButton from './CopyButton.vue';

export default {
  name: 'GCPDeploy',
  data: function () {
    return {
      databaseTab: 'Cloud Deployment',
      cloudDeploymentCode: deploymentManagerCode.trim().split('\n'),
    };
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
        value: `click.gcp.${service}`,
        event_label: `User clicked GCP ${service} section button`,
      });
    },
  },
};
</script>
