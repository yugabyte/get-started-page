<template>
  <p>Perform the following steps to install <code>yb-voyager</code> using yum for RHEL 8 and CentOS 8:</p>

  <ol>
    <li>
      <p>Update the yum package manager, and all the packages and repositories installed on your machine using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.updateYum"></copy-button>
          <code class="pre-helper">{{ snippets.updateYum }}</code>
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

      <p>This repository contains the <code>yb-voyager</code> rpm and other dependencies required to run <code>yb-voyager</code>.</p>
    </li>

    <li>
      <p>Install the <code>epel-release</code> repository using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installEpelRelease"></copy-button>
          <code class="pre-helper">{{ snippets.installEpelRelease }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Install the Oracle instant client repositories using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installOracleInstant"></copy-button>
          <code class="pre-helper">{{ snippets.installOracleInstant }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Install the PostgreSQL repositories using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installPostgreSQLRepos"></copy-button>
          <code class="pre-helper">{{ snippets.installPostgreSQLRepos }}</code>
        </pre>
      </div>

      <p>These repositories contain the rest of the dependencies required to run <code>yb-voyager</code>.</p>
    </li>

    <li>
      <p>Disable the default <code>PostgreSQL</code> yum module on your machine using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.disableDefaultPostgreSQL"></copy-button>
          <code class="pre-helper">{{ snippets.disableDefaultPostgreSQL }}</code>
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

    <li>
      <p>Update the yum package manager and all the packages and repositories installed on your machine using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.updateYum"></copy-button>
          <code class="pre-helper">{{ snippets.updateYum }}</code>
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

      <p>To install a specific version of <code>yb-voyager</code> on your machine, use the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installYBVoyagerSpecificVersion"></copy-button>
          <code class="pre-helper">{{ snippets.installYBVoyagerSpecificVersion }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Check that yb-voyager is installed using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.checkYBVersion"></copy-button>
          <code class="pre-helper">{{ snippets.checkYBVersion }}</code>
        </pre>
      </div>
    </li>
  </ol>

  <h4>Upgrade yb-voyager</h4>

  <p>Upgrade yb-voyager using the following command:</p>

  <div class="bg-grey-3 q-tab-panel code-relative">
    <pre class="code-container">
      <copy-button :text="snippets.updateYBVoyager"></copy-button>
      <code class="pre-helper">{{ snippets.updateYBVoyager }}</code>
    </pre>
  </div>
</template>

<script>
import * as snippets from './snippets/rhelMigrate8';
import CopyButton from './CopyButton.vue';

export default {
  name: 'Rhel8Migrate',
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
