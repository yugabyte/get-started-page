<template>
  <q-page class="flex flex-center">
    <section class="hero-overview">
      <div class="overview-container">
        <h3 class="overview-statement">The leading high-performance distributed SQL database</h3>
        <h1>Get Started</h1>
      </div>
    </section>
    <ul id="dropdown-options-container">
      <li>
        <q-select style="width: 300px"
          filled
          label="Service"
          v-model="selectedService"
          :options="serviceOptions" />
      </li>
      <li v-if="selectedService.value === 'local'">
        <q-select style="width: 300px" filled label="Platform" v-model="selectedPlatform" :options="platformOptions" />
      </li>
      <li v-else-if="selectedService.value === 'cloud'">
        <q-select style="width: 300px" filled label="Cloud Provider" v-model="selectedDeploy" :options="deployOptions" />
      </li>
    </ul>
    <div class="service-tabs-container">
      <div class="service-options">
        <div :class="selectedService.value === 'local' ? 'service-cluster-option active' : 'service-cluster-option'"
          @click="() => selectedService = serviceOptions[0]"
        >
          <h3>Local Install</h3>
          <h2>Download</h2>
        </div>
        <div :class="selectedService.value === 'cloud' ? 'service-cluster-option active' : 'service-cluster-option'"
          @click="() => selectedService = serviceOptions[1]"
        >
          <h3>Multi-node cluster</h3>
          <h2>Deploy</h2>
        </div>
        <div :class="selectedService.value === 'managed' ? 'service-cluster-option active' : 'service-cluster-option'"
          @click="() => selectedService = serviceOptions[2]"
        >
          <h3>Fully Managed Service</h3>
          <h2>Sign up</h2>
        </div>
      </div>
    </div>
    <div v-if="selectedService.value === 'local'" id="local-cluster-content" class="content">
      <div class="os-selection-container">
        <yb-button label="MacOS" :active="selectedPlatform.value === 'macos'" v-bind:handleClick="() => handleSelectSection(this.platformOptions[0])">
          <img src="../assets/macos-icon.svg" />
        </yb-button>
        <yb-button label="Linux" :active="selectedPlatform.value === 'linux'" v-bind:handleClick="() => handleSelectSection(this.platformOptions[1])">
          <img src="../assets/linux-icon.svg" />
        </yb-button>
        <yb-button label="Kubernetes" :active="selectedPlatform.value === 'kubernetes'" v-bind:handleClick="() => handleSelectSection(this.platformOptions[2])">
          <img src="../assets/kubernetes-icon.svg" />
        </yb-button>
        <yb-button label="Docker" :active="selectedPlatform.value === 'docker'" v-bind:handleClick="() => handleSelectSection(this.platformOptions[3])">
          <img src="../assets/docker-icon.png" />
        </yb-button>
      </div>

      <div class="os-install-content">
        <mac-install v-if="selectedPlatform.value === 'macos'"></mac-install>
        <linux-install v-if="selectedPlatform.value === 'linux'"></linux-install>
        <kubernetes-install v-if="selectedPlatform.value === 'kubernetes'"></kubernetes-install>
        <docker-install v-if="selectedPlatform.value === 'docker'"></docker-install>
      </div>

    </div>
    <div v-else-if="selectedService.value === 'cloud'" id="cloud-cluster-content" class="content">
      <div class="cloud-selection-container">
        <div>
          <q-btn :ripple="false" class="testing" id="aws-header-btn"
            :class="selectedDeploy.value === 'aws' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            v-on:click="handleSelectSection(deployOptions[0])"
          >
            <div><img width="95" src="../assets/aws-logo-black.png" /></div>
          </q-btn>
        </div>
        <div>
          <q-btn :ripple="false" id="gcp-header-btn"
            :class="selectedDeploy.value === 'gcp' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            v-on:click="handleSelectSection(deployOptions[1])"
          >
            <img width="200" src="../assets/gcp-logo.svg" />
          </q-btn>
        </div>
        <div>
          <q-btn :ripple="false" id="azure-header-btn"
            :class="selectedDeploy.value === 'azure' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            v-on:click="handleSelectSection(deployOptions[2])"
          >
            <img width="220" src="../assets/azure-logo-small.png" />
          </q-btn>
        </div>
        <div>
          <q-btn :ripple="false" id="pivotal-header-btn"
            :class="selectedDeploy.value === 'pivotal' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            v-on:click="handleSelectSection(deployOptions[3])"
          >
            <div><img width="150" src="../assets/pivotal.svg" /></div>
          </q-btn>
        </div>
      </div>

      <div class="os-install-content">
        <aws-deploy v-if="selectedDeploy.value === 'aws'"></aws-deploy>
        <gcp-deploy v-if="selectedDeploy.value === 'gcp'"></gcp-deploy>
        <azure-deploy v-if="selectedDeploy.value === 'azure'"></azure-deploy>
        <pivotal-deploy v-if="selectedDeploy.value === 'pivotal'"></pivotal-deploy>
      </div>
    </div>
    <div v-else id="managed-cluster-content" class="content">
      <div class="managed-cluster-container">
        <div>
          <p>Want to learn more about our fully managed clusters?</p>
          <p>Click the Sign Up to be redirected.</p>
        </div>
        <a href="https://yugabyte.com/cloud" target="_blank">
          <q-btn label="Sign up"></q-btn>
        </a>
      </div>
    </div>
  </q-page>
</template>

<script>
import MacInstall from 'components/MacInstall'
import LinuxInstall from 'components/LinuxInstall'
import DockerInstall from 'components/DockerInstall'
import KubernetesInstall from 'components/KubernetesInstall'
import AWSDeploy from 'components/AWSDeploy'
import GCPDeploy from 'components/GCPDeploy'
import AzureDeploy from 'components/AzureDeploy'
import PivotalDeploy from 'components/PivotalDeploy'
import YBButton from 'components/YBButton'

