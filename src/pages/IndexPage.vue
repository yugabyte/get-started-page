<template>
  <q-page class="flex flex-center">
    <section class="hero-overview">
      <div class="overview-container">
        <h3 class="overview-statement">
          The leading high-performance distributed SQL database
        </h3>
        <h1>Get started</h1>
        <p>
          YugabyteDB server and SQL shell are released under open source Apache
          2.0 license
        </p>
      </div>
    </section>
    <ul id="dropdown-options-container">
      <li>
        <q-select
          style="width: 300px"
          filled
          label="Service"
          v-model="selectedService"
          :options="serviceOptions"
        />
      </li>
      <li v-if="selectedService.value === 'local'">
        <q-select
          style="width: 300px"
          filled
          label="Platform"
          v-model="selectedPlatform"
          :options="platformOptions"
        />
      </li>
      <li v-else-if="selectedService.value === 'cloud'">
        <q-select
          style="width: 300px"
          filled
          label="Cloud Provider"
          v-model="selectedDeploy"
          :options="deployOptions"
        />
      </li>
      <li v-else-if="selectedService.value === 'migrate'">
        <q-select
          style="width: 300px"
          filled
          label="Migration service"
          v-model="selectedMigrate"
          :options="migrateOptions"
        />
      </li>
    </ul>
    <div class="service-tabs-container">
      <div class="service-options">
        <div
          :class="
            selectedService.value === 'local'
              ? 'service-cluster-option active'
              : 'service-cluster-option'
          "
          @click="clickServiceTab(0)"
        >
          <h3>Local Install</h3>
          <h2>Download</h2>
        </div>
        <div
          :class="
            selectedService.value === 'cloud'
              ? 'service-cluster-option active'
              : 'service-cluster-option'
          "
          @click="clickServiceTab(1)"
        >
          <h3>Multi-node cluster</h3>
          <h2>Deploy</h2>
        </div>
        <div
          :class="
            selectedService.value === 'managed'
              ? 'service-cluster-option active'
              : 'service-cluster-option'
          "
          @click="clickServiceTab(2)"
        >
          <h3>YugabyteDB Managed</h3>
          <h2>Sign Up</h2>
        </div>
        <div
          :class="
            selectedService.value === 'migrate'
              ? 'service-cluster-option active'
              : 'service-cluster-option'
          "
          @click="clickServiceTab(3)"
        >
          <h3>YugabyteDB Voyager</h3>
          <h2>Migrate</h2>
        </div>
      </div>
    </div>
    <div
      v-if="selectedService.value === 'local'"
      id="local-cluster-content"
      class="content"
    >
      <div class="os-selection-container">
        <yb-button
          label="macOS"
          :active="selectedPlatform.value === 'macos'"
          v-bind:handleClick="
            () => handleSelectSection(this.platformOptions[0])
          "
        >
          <img src="../assets/macos-icon.svg" />
        </yb-button>
        <yb-button
          label="Linux"
          :active="selectedPlatform.value === 'linux'"
          v-bind:handleClick="
            () => handleSelectSection(this.platformOptions[1])
          "
        >
          <img src="../assets/linux-icon.svg" />
        </yb-button>
        <yb-button
          label="Kubernetes"
          :active="selectedPlatform.value === 'kubernetes'"
          v-bind:handleClick="
            () => handleSelectSection(this.platformOptions[2])
          "
        >
          <img src="../assets/kubernetes-icon.svg" />
        </yb-button>
        <yb-button
          label="Docker"
          :active="selectedPlatform.value === 'docker'"
          v-bind:handleClick="
            () => handleSelectSection(this.platformOptions[3])
          "
        >
          <img src="../assets/docker-icon.png" width="32" height="32" />
        </yb-button>
      </div>

      <div class="os-install-content">
        <mac-install
          v-if="selectedPlatform.value === 'macos'"
          :version="version"
        ></mac-install>
        <linux-install
          v-if="selectedPlatform.value === 'linux'"
          :version="version"
        ></linux-install>
        <kubernetes-install
          v-if="selectedPlatform.value === 'kubernetes'"
          :version="version"
        ></kubernetes-install>
        <docker-install
          v-if="selectedPlatform.value === 'docker'"
          :version="version"
        ></docker-install>
      </div>
    </div>
    <div
      v-else-if="selectedService.value === 'cloud'"
      id="cloud-cluster-content"
      class="content"
    >
      <div class="cloud-selection-container">
        <div>
          <q-btn
            :ripple="false"
            class="testing"
            id="aws-header-btn"
            :class="
              selectedDeploy.value === 'aws'
                ? 'cloud-providers-container active'
                : 'cloud-providers-container'
            "
            v-on:click="handleSelectSection(deployOptions[0])"
          >
            <div><img width="95" src="../assets/aws-logo-black.png" /></div>
          </q-btn>
        </div>
        <div>
          <q-btn
            :ripple="false"
            id="gcp-header-btn"
            :class="
              selectedDeploy.value === 'gcp'
                ? 'cloud-providers-container active'
                : 'cloud-providers-container'
            "
            v-on:click="handleSelectSection(deployOptions[1])"
          >
            <img width="200" src="../assets/gcp-logo.svg" />
          </q-btn>
        </div>
        <div>
          <q-btn
            :ripple="false"
            id="azure-header-btn"
            :class="
              selectedDeploy.value === 'azure'
                ? 'cloud-providers-container active'
                : 'cloud-providers-container'
            "
            v-on:click="handleSelectSection(deployOptions[2])"
          >
            <img width="220" src="../assets/microsoft-azure.svg" />
          </q-btn>
        </div>
        <div>
          <q-btn
            :ripple="false"
            :class="
              selectedDeploy.value === 'k8s-operator'
                ? 'cloud-providers-container active'
                : 'cloud-providers-container'
            "
            v-on:click="handleSelectSection(deployOptions[3])"
          >
            <img width="50" src="../assets/k8s-logo.png" />
            <div>Kubernetes Operator</div>
          </q-btn>
        </div>
      </div>

      <div class="os-install-content">
        <aws-deploy
          v-if="selectedDeploy.value === 'aws'"
          :version="version"
        ></aws-deploy>
        <gcp-deploy
          v-if="selectedDeploy.value === 'gcp'"
          :version="version"
        ></gcp-deploy>
        <azure-deploy
          v-if="selectedDeploy.value === 'azure'"
          :version="version"
        ></azure-deploy>
        <kubernetes-operator
          v-if="selectedDeploy.value === 'k8s-operator'"
          :version="version"
        ></kubernetes-operator>
      </div>
    </div>
    <div v-else-if="selectedService.value === 'managed'"
      id="managed-cluster-content"
      class="content"
    >
      <div class="managed-cluster-container">
        <div>
          <p>
            Experience our fully-managed cloud service using the link below.
          </p>
        </div>
        <a
          href="https://cloud.yugabyte.com/signup?utm_medium=direct&utm_source=download&utm_campaign=YBM_signup"
          target="_blank"
          rel="noreferrer noopener"
        >
          <q-btn
            size="16px"
            class="sign-up-btn"
            color="secondary"
            label="Sign Up"
          ></q-btn>
        </a>
      </div>
    </div>
    <div
      v-else-if="selectedService.value === 'migrate'"
      id="migrate-voyager-content"
      class="content"
    >
      <div class="os-selection-container">
        <yb-button
          label="Linux"
          :active="selectedMigrate.value === 'linux'"
          v-bind:handleClick="
            () => handleSelectSection(this.migrateOptions[0])
          "
        >
          <img src="../assets/linux-icon.svg" />
        </yb-button>
        <yb-button
          label="Ubuntu"
          :active="selectedMigrate.value === 'ubuntu'"
          v-bind:handleClick="
            () => handleSelectSection(this.migrateOptions[1])
          "
        >
          <img src="../assets/ubuntu-icon.svg" width="32" height="32" />
        </yb-button>
        <yb-button
          label="macOS"
          :active="selectedMigrate.value === 'macos'"
          v-bind:handleClick="
            () => handleSelectSection(this.migrateOptions[2])
          "
        >
          <img src="../assets/macos-icon.svg" />
        </yb-button>
        <yb-button
          label="Airgapped"
          :active="selectedMigrate.value === 'airgapped'"
          v-bind:handleClick="
            () => handleSelectSection(this.migrateOptions[3])
          "
        >
          <img src="../assets/macos-icon.svg" width="32" height="32" />
        </yb-button>
        <yb-button
          label="Github"
          :active="selectedMigrate.value === 'github'"
          v-bind:handleClick="
            () => handleSelectSection(this.migrateOptions[4])
          "
        >
          <img src="../assets/github-icon.svg" width="32" height="32" />
        </yb-button>
      </div>

      <div class="os-install-content">
        <linux-migrate
          v-if="selectedMigrate.value === 'linux'"
          :version="version"
        ></linux-migrate>
        <ubuntu-migrate
          v-if="selectedMigrate.value === 'ubuntu'"
          :version="version"
        ></ubuntu-migrate>
        <mac-migrate
          v-if="selectedMigrate.value === 'macos'"
          :version="version"
        ></mac-migrate>
        <airgapped-migrate
          v-if="selectedMigrate.value === 'airgapped'"
          :version="version"
        ></airgapped-migrate>
        <github-migrate
          v-if="selectedMigrate.value === 'github'"
          :version="version"
        ></github-migrate>
      </div>
    </div>
  </q-page>
