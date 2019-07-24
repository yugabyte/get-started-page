<template>
  <q-list>
    <q-item clickable v-ripple>
      <a href="https://docs.yugabyte.com/" class="yb-nav-links"  target="_blank" rel="noopener">
        <q-item-section>
          <q-item-label>DOCS</q-item-label>
        </q-item-section>
      </a>
    </q-item>

    <q-item clickable v-ripple>
      <a href="https://blog.yugabyte.com/" class="yb-nav-links" target="_blank" rel="noopener" >
        <q-item-section>
          <q-item-label>BLOG</q-item-label>
        </q-item-section>
      </a>
    </q-item>

    <q-item clickable v-ripple>
      <a href="/" class="yb-nav-links" rel="noopener" >
        <q-item-section>
          <q-item-label>DOWNLOAD</q-item-label>
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
