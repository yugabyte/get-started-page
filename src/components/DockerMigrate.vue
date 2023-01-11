<template>
  <div class="migrate-container">
    <div class="docker-section">
      <p>Before installing yb-voyager, ensure that you have the <a href="https://docs.docker.com/get-docker/" title="Docker" target="_blank" rel="noopener">Docker</a> runtime installed on your machine.</p>

      <ol>
        <li>
          <p>Pull the docker image from YugabyteDB's docker hub as follows:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.dockerImage"></copy-button>
              <code class="pre-helper">{{ snippets.dockerImage }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Download the script to run yb-voyager using the docker image from yb-voyager's GitHub repository, and move it to your machine's bin directory using the following commands:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.runVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.runVoyager }}</code>
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

      <div class="admonition note">
        <p><strong>Note on installing yb-voyager using Docker for Mac</strong></p>

        <p>The script to run the docker image mounts a folder from your host machine to the container. Docker does not have access to all the files on macOS by default. A solution to access all the files is to create a docker volume and then bind that volume to a particular folder (your actual export directory) on your machine. This docker volume's name then becomes your export directory. All the exported files can then be found in the same folder that is binded to this docker volume.</p>

        <p>To create a docker volume, run the following docker command:</p>

        <div class="bg-grey-3 q-tab-panel code-relative">
          <pre class="code-container">
            <copy-button :text="dockerVolume"></copy-button>
            <code class="pre-helper" v-for="(line, index) in dockerVolume" v-bind:key="`yb-demo-${index}`">{{ line }}</code>
          </pre>
        </div>

        <p>The volume created is named <code>export-dir</code>. You can use this name as the path by specifying <code>export-dir</code> without any path separators for your export directory while running yb-voyager.</p>
      </div>

      <p>To learn more about yb-voyager, refer to <a href="https://docs.yugabyte.com/preview/migrate/yb-voyager-cli/" title="YugabyteDB Voyager CLI">YugabyteDB Voyager CLI</a>.</p>
    </div>
  </div>
</template>
<script>
import * as snippets from './snippets/dockerMigrate';
import CopyButton from './CopyButton.vue';

export default {
  name: 'DockerMigrate.vue',
  data: function () {
    return {
      snippets,
      dockerVolume: snippets.dockerVolume.trim().split('\n'),
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
.docker-section {
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
.admonition {
  background: rgba(229,237,255,.5);
  border: 1px solid rgba(203,219,255,.8);
  border-radius: 8px;
  padding: 20px 20px 20px 40px;
  font-family: inter;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #25323d;
  position: relative;
  margin: 1em 0;
  font-family: inherit;
}
.admonition.note::before {
  content: "";
  width: 18px;
  height: 18px;
  background-image: url(../assets/admonition-note.svg);
  background-repeat: no-repeat;
  background-size: 19px 20px;
  position: absolute;
  top: 20px;
  left: 15px;
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
