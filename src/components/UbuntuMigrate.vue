<template>
  <div class="migrate-container">
    <div class="ubuntu-section">
      <p>Perform the following steps to install yb-voyager using apt for Ubuntu:</p>

      <ol>
        <li>
          <p>Install the Yugabyte apt repository on your machine using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYB"></copy-button>
              <code class="pre-helper">{{ snippets.installYB }}</code>
            </pre>
          </div>

          <p>This repository contains the <code>yb-voyager</code> debian package and the dependencies required to run <code>yb-voyager</code>.</p>
        </li>

        <li>
          <p>Clean out the temporary cache of <code>apt-get</code> and update the package lists of <code>apt-get</code> on your machine using the following commands:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.cleanCache"></copy-button>
              <code class="pre-helper">{{ snippets.cleanCache }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Install yb-voyager and its dependencies using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYBVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.installYBVoyager }}</code>
            </pre>
          </div>
        </li>
      </ol>

      <p>To learn more about yb-voyager, refer to <a href="https://docs.yugabyte.com/preview/migrate/yb-voyager-cli/" title="YugabyteDB Voyager CLI">YugabyteDB Voyager CLI</a>.</p>
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
