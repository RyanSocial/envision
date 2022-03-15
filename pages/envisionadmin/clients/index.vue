<template>
  <div>
    <StripedTable :people="people" />
  </div>
</template>

<script>
import ClientList from "@/components/clients/ClientList.vue";
import StripedTable from "@/components/tables/StripedTable.vue";
export default {
  components: {
    ClientList,
    StripedTable
  },
  data() {
    return {
      people: [
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member"
        }
      ],
      headers: {}
    };
  }
};
</script>

<style lang="scss" scoped></style>
