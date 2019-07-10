<template>
  <q-page class="flex flex-center">
    <section class="hero-overview">
      <div class="overview-container">
        <h3 class="overview-statement">The leading high-performance distributed SQL database</h3>
        <h1>Get Started</h1>
      </div>
    </section>
    <div style="width: 100%">
      <div class="service-options">
        <div :class="selectedService === 'local' ? 'service-cluster-option active' : 'service-cluster-option'"
          @click="() => selectedService = 'local'"
        >
          <h3>Try a local cluster</h3>
          <h2>Download</h2>
        </div>
        <div :class="selectedService === 'cloud' ? 'service-cluster-option active' : 'service-cluster-option'"
          @click="() => selectedService = 'cloud'"
        >
          <h3>Try multi-node cluster</h3>
          <h2>Cloud Platforms</h2>
        </div>
      </div>
    </div>
    <div v-if="selectedService === 'local'" id="local-cluster-content" class="content">
      <div class="os-selection-container">
        <yb-button label="MacOS" :active="selectedOS === 'macos'" v-bind:handleClick="() => selectedOS = 'macos'">
          <img src="../assets/macos-icon.svg" />
        </yb-button>
        <yb-button label="Linux" :active="selectedOS === 'linux'" v-bind:handleClick="() => selectedOS = 'linux'">
          <img src="../assets/linux-icon.svg" />
        </yb-button>
        <yb-button label="Kubernetes" :active="selectedOS === 'kubernetes'" v-bind:handleClick="() => selectedOS = 'kubernetes'">
          <img src="../assets/kubernetes-icon.svg" />
        </yb-button>
        <yb-button label="Docker" :active="selectedOS === 'docker'" v-bind:handleClick="() => selectedOS = 'docker'">
          <img src="../assets/docker-icon.png" />
        </yb-button>
      </div>

      <div class="os-install-content">
        <mac-install v-if="selectedOS === 'macos'"></mac-install>
        <linux-install v-if="selectedOS === 'linux'"></linux-install>
        <kubernetes-install v-if="selectedOS === 'kubernetes'"></kubernetes-install>
        <docker-install v-if="selectedOS === 'docker'"></docker-install>
      </div>

    </div>
    <div v-else id="cloud-cluster-content" class="content">
      <div class="cloud-selection-container">
        <div>
          <q-btn id="aws-header-btn"
            :class="selectedDeploy === 'aws' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            @click="() => selectedDeploy = 'aws'"
          >
            <div><img width="95" src="../assets/aws-logo-black.png" /></div>
          </q-btn>
        </div>
        <div>
          <q-btn id="gcp-header-btn"
            :class="selectedDeploy === 'gcp' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            @click="() => selectedDeploy = 'gcp'"
          >
            <img width="200" src="../assets/gcp-logo.svg" />
          </q-btn>
        </div>
        <div>
          <q-btn  id="azure-header-btn"
            :class="selectedDeploy === 'azure' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            @click="() => selectedDeploy = 'azure'"
          >
            <img width="220" src="../assets/azure-logo-small.png" />
          </q-btn>
        </div>
        <div>
          <q-btn id="pivotal-header-btn"
            :class="selectedDeploy === 'pivotal' ? 'cloud-providers-container active' : 'cloud-providers-container'"
            @click="() => selectedDeploy = 'pivotal'"
          >
            <div><img width="150" src="../assets/pivotal.svg" /></div>
          </q-btn>
        </div>
      </div>

      <div class="os-install-content">
        <aws-deploy v-if="selectedDeploy === 'aws'"></aws-deploy>
        <gcp-deploy v-if="selectedDeploy === 'gcp'"></gcp-deploy>
        <azure-deploy v-if="selectedDeploy === 'azure'"></azure-deploy>
        <pivotal-deploy v-if="selectedDeploy === 'pivotal'"></pivotal-deploy>
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

export default {
  name: 'PageIndex',
  data: function () {
    return {
      selectedService: 'local',
      selectedOS: 'macos',
      selectedDeploy: 'aws'
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
    handleSelectDeploy: function (deploy) {
      this.selectedDeploy = deploy
    }
  }
}
</script>

<style>
.content {
  text-align: center;
  width: 100%;
  padding-bottom: 180px;
  box-shadow: 0 0 30px 0 rgba(57, 84, 109, 0.14);
}
.hero-overview {
  padding: 90px 0 30px;
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
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 15px 0;
  margin-bottom: 30px;
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
#cloud-cluster-content .cloud-selection-container {
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 60px auto;
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
</style>
