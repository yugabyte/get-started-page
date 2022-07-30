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
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/quick-start/">Complete Docs</a>
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
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/quick-start/install/#create-a-local-cluster">Complete Docs</a>
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
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/admin/ysqlsh/">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="x64" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="shellBashLines.slice(1)"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`mac-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/admin/ysqlsh/">Complete Docs</a>
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
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/sample-data/retail-analytics/">Complete Docs</a>
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
                <copy-button :text="sampleQueryCount"></copy-button>
                <code class="pre-helper pre-helper--yb_demo">{{ sampleQueryCount }}</code>
              </pre>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/preview/develop/build-apps/">Complete Docs</a>
      </div>
    </div>
  </div>
</template>
<script>
import { dbServerCode, sqlShellCode, pgCommands, ybDemoCommands } from './snippets/macCode'
import YBHeader from './YBHeader'
import CopyButton from './CopyButton'

export default {
  name: 'MacInstall',
  props: ['version'],
  data: function () {
    return {
      databaseTab: 'x64',
      shellTab: 'x64',
      exploreYSQL: 'default',
      shellBashLines: sqlShellCode.trim().split('\n'),
      pgQueries: pgCommands.trim().split('\n'),
      ybDemoQueries: ybDemoCommands.trim().split('\n'),
      sampleQueryCount: 'SELECT users.id, users.name, users.email, orders.id, orders.total FROM orders INNER JOIN users ON orders.user_id=users.id LIMIT 10;'
    }
  },
  computed: {
    dbBashLines: function () {
      return dbServerCode(this.version.version, this.version.appVersion).trim().split('\n')
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
.option-tabs.wide {
  max-width: fit-content;
}
#macos-quickstart-link {
  color: #322965;
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
  margin: 0 90px 0 30px;
  line-height: 0.5;
  text-align: left;
  padding: 0;
  overflow-y: hidden;
  overflow-x: auto;
}
.code-relative {
  position: relative;
  width: 958px;
}
.pre-helper {
  color: #3e3e3e;
  position: relative;
  display: block;
  line-height: 1.5;
  font-size: 16px;
}

.pre-helper--shell {
  padding-left: 20px;
}
.pre-helper--shell:before {
    content: '$ ';
}

.pre-helper--yugabyte {
  padding-left: 90px;
}
.pre-helper--yugabyte:before {
    content: 'yugabyte=# ';
}

.pre-helper--yb_demo {
  padding-left: 85px;
}
.pre-helper--yb_demo:before {
    content: 'yb_demo=# ';
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
