<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <a href="/news1">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myNews',
  data() {
    return {
      newsList: [
        { id: '001', title: '新闻001' },
        { id: '002', title: '新闻002' },
        { id: '003', title: '新闻003' },
      ]
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
