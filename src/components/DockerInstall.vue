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
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#docker">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="databaseTab" animated>
        <q-tab-panel name="default" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="dbBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in dbBashLines" v-bind:key="`docker-db-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/install/#docker">Complete Docs</a>
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
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="shellTab" animated>
        <q-tab-panel name="default" class="bg-grey-3">
          <pre class="code-container">
            <copy-button :text="shellBashLines"></copy-button>
            <code class="pre-helper pre-helper--shell" v-for="(line, index) in shellBashLines" v-bind:key="`docker-shell-${index}`">{{ line }}</code>
          </pre>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/admin/ysqlsh/">Complete Docs</a>
      </div>
    </div>
    <div class="download-section">
      <yb-header type="yb-logo" text="Explore Distributed SQL"></yb-header>
      <q-tabs
        v-model="databaseTab" dense class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-space />
        <div class="quickstart-container">
          <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/explore-ysql/#docker">Complete Docs</a>
        </div>
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="exploreYSQL" animated>
        <q-tab-panel name="default" class="bg-form">
          <div>
            <h3 class="config-form-header">
              1. Download Sample Schema
            </h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="ysqlBashLines"></copy-button>
                <code class="pre-helper pre-helper--shell" v-for="(line, index) in ysqlBashLines" v-bind:key="`ysql-${index}`">{{ line }}</code>
              </pre>
            </div>
            <h3 class="config-form-header">
              2. Load Data
            </h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="pgQueries"></copy-button>
                <code class="pre-helper pre-helper--postgres" v-for="(line, index) in pgQueries" v-bind:key="`postgres-${index}`">{{ line }}</code>
              </pre>
            </div>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="ybDemoQueries"></copy-button>
                <code class="pre-helper pre-helper--yb_demo" v-for="(line, index) in ybDemoQueries" v-bind:key="`yb-demo-${index}`">{{ line }}</code>
              </pre>
            </div>
            <h3 class="config-form-header">
              3. Run Queries
            </h3>
            <div class="bg-grey-3 q-tab-panel code-relative">
              <pre class="code-container">
                <copy-button :text="sampleQueryUsers"></copy-button>
                <code class="pre-helper pre-helper--yb_demo">{{ sampleQueryUsers }}</code>
                <code class="pre-helper">  id  |        name         |             email             |  id   |      total
------+---------------------+-------------------------------+-------+------------------
  616 | Rex Thiel           | rex-thiel@gmail.com           |  4443 | 101.414602060277
 2289 | Alanis Kovacek      | alanis.kovacek@yahoo.com      | 17195 | 71.8499366564206
   37 | Jaleel Collins      | jaleel.collins@gmail.com      |   212 | 38.8821451022809
 2164 | Cordia Farrell      | cordia.farrell@gmail.com      | 16223 | 37.7489430287531
 1528 | Donny Murazik       | murazik-donny@hotmail.com     | 11546 | 52.3082273751586
 1389 | Henriette O'Connell | connell-o-henriette@yahoo.com | 10551 | 69.3117644687696
 2408 | Blake Jast          | jast.blake@hotmail.com        | 18149 | 150.788925887077
 1201 | Kaycee Keebler      | kaycee-keebler@gmail.com      |  8937 | 48.3440955866708
 1421 | Cornell Cartwright  | cornell-cartwright@gmail.com  | 10772 | 191.867670306882
  523 | Deonte Hoeger       | hoeger.deonte@hotmail.com     |  3710 | 71.4010754169826
(10 rows)
                </code>
              </pre>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <div class="quickstart-container mobile-view">
        <a target="_blank" rel="noopener" id="macos-quickstart-link" href="https://docs.yugabyte.com/latest/quick-start/explore-ysql/#docker">Complete Docs</a>
      </div>
    </div>
  </div>
</template>

<script>
import { dbServerCode, sqlShellCode, ysqlCode, pgCommands, ybDemoCommands } from './snippets/dockerCode'
import YBHeader from './YBHeader'
import CopyButton from './CopyButton'

export default {
  name: 'DockerInstall',
  data: function () {
    return {
      databaseTab: 'default',
      shellTab: 'default',
      exploreYSQL: 'default',
      dbBashLines: dbServerCode.trim().split('\n'),
      shellBashLines: sqlShellCode.trim().split('\n'),
      ysqlBashLines: ysqlCode.trim().split('\n'),
      pgQueries: pgCommands.trim().split('\n'),
      ybDemoQueries: ybDemoCommands.trim().split('\n'),
      sampleQueryUsers: 'SELECT users.id, users.name, users.email, orders.id, orders.total FROM orders INNER JOIN users ON orders.user_id=users.id LIMIT 10;'
    }
  },
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton
  }
}
</script>
