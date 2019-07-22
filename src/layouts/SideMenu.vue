<template>
  <q-list>
    <q-item clickable v-ripple>
      <a href="https://docs.yugabyte.com/" class="yb-nav-links"  target="_blank" rel="noopener">
        <q-item-section>
          <q-item-label>Docs</q-item-label>
          <q-item-label caption>In-depth documentation about our tech</q-item-label>
        </q-item-section>
      </a>
    </q-item>

    <q-expansion-item
      expand-separator
      label="Resources"
      caption="Interact with our community of users"
    >
      <q-card>
        <q-list style="min-width: 100px">
          <q-item clickable>
            <a title="Github" class="yb-nav-links" target="_blank" rel="noopener" href="https://github.com/YugaByte/yugabyte-db">
              <q-item-section>Github</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Forum" class="yb-nav-links" target="_blank" rel="noopener" href="https://forum.yugabyte.com/">
              <q-item-section>Forum</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Slack" class="yb-nav-links" target="_blank" rel="noopener" href="http://yugabyte.com/slack">
              <q-item-section>Slack</q-item-section>
            </a>
          </q-item>
          <q-item clickable>
            <a title="Stack Overflow" class="yb-nav-links" target="_blank" rel="noopener" href="https://stackoverflow.com/questions/tagged/yugabyte-db">
              <q-item-section>Stack Overflow</q-item-section>
            </a>
          </q-item>
        </q-list>
      </q-card>
    </q-expansion-item>

    <q-item clickable v-ripple>
      <a href="https://blog.yugabyte.com/" class="yb-nav-links" target="_blank" rel="noopener" >
        <q-item-section>
          <q-item-label>Blog</q-item-label>
          <q-item-label caption>Keep up-to-date with our company</q-item-label>
        </q-item-section>
      </a>
    </q-item>
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
