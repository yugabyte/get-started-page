<template>
  <div class="install-container">
    <div class="download-section">
      <yb-header type="yb-logo" text="Github Migrate"></yb-header>
      <q-tabs
        v-model="databaseTab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="x64" label="X64" class="option-tabs" />
        <q-space />
        <div class="quickstart-container">
          <a
            target="_blank"
            rel="noopener"
            class="complete-docs"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            >Complete Docs</a
          >
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
        <a
          target="_blank"
          rel="noopener"
          class="complete-docs"
          href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
          >Complete Docs</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import {
  dbServerCode,
  sqlShellCode,
  pgCommands,
  ybDemoCommands,
} from './snippets/macCode';
import YBHeader from './YBHeader.vue';
import CopyButton from './CopyButton.vue';

export default {
  name: 'AirgappedMigrate',
  props: ['version'],
  data: function () {
    return {
      databaseTab: 'x64',
      shellTab: 'x64',
      exploreYSQL: 'default',
      shellBashLines: sqlShellCode.trim().split('\n'),
      pgQueries: pgCommands.trim().split('\n'),
      ybDemoQueries: ybDemoCommands.trim().split('\n'),
      sampleQueryCount:
        'SELECT users.id, users.name, users.email, orders.id, orders.total FROM orders INNER JOIN users ON orders.user_id=users.id LIMIT 10;',
    };
  },
  computed: {
    dbBashLines: function () {
      return dbServerCode(this.version.version, this.version.appVersion)
        .trim()
        .split('\n');
    },
  },
  components: {
    'yb-header': YBHeader,
    'copy-button': CopyButton,
  },
};
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
.complete-docs {
  color: #322965;
  width: 150px;
  text-decoration: none;
}
.complete-docs::after {
  content: '\203a';
  font-size: 20px;
  margin-left: 4px;
}
.code-container {
  background-color: #f7f8f9;
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
  padding-left: 102px;
}
.pre-helper--yugabyte:before {
  content: 'yugabyte=# ';
}

.pre-helper--yb_demo {
  padding-left: 95px;
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
