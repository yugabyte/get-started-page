<template>
  <div>
    <div class="config-form-header">
      Generate config file
    </div>
    <div class="config-form-container">
      <div class="form-control">
        <div class="row config-form-row">
          <q-input class="form-input" :label="`${providerName} Access Key`" v-model="accessKeyInput"/>
          <q-input class="form-input" :label="`${providerName} Secret Key`" v-model="secretKeyInput"/>
        </div>
        <div class="row config-form-row">
          <q-input class="form-input" label="SSH Keypair" v-model="sshKeyPairInput"/>
          <q-input class="form-input" label="SSH Key Path" v-model="sshKeyPathInput"/>
        </div>
          <div class="row config-form-row">
          <q-input class="form-input" label="Security Group Id" v-model="securityGroupIdInput"/>
          <q-input class="form-input" label="VPC ID" v-model="vpcIdInput"/>
        </div>
          <q-input label="Subnet IDs" v-model="subnetIdsInput"/>
        </div>
      <q-btn color="primary" label="Generate" @click="handleButtonClick" />
    </div>
    <div v-if="sampleConfigFile" id="sample-config-block">
      <q-btn class="copy-code-btn" flat label="Copy" @click="copyToClipboard(sampleConfigFile)"/>
      <pre>{{ sampleConfigFile }}</pre>
    </div>
    <div class="config-form-header">
      Create cluster
    </div>
    <div class="bg-grey-3">
      <pre class="code-container" id="exec-code-block">
        <q-btn class="copy-code-btn" flat label="Copy" @click="copyToClipboard(terraformBashLines.join('\n'))"/>
        <code class="pre-helper pre-helper--shell" v-for="(line, index) in terraformBashLines" v-bind:key="`terraform-${index}`">{{ line }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import terraformCode, { generateConfig } from './snippets/terraformDeploy'
import { copyToClipboard } from './helpers'

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

      sampleConfigFile: '',
      terraformBashLines: terraformCode.trim().split('\n')
    }
  },
  methods: {
    handleButtonClick: function () {
      this.sampleConfigFile = generateConfig(
        this.code,
        this.accessKeyInput,
        this.secretKeyInput,
        this.sshKeyPairInput,
        this.sshKeyPathInput,
        this.securityGroupIdInput,
        this.vpcIdInput,
        this.subnetIdsInput
      )
    },
    copyToClipboard: copyToClipboard
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
