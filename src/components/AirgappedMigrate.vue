<template>
  <div class="migrate-container">
    <div class="airgapped-section">
      <p>You can perform an airgapped installation on RHEL 7/8, CentOS 7/8, and Ubuntu OS.</p>

      <p>For airgapped installations, you need to download the tarball containing all the rpm files that are necessary for installing and running <code>yb-voyager</code> on a machine with an internet connection. Transfer the downloaded files to your airgapped machine and proceed with the installation using the following steps:</p>

      <ol>
        <li>
          <p>Download the tarball containing all the rpm files on a machine with internet connection using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.DownloadTarball7"></copy-button>
              <code class="pre-helper">{{ snippets.DownloadTarball7 }}</code>
            </pre>
          </div>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.DownloadTarball8"></copy-button>
              <code class="pre-helper">{{ snippets.DownloadTarball8 }}</code>
            </pre>
          </div>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.DownloadTarballUbuntu"></copy-button>
              <code class="pre-helper">{{ snippets.DownloadTarballUbuntu }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Transfer the tarball to your airgapped machine.</p>
        </li>

        <li>
          <p>Unzip the folder on your airgapped machine. Change directory to the unzipped folder and install the rpm files using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installRpm"></copy-button>
              <code class="pre-helper">{{ snippets.installRpm }}</code>
            </pre>
          </div>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installRpmUbuntu"></copy-button>
              <code class="pre-helper">{{ snippets.installRpmUbuntu }}</code>
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

      <p>To learn more about yb-voyager, refer to <a href="https://docs.yugabyte.com/preview/migrate/yb-voyager-cli/" title="YugabyteDB Voyager CLI">YugabyteDB Voyager CLI</a>.</p>
    </div>
  </div>
</template>
<script>
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
};
</script>

<style>
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
</style>
