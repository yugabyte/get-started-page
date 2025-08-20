<template>
  <p>You can perform an airgapped installation on Docker.</p>

  <p>
    Install yb-voyager using a Docker image in an airgapped environment using
    the following steps:
  </p>

  <ol>
    <li>
      <p>
        From a machine connected to the internet, run the following commands to
        pull and save the latest yb-voyager docker image (Pull the version from
        docker.io):
      </p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.dockerImage"></copy-button>
          <code class="pre-helper">{{ snippets.dockerImage }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>
        Download the yb-voyager wrapper script on the same machine using the
        following command:
      </p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.dockerWrapper"></copy-button>
          <code class="pre-helper">{{ snippets.dockerWrapper }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>
        Copy the yb-voyager-image.tar.gz and yb-voyager files to the airgapped
        machine.
      </p>
    </li>

    <li>
      <p>Load the docker image using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.dockerLoadAndExecutable"></copy-button>
          <code class="pre-helper">{{ snippets.dockerLoadAndExecutable }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>
        Make the wrapper script executable and move it to the bin directory
        using the following commands:
      </p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.dockerMoveScript"></copy-button>
          <code class="pre-helper">{{ snippets.dockerMoveScript }}</code>
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
  name: 'AirgappedDocker',
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
