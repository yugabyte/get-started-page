<template>
  <div class="migrate-container">
    <div class="airgapped-section">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="docker" label="Docker" />
        <q-tab name="yum" label="Yum" />
        <q-tab name="ubuntu" label="Ubuntu" />
        <q-space />
        <div class="docs-container">
          <a class="complete-docs" href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager" title="Complete Docs" target="_blank" rel="noopener">Complete Docs</a>
        </div>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="docker" class="bg-form">

          <p>You can perform an airgapped installation on Docker.</p>

          <p>Install yb-voyager using a Docker image in an airgapped environment using the following steps:</p>

          <ol>
            <li>
              <p>From a machine connected to the internet, run the following commands to pull and save the latest yb-voyager docker image (Pull the version from docker.io):</p>

              <div class="bg-grey-3 q-tab-panel code-relative">
                <pre class="code-container">
                  <copy-button :text="snippets.dockerImage"></copy-button>
                  <code class="pre-helper">{{ snippets.dockerImage }}</code>
                </pre>
              </div>
            </li>

            <li>
              <p>Download the yb-voyager wrapper script on the same machine using the following command:</p>

              <div class="bg-grey-3 q-tab-panel code-relative">
                <pre class="code-container">
                  <copy-button :text="snippets.dockerWrapper"></copy-button>
                  <code class="pre-helper">{{ snippets.dockerWrapper }}</code>
                </pre>
              </div>
            </li>

            <li>
              <p>Copy the yb-voyager-image.tar.gz and yb-voyager files to the airgapped machine.</p>
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
              <p>Make the wrapper script executable and move it to the bin directory using the following commands:</p>

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
        </q-tab-panel>

        <q-tab-panel name="yum" class="bg-form">
          <p>You can perform an airgapped installation on RHEL 8/9 and CentOS 8/9.</p>

          <ol>
            <li>
              <p>Download the airgapped bundle:</p>

              <ol>
                <li>
                  <p>For RHEL8:</p>

                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumRHEL8"></copy-button>
                      <code class="pre-helper">{{ snippets.yumRHEL8 }}</code>
                    </pre>
                  </div>
                </li>

                <li>
                  <p>For RHEL9:</p>

                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumRHEL9"></copy-button>
                      <code class="pre-helper">{{ snippets.yumRHEL9 }}</code>
                    </pre>
                  </div>
                </li>
              </ol>
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
              <p>Run the <a href="https://docs.yugabyte.com/preview/yugabyte-voyager/install-yb-voyager/#install-script" target="_blank" rel="noopener">installer script</a> on the airgapped machine to check the dependencies and install voyager:</p>

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
        </q-tab-panel>

        <q-tab-panel name="ubuntu" class="bg-form">
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
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import * as snippets from './snippets/airgappedMigrate';
import CopyButton from './CopyButton.vue';

export default {
  name: 'AirgappedMigrate.vue',
  data: function () {
    return {
      snippets,
    };
  },
  components: {
    'copy-button': CopyButton,
  },
  setup () {
    return {
      tab: ref('docker')
    }
  }
};
</script>

<style>
.q-panel > div {
  max-width: 100%;
}
.migrate-container {
  text-align: left;
}
.airgapped-section {
  margin-bottom: 80px;
  position: relative;
}
.pre-helper {
  color: #3e3e3e;
  position: relative;
  display: block;
  line-height: 1.5;
  font-size: 16px;
}
.pre-helper:before {
  position: absolute;
  left: 0;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@media (max-width: 767px) {
  .migrate-container ol,
  .migrate-container ul {
    padding-left: 10px;
  }
}
ul {
  list-style: disc;
}
ol li,
ul li {
  margin: 0 0 10px 0;
}
.code-relative.q-tab-panel {
  margin-bottom: 20px;
}
.code-relative.q-tab-panel {
  max-width: 100%;
  width: 100%;
}
p a {
  color: #f7601d;
}
.docs-container {
  margin-right: 15px;
}
.docs-container .complete-docs-link {
  color: #322965;
  width: 150px;
  text-decoration: none;
}
.docs-container .complete-docs-link::after {
  content: '\203a';
  font-size: 20px;
  margin-left: 4px;
}
</style>
