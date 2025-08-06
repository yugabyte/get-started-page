<template>
  <div class="migrate-container">
    <div class="mac-section">
      <q-tabs
        v-model="databaseTab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-space />
        <div class="quickstart-container">
          <a
            target="_blank"
            rel="noopener"
            id="macos-quickstart-link"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            >Complete Docs</a
          >
        </div>
      </q-tabs>

      <q-separator />

      <div class="admonition note">
        <p><strong>Migrating from MySQL/Oracle on macOS</strong></p>

        <p>The brew install on macOS does not support installing ora2pg, which is required for MySQL/Oracle database schema export. If you are planning to migrate MySQL or Oracle source databases on macOS, install yb-voyager using Docker instead.</p>
      </div>

      <p>Perform the following steps to install yb-voyager using brew for macOS:</p>

      <ol>
        <li>
          <p><a href="https://docs.brew.sh/Taps" title="Tap" target="_blank" rel="noopener">Tap</a> the <code>yugabyte</code> Homebrew repository using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.tabYugabyte"></copy-button>
              <code class="pre-helper">{{ snippets.tabYugabyte }}</code>
            </pre>
          </div>

          <p>The repository contains the formula to build and install <code>yb-voyager</code> on your macOS device.</p>

          <p>Note that the tap <code>yugabyte/yugabytedb</code> has been updated to <code>yugabyte/tap</code>. If you have previously installed yb-voyager using the tap <code>yugabyte/yugabytedb</code>, untap the entry using <code>brew untap yugabyte/yugabytedb</code>, and then tap using the preceding command.</p>
        </li>

        <li>
          <p>Install the <code>postgresql@16</code> package to access <code>pg_dump</code> or <code>pg_restore</code> using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installpostgreSQL16"></copy-button>
              <code class="pre-helper">{{ snippets.installpostgreSQL16 }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Install <code>yb-voyager</code> and its dependencies using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYBVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installYBVoyager }}</code>
            </pre>
          </div>

          <div class="admonition note">
            <p>Install a specific version of <code>yb-voyager</code> using the following command:</p>

            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="snippets.installYBVoyagerSpecificVersion"></copy-button>
                <code class="pre-helper">{{ snippets.installYBVoyagerSpecificVersion }}</code>
              </pre>
            </div>
          </div>
        </li>

        <li>
          <p>Check that yb-voyager is installed using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.ybVoyagerVersion"></copy-button>
              <code class="pre-helper">{{ snippets.ybVoyagerVersion }}</code>
            </pre>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import * as snippets from './snippets/macMigrate';
import CopyButton from './CopyButton.vue';

export default {
  name: 'MacMigrate.vue',
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
.mac-section {
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
