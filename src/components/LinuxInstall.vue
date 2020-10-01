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
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/linux">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="dbBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbBashLines" v-bind:key="`linux-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#linux">Complete Docs</a>
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
            <copy-button :text="shellBashLines.slice(1)"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`linux-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Complete Docs</a>
        </div>
    </div>
    <div class="download-section">
      <yb-header type="yb-logo" text="Distributed SQL in Action"></yb-header>
      <q-tabs
        v-model="databaseTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/explore-ysql/#linux">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="exploreYSQL" animated>
        <q-tab-panel name="default" class="bg-form">
          <div>
            <h3 class="config-form-header">
              1. Load Sample Dataset
            </h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="pgQueries"></copy-button>
                <code class="pre-helper pre-helper--yugabyte" v-for="(line, index) in pgQueries" v-bind:key="`yugabyte-${index}`">{{ line }}</code>
              </pre>
            </div>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="ybDemoQueries"></copy-button>
                <code class="pre-helper pre-helper--yb_demo" v-for="(line, index) in ybDemoQueries" v-bind:key="`yb-demo-${index}`">{{ line }}</code>
              </pre>
            </div>
            <h3 class="config-form-header">
              2. Run Queries
            </h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="sampleQueryTables"></copy-button>
                <code class="pre-helper pre-helper--yb_demo">{{ sampleQueryTables }}</code>
              </pre>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/explore-ysql/#linux">Complete Docs</a>
      </div>
    </div>
  </div>
</template>

<script>
import { dbServerCode, sqlShellCode, pgCommands, ybDemoCommands } from './snippets/linuxCode'
import YBHeader from './YBHeader'
import CopyButton from './CopyButton'

export default {
  name: 'LinuxInstall',
  data: function () {
    return {
      databaseTab: 'x64',
      shellTab: 'x64',
      exploreYSQL: 'default',
      dbBashLines: dbServerCode.trim().split('\n'),
      shellBashLines: sqlShellCode.trim().split('\n'),
      pgQueries: pgCommands.trim().split('\n'),
      ybDemoQueries: ybDemoCommands.trim().split('\n'),
      sampleQueryTables: 'SELECT users.id, users.name, users.email, orders.id, orders.total FROM orders INNER JOIN users ON orders.user_id=users.id LIMIT 10;'
    }
  },
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton
  }
}
</script>
