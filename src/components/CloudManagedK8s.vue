<template>
  <div>
    <h3 class="config-form-header">
      1. Create a {{code.toUpperCase()}} cluster
    </h3>
    <template v-if="code == 'eks'">
      <div class="bg-grey-3 q-tab-panel code-relative">
        <copy-button :text="createEKSClusterCmd"></copy-button>
        <pre class="code-container" id="exec-code-block">
          <code class="pre-helper pre-helper--shell">{{createEKSClusterCmd}}</code>
        </pre>
      </div>
    </template>
    <template v-else-if="code == 'gke'">
      <div class="bg-grey-3 q-tab-panel code-relative">
        <copy-button :text="createGKEClusterLines"></copy-button>
        <pre class="code-container" id="exec-code-block">
          <code class="pre-helper pre-helper--shell">{{createGKEClusterLines}}</code>
        </pre>
      </div>
    </template>
    <h3 class="config-form-header">
      2. Create a storage configuration
    </h3>
    <template v-if="code == 'eks'">
      <div class="sample-config-block">
        <copy-button :text="eksStorageFile"></copy-button>
        <pre>{{ eksStorageFile }}</pre>
      </div>
    </template>
    <template v-else-if="code == 'gke'">
      <div class="sample-config-block">
        <copy-button :text="gkeStorageFile"></copy-button>
        <pre>{{ gkeStorageFile }}</pre>
      </div>
    </template>
    <p>Apply above configuration to your cluster</p>
    <div class="bg-grey-3 q-tab-panel code-relative">
      <pre class="code-container" id="exec-code-block">
        <code class="pre-helper pre-helper--shell">kubectl apply -f &lt;STORAGE_FILE&gt;.yaml</code>
      </pre>
    </div>
    <h3 class="config-form-header">
      3. Create override files per zone
    </h3>
    <template v-if="code == 'eks'">
      <p>Copy the contents below to a file named <code>overrides-us-east-1a.yaml</code>. Repeat for each zone.</p>
      <div class="sample-config-block">
        <copy-button :text="eksOverridesFile"></copy-button>
        <pre>{{ eksOverridesFile }}</pre>
      </div>
    </template>
    <template v-else-if="code == 'gke'">
      <p>Copy the contents below to a file named <code>overrides-us-central1-a.yaml</code>. Repeat for each zone.</p>
      <div class="sample-config-block">
        <copy-button :text="gkeOverridesFile"></copy-button>
        <pre>{{ gkeOverridesFile }}</pre>
      </div>
    </template>
    <h3 class="config-form-header">
      4. Create YugabyteDB cluster
    </h3>
    <div class="bg-grey-3 q-tab-panel code-relative">
      <copy-button :text="eksInstallYBCode"></copy-button>
      <pre class="code-container" id="exec-code-block">
        <code class="pre-helper pre-helper--shell" v-for="(line, index) in eksInstallYBCode" v-bind:key="`install-yb-${index}`">{{ line }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { createEKSClusterCmd, eksStorageFile, eksOverridesFile, eksInstallYBCode } from './snippets/awsCFDeploy'
import { createGKEClusterLines, gkeStorageFile, gkeOverridesFile, gkeInstallYBCode } from './snippets/gcpCDDeploy'
import CopyButton from './CopyButton'

export default {
  name: 'CloudManagedK8s',
  data: function () {
    return {
      createEKSClusterCmd,
      eksStorageFile,
      eksOverridesFile,
      createGKEClusterLines,
      gkeStorageFile,
      gkeOverridesFile,
      eksInstallYBCode: eksInstallYBCode.trim().split('\n'),
      gkeInstallYBCode: gkeInstallYBCode.trim().split('\n')
    }
  },
  components: {
    'copy-button': CopyButton
  },
  props: {
    code: {
      type: String,
      required: true
    }
  }
}
</script>
