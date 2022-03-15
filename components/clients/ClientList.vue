<template>
  <div>
    <h1>Client component</h1>
    <ul>
      <li v-for="client in clients" :key="client.id">
        <p>{{ client.name }}</p>
        <p>{{ client.status }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        { name: "Vodacom", Id: 1, status: "complete" },
        { name: "MTN", Id: 2, status: "checking" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
