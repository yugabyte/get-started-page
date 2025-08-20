<template>
  <div class="migrate-container">
    <div class="docker-section">
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
        Before installing yb-voyager, ensure that you have the
        <a
          href="https://docs.docker.com/get-docker/"
          target="_blank"
          rel="noopener"
          >Docker</a
        >
        runtime installed on your machine.
      </p>

      <ol>
        <li>
          <p>
            Pull the docker image from YugabyteDB's docker hub (Pull the version
            from docker.io) as follows:
          </p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.dockerImage"></copy-button>
              <code class="pre-helper">{{ snippets.dockerImage }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>
            Download the script to run yb-voyager using the docker image from
            yb-voyager's GitHub repository, and move it to your machine's bin
            directory using the following commands:
          </p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.runVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.runVoyager }}</code>
            </pre>
          </div>

          <div class="admonition warning">
            <p>
              Use yb-voyager docker script without <code>sudo</code> to run
              Voyager commands. To do this you need to reconfigure docker on
              your system to run without sudo. Refer to
              <a
                href="https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"
                target="_blank"
                rel="noopener"
                >Manage Docker as a non-root user</a
              >
              in the Docker documentation.
            </p>
          </div>
        </li>

        <li>
          <p>Check that yb-voyager is installed using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.updateVoyager"></copy-button>
              <code class="pre-helper">{{ snippets.updateVoyager }}</code>
            </pre>
          </div>
        </li>
      </ol>
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