import { event } from 'vue-analytics'

export default {
  name: 'PageIndex',
  data: function () {
    return {
      selectedService: {
        label: 'Local Install',
        value: 'local'
      },
      selectedPlatform: {
        label: 'MacOS',
        value: 'macos'
      },
      selectedDeploy: {
        label: 'Amazon Web Services',
        value: 'aws'
      },
      serviceOptions: [
        {
          label: 'Local Install',
          value: 'local'
        },
        {
          label: 'Multi-Node Cluster',
          value: 'cloud'
        },
        {
          label: 'Fully Managed Service',
          value: 'managed'
        }
      ],
      platformOptions: [
        {
          label: 'MacOS',
          value: 'macos'
        },
        {
          label: 'Linux',
          value: 'linux'
        },
        {
          label: 'Kubernetes',
          value: 'kubernetes'
        },
        {
          label: 'Docker',
          value: 'docker'
        }
      ],
      deployOptions: [
        {
          label: 'Amazon Web Services',
          value: 'aws'
        },
        {
          label: 'Google Cloud Platform',
          value: 'gcp'
        },
        {
          label: 'Microsoft Azure',
          value: 'azure'
        },
        {
          label: 'Pivotal',
          value: 'pivotal'
        }
      ]
    }
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
    'pivotal-deploy': PivotalDeploy
  },
  methods: {
    handleSelectSection: function (section) {
      if (this.selectedService.value === 'local') {
        this.selectedPlatform = section
      } else {
        this.selectedDeploy = section
      }

      event({
        eventCategory: 'Install-Page',
        eventAction: `click.${this.selectedService.value}.${section.value}`,
        eventLabel: `User clicked ${section.value} section button`
      })
    }
  }
}
</script>

<style>
.content {
  text-align: center;
  width: 100%;
  padding-bottom: 180px;
  padding-top: 30px;
  box-shadow: 0 0 30px 0 rgba(57, 84, 109, 0.14);
}
.hero-overview {
  padding: 60px 0 20px;
}
.overview-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
}
.q-panel > div {
  height: 100%;
  min-width: 100%;
  width: fit-content;
}
.bg-form {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 60px;
}
.service-options {
  display: flex;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .overview-container, .service-options {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .overview-container, .service-options {
      width: 970px;
  }
}
@media (min-width: 1200px) {
  .overview-container, .service-options {
    width: 1170px;
  }
}

.overview-container h1 {
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  line-height: 70px;
}
h3.overview-statement {
  color: #f75821;
  font-size: 18px !important;
  line-height: 1.78 !important;
  text-transform: uppercase;
  padding: 0;
  letter-spacing: 2px;
  font-weight: 400;
  margin: 0;
}
.os-selection-container {
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 60px;
}
@media (max-width: 850px) {
  .os-selection-container {
    padding-left: 30px;
    padding-right: 30px;
  }
}
#dropdown-options-container {
  max-width: 500px;
  margin-bottom: 30px;
  list-style: none;
  padding-left: 0;
  display: none;
}
#dropdown-options-container li {
  margin-bottom: 15px;
}
.service-tabs-container {
  width: 100%;
}
#cloud-cluster-content .cloud-selection-container {
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 40px auto;
  padding-bottom: 10px;
  padding-top: 10px;
}
@media (max-width: 1150px) {
  #cloud-cluster-content .cloud-selection-container {
    overflow-x: scroll;
  }
}
@media (max-width: 632px) {
  #dropdown-options-container {
    display: block;
  }
  .os-selection-container, #cloud-cluster-content .cloud-selection-container {
    display: none;
  }
  .service-tabs-container {
    display: none;
  }
}
.os-install-content {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}
.service-cluster-option {
  background: #fafafa;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  border-top: 1px solid #eee;
  color: grey;
  padding: 30px 12px;
  text-align: center;
  width: 50%;
}
.service-cluster-option.active {
  background: #fff;
  -webkit-box-shadow: 0px -5px 20px -5px rgba(57, 84, 109, 0.14);
  -moz-box-shadow: 0px -5px 20px -5px rgba(57, 84, 109, 0.14);
  box-shadow: 0px -5px 20px -5px rgba(57, 84, 109, 0.14);
  position: relative;
  z-index: 1;
}
.service-cluster-option h3 {
  font-size: 18px;
  color: grey;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.service-cluster-option h2 {
  color: grey;
  padding: 0;
  font-size: 38px;
  font-weight: 700;
  line-height: 48px;
  margin: 0;
  margin-bottom: 8px;
  cursor: pointer;
}
.service-cluster-option.active h2{
  color: #0064b8;
}
.deploy-header {
  background-color: #fff;
  height: 60px;
  width: 500px;
  display: flex;
  align-items: center;
  padding: 15px 0;
  position: relative;
  margin-bottom: 8px;
}
.cloud-providers-container {
  padding: 15px;
  min-width: 250px;
  margin-left: 15px;
  margin-right: 15px;
  height: 97px;
}
/* Overrides Quasar */
.cloud-selection-container button {
  -webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
  border: 1px solid #e2e2e2;
}
#gcp-header-btn {
  padding-top: 18px;
  height: 97px;
}
#aws-header-btn img {
  margin-top: 5px;
}
#pivotal-header-btn img {
  margin-top: 15px;
}
.cloud-providers-container.active {
  border: 1px solid #f75721;
}
.managed-cluster-container {
  min-height: 380px;
  padding-top: 70px;
  font-size: 18px;
}
</style>
