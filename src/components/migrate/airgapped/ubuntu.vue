<template>
  <p>You can perform an airgapped installation on Ubuntu 22 and later.</p>

  <ol>
    <li>
      <p>Download the airgapped bundle:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.ubuntuBundle"></copy-button>
          <code class="pre-helper">{{ snippets.ubuntuBundle }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Extract the bundle.</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedBundleExtract"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedBundleExtract }}</code>
        </pre>
      </div>

      <p>It contains three packages - debezium, ora2pg, and yb-voyager.</p>
    </li>

    <li>
      <p>
        Download the airgapped installation script into the extracted bundle
        directory:
      </p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedInstallationScript"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedInstallationScript }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>Make the script executable:</p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedExecutableScript"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedExecutableScript }}</code>
        </pre>
      </div>
    </li>

    <li>
      <p>
        Transfer the folder (which contains the 3 packages and the installer
        script) to the airgapped machine.
      </p>
    </li>

    <li>
      <p>
        Install all the <a href="#dependencies-for-ubuntu">dependencies</a> on
        the airgapped machine.
      </p>
    </li>

    <li>
      <p>
        Run the <a href="#install-script">install script</a> on the airgapped
        machine to check the dependencies and install voyager:
      </p>

      <div class="bg-grey-3 q-tab-panel code-relative">
        <pre class="code-container">
          <copy-button :text="snippets.airgappedInstallScript"></copy-button>
          <code class="pre-helper">{{ snippets.airgappedInstallScript }}</code>
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

  <h3 id="dependencies-for-ubuntu">Dependencies for Ubuntu</h3>

  <p>Binutils: Minimum version: 2.25</p>

  <p>Java: Minimum version: 17</p>

  <p>pg_dump: Minimum version: 14</p>

  <p>pg_restore: Minimum version: 14</p>

  <p>psql: Minimum version: 14</p>

  <h4>APT packages</h4>

  <ul>
    <li>sqlite3 (no version dependency)</li>
    <li>make (no version dependency)</li>
    <li>perl (no version dependency)</li>
    <li>libdbi-perl (no version dependency)</li>
    <li>libaio1 (no version dependency)</li>
    <li>cpanminus (no version dependency)</li>
    <li>libmysqlclient-dev (no version dependency)</li>
    <li>oracle-instantclient-tools with exact version 21.5.0.0.0</li>
    <li>oracle-instantclient-basic with exact version 21.5.0.0.0</li>
    <li>oracle-instantclient-devel with exact version 21.5.0.0.0</li>
    <li>oracle-instantclient-jdbc with exact version 21.5.0.0.0</li>
    <li>oracle-instantclient-sqlplus with exact version 21.5.0.0.0</li>
  </ul>

  <h3 id="install-script">Install script</h3>

  <p>
    The script by default checks what dependencies are installed on the system
    and throws an error mentioning the missing dependencies. If all the
    dependencies are found to be installed, it proceeds with the installation of
    ora2pg, debezium, and yb-voyager.
  </p>

  <p>Usage:</p>

  <div class="bg-grey-3 q-tab-panel code-relative">
    <pre class="code-container">
      <copy-button :text="snippets.airgappedInstallScriptOptions"></copy-button>
      <code class="pre-helper">{{ snippets.airgappedInstallScriptOptions }}</code>
    </pre>
  </div>

  <p>The options are as follows.</p>

  <div class="table-responsive">
    <table>
      <thead>
        <tr>
          <th>Argument</th>
          <th>Description/valid options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-d, --check-dependencies-only</td>
          <td>Check the dependencies only, then exit without installing.</td>
        </tr>
        <tr>
          <td>-f, --force-install</td>
          <td>Force install packages without checking dependencies.</td>
        </tr>
        <tr>
          <td>-p, --pg-only</td>
          <td>
            Check and install only PostgreSQL source-related voyager
            dependencies.
          </td>
        </tr>
        <tr>
          <td>-m, --mysql-only</td>
          <td>
            Check and install only MySQL source-related voyager dependencies.
          </td>
        </tr>
        <tr>
          <td>-o, --oracle-only</td>
          <td>
            Check and install only Oracle source-related voyager dependencies.
          </td>
        </tr>
        <tr>
          <td>-h, --help</td>
          <td>Display this help message.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    You can only specify one of <code>--pg-only</code>,
    <code>--oracle-only</code>, or <code>--mysql-only</code>. If none are
    provided, the script checks and installs dependencies for all database
    types. When one of the flags is specified, <code>--help</code> and
    <code>--check-dependencies-only</code> are specific to the selected
    database.
  </p>

  <h3>Oracle Instant Client installation help for Ubuntu</h3>

  <p>
    You can download the oracle instant client RPM packages from the following
    links:
  </p>

  <ul>
    <li>
      <p>
        <a
          href="https://downloads.yugabyte.com/repos/apt/pool/main/oracle-instantclient-tools_21.5.0.0.0-1_amd64.deb"
          title="oracle-instantclient-tools"
          target="_blank"
          rel="noopener"
          >oracle-instantclient-tools</a
        >
      </p>
    </li>
    <li>
      <p>
        <a
          href="https://downloads.yugabyte.com/repos/apt/pool/main/oracle-instantclient-basic_21.5.0.0.0-1_amd64.deb"
          title="oracle-instantclient-basic"
          target="_blank"
          rel="noopener"
          >oracle-instantclient-basic</a
        >
      </p>
    </li>
    <li>
      <p>
        <a
          href="https://downloads.yugabyte.com/repos/apt/pool/main/oracle-instantclient-devel_21.5.0.0.0-1_amd64.deb"
          title="oracle-instantclient-devel"
          target="_blank"
          rel="noopener"
          >oracle-instantclient-devel</a
        >
      </p>
    </li>
    <li>
      <p>
        <a
          href="https://downloads.yugabyte.com/repos/apt/pool/main/oracle-instantclient-jdbc_21.5.0.0.0-1_amd64.deb"
          title="oracle-instantclient-jdbc"
          target="_blank"
          rel="noopener"
          >oracle-instantclient-jdbc</a
        >
      </p>
    </li>
    <li>
      <p>
        <a
          href="https://downloads.yugabyte.com/repos/apt/pool/main/oracle-instantclient-sqlplus_21.5.0.0.0-1_amd64.deb"
          title="oracle-instantclient-sqlplus"
          target="_blank"
          rel="noopener"
          >oracle-instantclient-sqlplus</a
        >
      </p>
    </li>
  </ul>
</template>

<script>
import * as snippets from '../../snippets/airgappedMigrate';
import CopyButton from '../../CopyButton.vue';

export default {
  name: 'AirgappedUbuntu',
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
