<template>
  <div class="migrate-container">
    <div class="mac-section">
      <p>Perform the following steps to install yb-voyager using brew for MacOS:</p>

      <ol>
        <li>
          <p><a href="https://docs.brew.sh/Taps" title="Tap" target="_blank" rel="noopener">Tap</a> to the <code>yugabyte</code> brew repository using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.tabYugabyte"></copy-button>
              <code class="pre-helper">{{ snippets.tabYugabyte }}</code>
            </pre>
          </div>

          <p>The repository contains the formula to build and install <code>yb-voyager</code> on your MacOS device.</p>
        </li>

        <li>
          <p>Install <code>yb-voyager</code> and its dependencies using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYBVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installYBVoyager }}</code>
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
</style>
