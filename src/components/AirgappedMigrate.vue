<template>
  <div class="migrate-container">
    <div class="airgapped-section">
      <p>You can perform an airgapped installation on <strong>RHEL 7/8 and CentOS 7/8</strong>.</p>

      <q-tabs
        v-model="tab"
        dense
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="docker" label="Docker" />
        <q-tab name="yum" label="Yum" />
        <q-space />
        <div class="docs-container">
          <a
            target="_blank"
            rel="noopener"
            class="complete-docs-link"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            >Complete Docs</a
          >
        </div>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="docker">

          <ol>
            <li>
              <p>Run the following commands from a machine connected to the internet:</p>

              <div class="bg-grey-3 q-tab-panel code-relative">
                <pre class="code-container">
                  <copy-button :text="snippets.dockerImageAndWrapper"></copy-button>
                  <code class="pre-helper">{{ snippets.dockerImageAndWrapper }}</code>
                </pre>
              </div>
            </li>

            <li>
              <p>Copy the <code>yb-voyager-image.tar.gz</code> and <code>yb-voyager</code> files to the airgapped machine.</p>
            </li>

            <li>
              <p>Run the following commands on the airgapped machine:</p>

              <div class="bg-grey-3 q-tab-panel code-relative">
                <pre class="code-container">
                  <copy-button :text="snippets.dockerLoadAndExecutable"></copy-button>
                  <code class="pre-helper">{{ snippets.dockerLoadAndExecutable }}</code>
                </pre>
              </div>
            </li>
          </ol>
        </q-tab-panel>

        <q-tab-panel name="yum">
          <div class="admonition note">
            <p><strong>Package dependencies</strong></p>

            <p>To resolve package dependencies, yum takes into account the list of packages (and their versions) already installed on a machine.</p>

            <p>For yum to download <i>all</i> the required dependencies, ensure that the list of all packages (and their versions) already installed on the airgapped machine and the connected machine are <i>exactly the same</i>. For example, it will not work if you prepare the installer bundle on RHEL 7.5 and try to install it on RHEL 7.2.</p>
          </div>

          <ol>
            <li>
              <p>Run the following commands from a machine connected to the internet:</p>

              <ul>
                <li>
                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumInstallYB"></copy-button>
                      <code class="pre-helper">{{ snippets.yumInstallYB }}</code>
                    </pre>
                  </div>
                </li>

                <li>
                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumInstallEpel7"></copy-button>
                      <code class="pre-helper">{{ snippets.yumInstallEpel7 }}</code>
                    </pre>
                  </div>

                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumInstallEpel8"></copy-button>
                      <code class="pre-helper">{{ snippets.yumInstallEpel8 }}</code>
                    </pre>
                  </div>
                </li>

                <li>
                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumInstallPostgreSQL"></copy-button>
                      <code class="pre-helper">{{ snippets.yumInstallPostgreSQL }}</code>
                    </pre>
                  </div>
                </li>

                <p>For <strong>RHEL 8</strong> or <strong>CentOS 8</strong> only:</p>

                <ul>
                  <li>
                    <div class="bg-grey-3 q-tab-panel code-relative">
                      <pre class="code-container">
                        <copy-button :text="snippets.yumDisablePostgreSQLAndDownloadPerlOpen"></copy-button>
                        <code class="pre-helper">{{ snippets.yumDisablePostgreSQLAndDownloadPerlOpen }}</code>
                      </pre>
                    </div>
                  </li>
                </ul>

                <li>
                  <div class="bg-grey-3 q-tab-panel code-relative">
                    <pre class="code-container">
                      <copy-button :text="snippets.yumDownloadVoyager"></copy-button>
                      <code class="pre-helper">{{ snippets.yumDownloadVoyager }}</code>
                    </pre>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              Transfer the downloaded files to the airgapped machine.
            </li>

            <li>
              <p>Run the following commands on the airgapped machine:</p>

              <div class="bg-grey-3 q-tab-panel code-relative">
                <pre class="code-container">
                  <copy-button :text="snippets.yumInstall"></copy-button>
                  <code class="pre-helper">{{ snippets.yumInstall }}</code>
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
.admonition {
  background: rgba(229,237,255,.5);
  border: 1px solid rgba(203,219,255,.8);
  border-radius: 8px;
  padding: 20px 20px 20px 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #25323d;
  position: relative;
  margin: 1em 0;
  font-family: inherit;
  width: 98%;
}
.admonition.note::before {
  content: "";
  width: 18px;
  height: 18px;
  background-image: url(../assets/admonition-note.svg);
  background-repeat: no-repeat;
  background-size: 19px 20px;
  position: absolute;
  top: 20px;
  left: 15px;
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
