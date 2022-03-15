<template>
  <div>
    <h2 class="headers">Skills Development Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-2 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/education"
      >Prev</nuxt-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: {},
      schema: [
        {
          type: "text",
          label: "Project 1",
          name: "project_1",
          help: "SD"
        },
        {
          type: "text",
          label: "Project 2",
          name: "project_2",
          help: "SD"
        },
        {
          type: "text",
          label: "Project 3",
          name: "project_3",
          help: "SD"
        },
        {
          type: "text",
          label: "Project 4",
          name: "project_4",
          help: "SD"
        },
        {
          type: "text",
          label: "Project 5",
          name: "project_5",
          help: "SD"
        },
        {
          type: "text",
          label: "Project 6",
          name: "project_6",
          help: "SD"
        },

        {
          type: "submit",
          label: "Submit"
        }
      ]
    };
  }
};
</script>

<style></style>
