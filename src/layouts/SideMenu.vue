<template>
  <q-list>
    <q-item clickable v-ripple>
      <a href="https://www.yugabyte.com/enterprise-edition/" class="yb-nav-links"  target="_blank">
        <q-item-section>
          <q-item-label>Enterprise Edition</q-item-label>
          <q-item-label caption>Simplify Multi-Cloud Cluster Orchestration</q-item-label>
        </q-item-section>
      </a>
    </q-item>

    <q-item clickable v-ripple>
      <a href="https://www.yugabyte.com/community-edition/" class="yb-nav-links" target="_blank">
        <q-item-section>
          <q-item-label>Open Source Edition</q-item-label>
          <q-item-label caption>High performance, planet-scale SQL database</q-item-label>
        </q-item-section>
      </a>
    </q-item>

    <q-item clickable v-ripple>
      <a href="https://www.yugabyte.com/all-resources/case-studies/" class="yb-nav-links" target="_blank">
        <q-item-section>
          <q-item-label>Customer</q-item-label>
          <q-item-label caption>See our case studies</q-item-label>
        </q-item-section>
      </a>
    </q-item>

    <q-expansion-item
      expand-separator
      label="Use Cases"
      caption="How to use Yugabyte for your business"
    >
      <q-card>
        <q-list style="min-width: 100px">
          <q-item clickable>
            <a title="Globally Distributed Applications" class="yb-nav-links" target="_blank" href="https://www.yugabyte.com/globally-distributed-applications/">
              <q-item-section>
                Globally Distributed Applications
              </q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Real-Time Streaming &amp; Analytics" class="yb-nav-links" target="_blank" href="https://www.yugabyte.com/real-time-streaming-and-analytics/">
              <q-item-section>Real-Time Streaming &amp; Analytics</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Planet-Scale SQL" class="yb-nav-links" target="_blank" href="https://www.yugabyte.com/planet-scale-sql/">
              <q-item-section>Planet-Scale SQL</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Transactional NoSQL" class="yb-nav-links" target="_blank" href="https://www.yugabyte.com/transactional-nosql/">
              <q-item-section>Transactional NoSQL</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Distributed Transactional Key-Value Database" class="yb-nav-links" target="_blank" href="https://www.yugabyte.com/distributed-transactional-key-value-database/">
              <q-item-section>Distributed Transactional Key-Value Database</q-item-section>
            </a>
          </q-item>
        </q-list>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      label="Resources"
      caption="Discover helpful articles"
    >
      <q-card>
        <q-list style="min-width: 100px">
          <q-item clickable>
            <a title="Docs" class="yb-nav-links" target="_blank" href="https://docs.yugabyte.com/">
              <q-item-section>Docs</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Forum" class="yb-nav-links" target="_blank" href="https://forum.yugabyte.com/">
              <q-item-section>Forum</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Slack" class="yb-nav-links" target="_blank" href="http://yugabyte.com/slack">
              <q-item-section>Slack</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Blog" class="yb-nav-links" target="_blank" href="https://blog.yugabyte.com/">
              <q-item-section>Blog</q-item-section>
            </a>
          </q-item>
        </q-list>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style>
.yb-nav-links {
  text-decoration: none;
  color: inherit;
}
</style>
