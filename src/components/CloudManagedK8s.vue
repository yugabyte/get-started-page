<template>
  <div>
    <template v-if="this.code == 'eks'">
      <h3 class="config-form-header">
        1. Create a EKS cluster
      </h3>
      <div class="bg-grey-3 q-tab-panel code-relative">
        <copy-button :text="terraformBashLines"></copy-button>
        <pre class="code-container" id="exec-code-block">
          <code class="pre-helper pre-helper--shell" v-for="(line, index) in terraformBashLines" v-bind:key="`terraform-${index}`">{{ line }}</code>
        </pre>
      </div>
    </template>
    <template v-else-if="this.code == 'gke'">
      <h3 class="config-form-header">
        1. Create a GKE cluster
      </h3>
      <div class="bg-grey-3 q-tab-panel code-relative">
        <copy-button :text="terraformBashLines"></copy-button>
        <pre class="code-container" id="exec-code-block">
          <code class="pre-helper pre-helper--shell" v-for="(line, index) in terraformBashLines" v-bind:key="`terraform-${index}`">{{ line }}</code>
        </pre>
      </div>
          <div>
            <q-input class="form-input" label="GCP Credential File" v-model="gcpCredentialFile"/>
          </div>
          <div class="row config-form-row">
            <q-input class="form-input" label="SSH Public Key" v-model="sshPubInput"/>
            <q-input class="form-input" label="SSH Private Key" v-model="sshPrivateInput"/>
          </div>
          <div class="row config-form-row">
            <q-input class="form-input" label="SSH Username" v-model="sshUserInput"/>
            <q-input class="form-input" label="VPC ID" v-model="vpcRegionInput"/>
          </div>
        </template>
        <template v-else>
          <div class="row config-form-row">
            <q-input class="form-input" label="AWS Access Key" v-model="accessKeyInput"/>
            <q-input class="form-input" label="AWS Secret Key" v-model="secretKeyInput"/>
          </div>
          <div class="row config-form-row">
            <q-input class="form-input" label="SSH Keypair" v-model="sshKeyPairInput"/>
            <q-input class="form-input" label="SSH Key Path" v-model="sshKeyPathInput"/>
          </div>
          <div class="row config-form-row">
            <q-input class="form-input" label="Security Group Id" v-model="securityGroupIdInput"/>
            <q-input class="form-input" label="VPC ID" v-model="vpcIdInput"/>
          </div>
          <div>
            <q-input label="Subnet IDs" v-model="subnetIdsInput"/>
          </div>
        </template>
      </div>
      <q-btn color="secondary" label="Generate" @click="handleButtonClick" />
    </div>
    <div v-if="sampleConfigFile" id="sample-config-block">
      <copy-button :text="sampleConfigFile"></copy-button>
      <pre>{{ sampleConfigFile }}</pre>
    </div>
    <h3 class="config-form-header">
      2. Create cluster
    </h3>
    <div class="bg-grey-3 q-tab-panel code-relative">
      <copy-button :text="terraformBashLines"></copy-button>
      <pre class="code-container" id="exec-code-block">
        <code class="pre-helper pre-helper--shell" v-for="(line, index) in terraformBashLines" v-bind:key="`terraform-${index}`">{{ line }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import terraformCode, { generateAwsConfig, generateAzureConfig, generateGCPConfig } from './snippets/terraformDeploy'
import CopyButton from './CopyButton'

export default {
  name: 'TerraformForm',
  data: function () {
    return {
      /* Input form bindings */
      accessKeyInput: undefined,
      secretKeyInput: undefined,
      sshKeyPairInput: undefined,
      sshKeyPathInput: undefined,
      securityGroupIdInput: undefined,
      vpcIdInput: undefined,
      subnetIdsInput: undefined,

      azureSubIdInput: undefined,
      azureClientIdInput: undefined,
      azureClientSecretInput: undefined,
      azureTenantIdInput: undefined,
      sshPubInput: undefined,
      sshPrivateInput: undefined,
      sshUserInput: undefined,
      vpcRegionInput: undefined,

      gcpCredentialFile: undefined,

      sampleConfigFile: '',
      terraformBashLines: terraformCode.trim().split('\n')
    }
  },
  components: {
    'copy-button': CopyButton
  },
  methods: {
    handleButtonClick: function () {
      if (this.code === 'aws') {
        this.sampleConfigFile = generateAwsConfig(
          this.accessKeyInput,
          this.secretKeyInput,
          this.sshKeyPairInput,
          this.sshKeyPathInput,
          this.securityGroupIdInput,
          this.vpcIdInput,
          this.subnetIdsInput
        )
      } else if (this.code === 'azurerm') {
        this.sampleConfigFile = generateAzureConfig(
          this.azureSubIdInput,
          this.azureClientIdInput,
          this.azureClientSecretInput,
          this.azureTenantIdInput,
          this.sshPubInput,
          this.sshPrivateInput,
          this.sshUserInput,
          this.vpcRegionInput
        )
      } else if (this.code === 'google') {
        this.sampleConfigFile = generateGCPConfig(
          this.gcpCredentialFile,
          this.sshPubInput,
          this.sshPrivateInput,
          this.sshUserInput,
          this.vpcRegionInput
        )
      }
    }
  },
  props: {
    code: {
      type: String,
      required: true
    },
    providerName: {
      type: String
    }
  }
}
</script>
