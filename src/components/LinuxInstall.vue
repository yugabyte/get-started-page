<template>
  <div class="install-container">
    <div class="download-section">
      <h3><img src="../assets/yb-database.png" alt="Yugabyte DB">Yugabyte Database</h3>
      <q-tabs
        v-model="databaseTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="brew" label="brew" class="option-tabs" />
        <q-tab name="x64" label="X64" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/">QuickStart Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="brew" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell">brew install minio/stable/minio</code>
          </pre>
        </q-tab-panel>

        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell">wget https://dl.min.io/client/mc/release/darwin-amd64/mc</code>
            <code class="pre-helper pre-helper--shell">chmod +x mc</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div class="download-section">
      <h3><img src="../assets/yb-cli.png" alt="Yugabyte DB">Yugabyte Shell</h3>
      <q-tabs
        v-model="shellTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="brew" label="brew" class="option-tabs" />
        <q-tab name="x64" label="X64" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noreferrer" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/">QuickStart Guide</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="brew" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell">brew install minio/stable/minio</code>
          </pre>
        </q-tab-panel>

        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <code class="pre-helper pre-helper--shell">wget https://dl.min.io/client/mc/release/darwin-amd64/mc</code>
            <code class="pre-helper pre-helper--shell">chmod +x mc</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinuxInstall',
  data: function () {
    return {
      databaseTab: 'brew',
      shellTab: 'brew'
    }
  }
}
</script>
