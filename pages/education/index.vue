<template>
  <div>
    <h2 class="headers">Education & Development Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-2 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
     <div class="flex">
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/health"
        >Prev</nuxt-link
      >
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/skills"
        >Next</nuxt-link
      >
    </div>
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
          label: "Option 1",
          name: "option_1"
        },
        {
          type: "text",
          label: "Option 2",
          name: "option_2"
        },
        {
          type: "text",
          label: "Option 3",
          name: "option_3"
        },
        {
          type: "text",
          label: "Option 4",
          name: "option_4"
        },
        {
          type: "text",
          label: "Option  5",
          name: "option_5"
        },
        {
          type: "text",
          label: "Option 6",
          name: "option_6"
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
