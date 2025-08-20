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
            class="complete-docs"
            href="https://docs.yugabyte.com/preview/migrate/install-yb-voyager/#install-yb-voyager"
            title="Complete Docs"
            target="_blank"
            rel="noopener"
            >Complete Docs</a
          >
        </div>
      </q-tabs>

      <q-separator />

      <p>
        Perform the following steps to install yb-voyager using apt for Ubuntu:
      </p>

      <div class="admonition note">
        <p><strong>Note</strong></p>

        <p>
          <code>apt</code> installation is only supported for Ubuntu 22. For
          other versions such as 18 and 20, use the install script via the
          Source installation option.
        </p>
      </div>

      <ol>
        <li>
          <p>
            Install the Yugabyte apt repository on your machine using the
            following command:
          </p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYB"></copy-button>
              <code class="pre-helper">{{ snippets.installYB }}</code>
            </pre>
          </div>

          <p>
            This repository contains the <code>yb-voyager</code> Debian package
            and the dependencies required to run <code>yb-voyager</code>.
          </p>
        </li>

        <li>
          <p>
            Install the <code>postgresql-common</code> repository to fetch
            PostgreSQL 16 using the following commands:
          </p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installPostgreSQLCommon"></copy-button>
              <code class="pre-helper">{{ snippets.installPostgreSQLCommon }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>
            Clean the <code>apt-get</code> cache and package lists using the
            following commands:
          </p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.cleanCache"></copy-button>
              <code class="pre-helper">{{ snippets.cleanCache }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>
            Install <code>yb-voyager</code> and its dependencies using the
            following command:
          </p>
          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installVoyager }}</code>
            </pre>
          </div>

          <p>
            Note: If you see a failure in the install step similar to the
            following:
          </p>
          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <code class="pre-helper">{{ snippets.ora2pgFailure }}</code>
            </pre>
          </div>

          <p>Try installing ora2pg using the following command:</p>
          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.ora2pgInstalling"></copy-button>
              <code class="pre-helper">{{ snippets.ora2pgInstalling }}</code>
            </pre>
          </div>

          <p>Then try installing yb-voyager using the following command:</p>
          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installVoyager }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>
            Check that <code>yb-voyager</code> is installed using the following
            command:
          </p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.ybVoyagerVersion"></copy-button>
              <code class="pre-helper">{{ snippets.ybVoyagerVersion }}</code>
            </pre>
          </div>
        </li>
      </ol>

      <h4>Upgrade yb-voyager</h4>

      <div class="admonition note">
        <p><strong>Note</strong></p>

        <p>
          If you are upgrading Voyager from version 1.8.0 or earlier, you need
          to install the postgresql-common repository before the upgrade as
          follows:
        </p>

        <div class="bg-grey-3 q-tab-panel code-relative">
          <pre class="code-container">
            <copy-button :text="snippets.installPostgreSQLCommon"></copy-button>
            <code class="pre-helper">{{ snippets.installPostgreSQLCommon }}</code>
          </pre>
        </div>
      </div>

      <p>Upgrade yb-voyager using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.updateVoyager"></copy-button>
          <code class="pre-helper">{{ snippets.updateVoyager }}</code>
        </pre>
      </div>
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
