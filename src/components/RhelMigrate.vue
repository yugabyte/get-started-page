<template>
  <div class="migrate-container">
    <div class="rhel-section">
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

      <p>Perform the following steps to install yb-voyager using yum for RHEL 7/8 and CentOS 7/8:</p>

      <ol>
        <li>
          <p>Update the yum package manager, and all the packages and repositories installed on your machine using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.yumUpdate"></copy-button>
              <code class="pre-helper">{{ snippets.yumUpdate }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Install the <code>yugabyte</code> yum repository using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installYB"></copy-button>
              <code class="pre-helper">{{ snippets.installYB }}</code>
            </pre>
          </div>

          <p>This repository contains the yb-voyager rpm and other dependencies required to run <code>yb-voyager</code>.</p>
        </li>

        <li>
          <p>Install the <code>epel-release</code> repository using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installEpelRelease7"></copy-button>
              <code class="pre-helper">{{ snippets.installEpelRelease7 }}</code>
            </pre>
          </div>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installEpelRelease8"></copy-button>
              <code class="pre-helper">{{ snippets.installEpelRelease8 }}</code>
            </pre>
          </div>
        </li>

        <li>
          <p>Install the PostgreSQL and Oracle instant clients repositories using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.installRedhatRepo"></copy-button>
              <code class="pre-helper">{{ snippets.installRedhatRepo }}</code>
            </pre>
          </div>

          <p>These repositories contain the rest of the dependencies required to run <code>yb-voyager</code>.</p>

          <div class="admonition note">
            <p>Note that if you're using <strong>RHEL 8</strong> or <strong>CentOS 8</strong>, perform the following two steps before proceeding to step 5.</p>

            <ul>
              <li>
                <p>Disable the default <code>PostgreSQL</code> yum module on your machine using the following command:</p>

                <div class="bg-grey-3 q-tab-panel code-relative">
                  <pre class="code-container">
                    <copy-button :text="snippets.disablePostgreSQL"></copy-button>
                    <code class="pre-helper">{{ snippets.disablePostgreSQL }}</code>
                  </pre>
                </div>
              </li>

              <li>
                <p>Install <code>perl-open</code> on your machine using the following command:</p>

                <div class="bg-grey-3 q-tab-panel code-relative">
                  <pre class="code-container">
                    <copy-button :text="snippets.installPerlOpen"></copy-button>
                    <code class="pre-helper">{{ snippets.installPerlOpen }}</code>
                  </pre>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <p>Update the yum package manager and all the packages and repositories installed on your machine using the following command:</p>

          <div class="bg-grey-3 q-tab-panel code-relative">
            <pre class="code-container">
              <copy-button :text="snippets.yumUpdate"></copy-button>
              <code class="pre-helper">{{ snippets.yumUpdate }}</code>
            </pre>
          </div>
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
    </div>
  </div>
</template>
<script>
import * as snippets from './snippets/rhelMigrate';
import CopyButton from './CopyButton.vue';

export default {
  name: 'RhelMigrate.vue',
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
.rhel-section {
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
