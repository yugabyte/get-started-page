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
      <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="copyToClipboard(sampleConfigFile)"/>
      <pre>{{ sampleConfigFile }}</pre>
    </div>
    <div class="config-form-header">
      Create cluster
    </div>
    <div class="bg-grey-3">
      <pre class="code-container" id="exec-code-block">
        <q-btn class="copy-code-btn" push color="white" text-color="primary" label="Copy" @click="copyToClipboard(terraformBashLines.join('\n'))"/>
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

<style>
.config-form-container {
  margin-bottom: 45px;
}
.config-form-container .form-control {
  margin-bottom: 20px;
}
.config-form-container .config-form-row {
  display: flex;
  justify-content: space-between;
}
.config-form-header {
  color: #0064b8;
  font-family: Mark,sans-serif;
  font-weight: 500;
  margin-bottom: 30px;
  font-size: 18px;
  position: relative;
}
.config-form-row .form-input {
  min-width: 300px;
  flex-basis: 45%;
}
#sample-config-block {
  padding: 30px;
  background-color: #eee;
  margin-bottom: 30px;
}
#sample-config-block .copy-code-btn {
  position: absolute;
  right: 100px;
  visibility: hidden;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
#sample-config-block:hover .copy-code-btn {
  visibility: visible;
}
#exec-code-block {
  position: relative;
}
#exec-code-block .copy-code-btn {
  position: absolute;
  right: 30px;
  top: 20px;
  visibility: hidden;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
#exec-code-block:hover .copy-code-btn {
  visibility: visible;
}
</style>
