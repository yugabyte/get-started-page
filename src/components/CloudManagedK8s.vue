<template>
  <div>
    <h3 class="config-form-header">
      1. Create a {{code.toUpperCase()}} cluster
    </h3>
    <div class="bg-grey-3 q-tab-panel code-relative">
      <pre class="code-container" id="exec-code-block">
        <code class="pre-helper"># See our docs for more info on how to setup your cluster</code>
      </pre>
    </div>
    <h3 class="config-form-header">
      2. Create a YugabyteDB Cluster
    </h3>
    <div class="bg-grey-3 q-tab-panel code-relative">
      <copy-button :text="ybInstallCode"></copy-button>
      <pre class="code-container" id="exec-code-block">
        <code class="pre-helper pre-helper--shell" v-for="(line, index) in ybInstallCode" v-bind:key="`install-yb-${index}`">{{ line }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { eksInstallYBCode } from './snippets/awsCFDeploy'
import CopyButton from './CopyButton'

export default {
  name: 'CloudManagedK8s',
  computed: {
    ybInstallCode: function () {
      return eksInstallYBCode(this.version.appVersion).trim().split('\n')
    }
  },
  props: ['code', 'version'],
  components: {
    'copy-button': CopyButton
  }
}
</script>
