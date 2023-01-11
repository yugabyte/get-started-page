<template>
  <div class="migrate-container">
    <div class="source-section">
      <p>Perform the following steps to install <code>yb_voyager</code> using an installer script:</p>

      <ol>
        <li>
          <p>Clone the yb-voyager repository.</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.cloneVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.cloneVoyager }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Change the directory to <code>yb-voyager/installer_scripts</code>.</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.changeDir"></copy-button>
              <code class="pre-helper">{{ snippets.changeDir }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Install yb-voyager using the following script:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installVoyager }}</code>
            </pre>
          </div>

          <p>It is safe to execute the script multiple times. If the script fails, check the <code>/tmp/install-yb-voyager.log</code> file.</p>
        </li>

        <li>
          <p>The script generates a <code>.yb-voyager.rc</code> file in the home directory. Source the file to ensure that the environment variables are set using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.generateVoyagerFile"></copy-button>
              <code class="pre-helper">{{ snippets.generateVoyagerFile }}</code>
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
import * as snippets from './snippets/sourceMigrate';
import CopyButton from './CopyButton.vue';

export default {
  name: 'SourceMigrate.vue',
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
.source-section {
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