</template>

<script>
import { event, pageview } from 'vue-gtag';
import MacInstall from 'components/MacInstall.vue';
import LinuxInstall from 'components/LinuxInstall.vue';
import DockerInstall from 'components/DockerInstall.vue';
import KubernetesInstall from 'components/KubernetesInstall.vue';
import AWSDeploy from 'components/AWSDeploy.vue';
import GCPDeploy from 'components/GCPDeploy.vue';
import AzureDeploy from 'components/AzureDeploy.vue';
import KubernetesOperator from 'components/KubernetesOperator.vue';
import LinuxMigrate from 'components/LinuxMigrate.vue';
import UbuntuMigrate from 'components/UbuntuMigrate.vue';
import MacMigrate from 'components/MacMigrate.vue';
import AirgappedMigrate from 'components/AirgappedMigrate.vue';
import GithubMigrate from 'components/GithubMigrate.vue';
import YBButton from 'components/YBButton.vue';

export default {
  name: 'PageIndex',
  data: function () {
    const serviceOptions = [
      {
        label: 'Local Install',
        value: 'local',
      },
      {
        label: 'Multi-Node Cluster',
        value: 'cloud',
      },
      {
        label: 'YugabyteDB Managed',
        value: 'managed',
      },
      {
        label: 'YugabyteDB Voyager',
        value: 'migrate',
      },
    ];
    const platformOptions = [
      {
        label: 'macOS',
        value: 'macos',
      },
      {
        label: 'Linux',
        value: 'linux',
      },
      {
        label: 'Kubernetes',
        value: 'kubernetes',
      },
      {
        label: 'Docker',
        value: 'docker',
      },
    ];
    const deployOptions = [
      {
        label: 'Amazon Web Services',
        value: 'aws',
      },
      {
        label: 'Google Cloud Platform',
        value: 'gcp',
      },
      {
        label: 'Microsoft Azure',
        value: 'azure',
      },
      {
        label: 'Kubernetes Operator',
        value: 'k8s-operator',
      },
    ];
    const migrateOptions = [
      {
        label: 'Linux',
        value: 'linux',
      },
      {
        label: 'Ubuntu',
        value: 'ubuntu',
      },
        {
        label: 'macOS',
        value: 'macos',
      },
      {
        label: 'Airgapped',
        value: 'airgapped',
      },
      {
        label: 'Github',
        value: 'github',
      },
    ];
    let selectedService = serviceOptions[0];
    let selectedPlatform = platformOptions[0];
    let selectedDeploy = deployOptions[0];
    let selectedMigrate = migrateOptions[0];

    if (this.$route.params.service) {
      switch (this.$route.params.service) {
        case 'cloud':
          selectedService = serviceOptions[1];
          break;
        case 'managed':
          selectedService = serviceOptions[2];
          break;
        case 'migrate':
          selectedService = serviceOptions[3];
          break;
        default:
          selectedService = serviceOptions[0];
      }
    }
    if (this.$route.hash) {
      switch (this.$route.hash) {
        case '#macos':
          selectedMigrate = migrateOptions[2];
          selectedPlatform = platformOptions[0];
          break;
        case '#linux':
          selectedMigrate = migrateOptions[0];
          selectedPlatform = platformOptions[1];
          break;
        case '#kubernetes':
          selectedPlatform = platformOptions[2];
          break;
        case '#docker':
          selectedPlatform = platformOptions[3];
          break;
        case '#aws':
          selectedDeploy = deployOptions[0];
          break;
        case '#gcp':
          selectedDeploy = deployOptions[1];
          break;
        case '#azure':
          selectedDeploy = deployOptions[2];
          break;
        case '#k8s-operator':
          selectedDeploy = deployOptions[3];
          break;
        case '#ubuntu':
          selectedMigrate = migrateOptions[1];
          break;
        case '#airgapped':
          selectedMigrate = migrateOptions[3];
          break;
        case '#github':
          selectedMigrate = migrateOptions[4];
          break;
        default:
          break;
      }
    }

    return {
      selectedService,
      serviceOptions,
      selectedPlatform,
      platformOptions,
      selectedDeploy,
      deployOptions,
      selectedMigrate,
      migrateOptions,

      // Dirty means a tab or button was clicked
      dirty: false,
      scrolled: false,
    };
  },
  components: {
    'mac-install': MacInstall,
    'linux-install': LinuxInstall,
    'docker-install': DockerInstall,
    'kubernetes-install': KubernetesInstall,
    'yb-button': YBButton,
    'aws-deploy': AWSDeploy,
    'gcp-deploy': GCPDeploy,
    'azure-deploy': AzureDeploy,
    'kubernetes-operator': KubernetesOperator,
    'linux-migrate': LinuxMigrate,
    'ubuntu-migrate': UbuntuMigrate,
    'mac-migrate': MacMigrate,
    'airgapped-migrate': AirgappedMigrate,
    'github-migrate': GithubMigrate,
  },
  props: ['onScroll', 'version'],
  methods: {
    handleSelectSection: function (section) {
      if (this.selectedService.value === 'local') {
        this.selectedPlatform = section;
      } else if (this.selectedService.value === 'cloud'){
        this.selectedDeploy = section;
      } else {
        this.selectedMigrate = section;
      }
      window.history.pushState(
        'platform',
        '',
        `${window.location.pathname}#${section.value}`
      );
      this.dirty = true;
      event('click', {
        event_category: 'Install-Page',
        value: `click.${this.selectedService.value}.${section.value}`,
        event_label: `User clicked ${section.value} section button`,
      });
    },
    clickServiceTab: function (index) {
      this.selectedService = this.serviceOptions[index];
      window.history.pushState('service', '', this.selectedService.value);
      this.dirty = true;
      event('click', {
        event_category: 'Install-Page',
        value: `click.${this.selectedService.value}.tab`,
        event_label: `User clicked ${this.selectedService.label}`,
      });
    },
    scrollContent: function () {
      if (!this.dirty && !this.scrolled) {
        if (this.selectedService.value === 'local') {
          event('click', {
            event_category: 'Install-Page',
            value: `click.local.${this.selectedPlatform.value}`,
            event_label: `User clicked ${this.selectedPlatform.value} section button`,
          });
        } else if (this.selectedService.value === 'cloud') {
          event('click', {
            event_category: 'Install-Page',
            value: `click.cloud.${this.selectedDeploy.value}`,
            event_label: `User clicked ${this.selectedDeploy.value} section button`,
          });
        } else if (this.selectedService.value === 'migrate') {
          event('click', {
            event_category: 'Install-Page',
            value: `click.migrate.${this.selectedMigrate.value}`,
            event_label: `User clicked ${this.selectedMigrate.value} section button`,
          });
        }
        this.scrolled = true;
      }
      if (this.onScroll) {
        // Execute callback from parent if available
        this.onScroll();
      }
    },
  },
  mounted: function () {
    pageview({
      page_path: '/',
    }); // Send pageview stat to Google Analytics
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollContent);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollContent);
  },
};
</script>
