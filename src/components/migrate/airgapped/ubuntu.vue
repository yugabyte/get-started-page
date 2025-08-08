<template>

  <p>You can perform an airgapped installation on Ubuntu 22 and later.</p>

  <ol>
    <li>
      <p>Download the airgapped bundle:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.ubuntuBundle"></copy-button>
          <code class="pre-helper">{{ snippets.ubuntuBundle }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Extract the bundle.</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedBundleExtract"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedBundleExtract }}</code>
        </pre>
      </div>

      <p>It contains three packages - debezium, ora2pg, and yb-voyager.</p>
    </li>

    <li>
      <p>Download the airgapped installation script into the extracted bundle directory:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedInstallationScript"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedInstallationScript }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Make the script executable:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedExecutableScript"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedExecutableScript }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Transfer the folder (which contains the 3 packages and the installer script) to the airgapped machine.</p>
    </li>

    <li>
      <p>Install all the <a href="https://docs.yugabyte.com/preview/yugabyte-voyager/install-yb-voyager/#dependencies-for-ubuntu" target="_blank" rel="noopener">dependencies</a> on the airgapped machine.</p>
    </li>

    <li>
      <p>Run the <a href="https://docs.yugabyte.com/preview/yugabyte-voyager/install-yb-voyager/#install-script" target="_blank" rel="noopener">install script</a> on the airgapped machine to check the dependencies and install voyager:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedInstallScript"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedInstallScript }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Check that yb-voyager is installed using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.voyagerVersion"></copy-button>
          <code class="pre-helper">{{ snippets.voyagerVersion }}</code>
        </pre>
      </div>
    </li>
  </ol>
</template>

<script>
import * as snippets from '../../snippets/airgappedMigrate';
import CopyButton from '../../CopyButton.vue';

export default {
  name: 'AirgappedUbuntu',
  data: function () {
    return {
      snippets,
    };
  },
  components: {
    'copy-button': CopyButton,
  },
};
</script>
