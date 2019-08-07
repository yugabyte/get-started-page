<template>
  <div class="install-container">
    <div class="download-section">
      <yb-header type="yb-logo" text="DB Server"></yb-header>
      <q-tabs
        v-model="databaseTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="x64" label="X64" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/create-local-cluster/#macos">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="dbBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbBashLines" v-bind:key="`mac-db-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/create-local-cluster/#macos">Complete Docs</a>
      </div>
    </div>
    <div class="download-section">
      <yb-header type="yb-shell" text="SQL Shell"></yb-header>
      <q-tabs
        v-model="shellTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="x64" label="X64" class="option-tabs"/>
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="shellBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`mac-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Complete Docs</a>
      </div>
    </div>
  </div>
</template>

<script>
import dbCode from './snippets/macDbBash'
import shellCode from './snippets/macShellBash'
import YBHeader from './YBHeader'
import CopyButton from './CopyButton'

export default {
  name: 'MacInstall',
  data: function () {
    return {
      databaseTab: 'x64',
      shellTab: 'x64',
      dbBashLines: dbCode.trim().split('\n'),
      shellBashLines: shellCode.trim().split('\n')
    }
  },
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton
  }
}
</script>

<style>
.install-container {
  text-align: left;
}
.download-section {
  margin-bottom: 80px;
  position: relative;
}
.option-tabs {
  max-width: 200px;
}
#macos-quickstart-link {
  color: #0045ec;
  width: 150px;
  text-decoration: none;
}
#macos-quickstart-link::after {
  content: '\203a';
  font-size: 20px;
    margin-left: 4px;
}
.code-container {
  background-color: #F7F8F9;
  padding: 0px 30px;
  line-height: 0.5;
  text-align: left;
  margin: 0;
}
.pre-helper {
  color: #3e3e3e;
  position: relative;
  display: block;
  padding-left: 20px;
  line-height: 1.5;
  font-size: 16px;
}
.pre-helper--shell:before {
    content: '$ ';
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

.quickstart-container {
  margin-right: 15px;
}
.quickstart-container.mobile-view {
  margin: 15px;
  display: none;
}

@media only screen and (max-width: 632px) {
  .quickstart-container {
    display: none;
  }
  .quickstart-container.mobile-view {
    display: block;
  }
}
</style>
