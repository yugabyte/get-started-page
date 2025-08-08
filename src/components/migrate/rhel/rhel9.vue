<template>
  <p>Perform the following steps to install <code>yb-voyager</code> using yum for RHEL 9 and CentOS 9:</p>

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
      <p>Install <code>mysql-community-release</code> repository using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installMysqlCommunityRelease"></copy-button>
          <code class="pre-helper">{{ snippets.installMysqlCommunityRelease }}</code>
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
      <p>Install Oracle Instant Clients using the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installOracleInstantClients"></copy-button>
          <code class="pre-helper">{{ snippets.installOracleInstantClients }}</code>
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
          <copy-button :text="snippets.installVoyager"></copy-button>
          <code class="pre-helper">{{ snippets.installVoyager }}</code>
        </pre>
      </div>

      <p>To install a specific version of <code>yb-voyager</code> on your machine, use the following command:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.installVoyagerSpecificVersion"></copy-button>
          <code class="pre-helper">{{ snippets.installVoyagerSpecificVersion }}</code>
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

  <h4>Upgrade yb-voyager</h4>

  <p>Upgrade yb-voyager using the following command:</p>

  <div class="bg-grey-3 q-tab-panel code-relative">
    <pre class="code-container">
      <copy-button :text="snippets.updateVoyager"></copy-button>
      <code class="pre-helper">{{ snippets.updateVoyager }}</code>
    </pre>
  </div>
</template>

<script>
import * as snippets from '../../snippets/rhelMigrate9';
import CopyButton from '../../CopyButton.vue';

export default {
  name: 'Rhel9Migrate',
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
