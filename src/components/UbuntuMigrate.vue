<template>
  <div class="migrate-container">
    <div class="ubuntu-section">
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

      <ol>
        <li>
          <p>Install the Yugabyte apt repository:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYB"></copy-button>
              <code class="pre-helper">{{ snippets.installYB }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Clean out apt-get's temporary cache and update its package lists:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.cleanCache"></copy-button>
              <code class="pre-helper">{{ snippets.cleanCache }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Install yb-voyager and its dependencies, and verify the installation:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYBVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installYBVoyager }}</code>
              <code class="pre-helper">{{ snippets.voyagerVersion }}</code>
            </pre>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import * as snippets from './snippets/ubuntuMigrate';
import CopyButton from './CopyButton.vue';

export default {
  name: 'UbuntuMigrate.vue',
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
.ubuntu-section {
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
