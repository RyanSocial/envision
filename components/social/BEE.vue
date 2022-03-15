<template>
  <div>
    <h1 class="headers">BEE Information</h1>
    <FormulateForm
      class="form"
      :schema="schema"
      v-model="formValues"
      @submit="handleSubmit"
    >
      <nuxt-link class="text-blue-600 " to="/indirectjobs">Prev</nuxt-link>
    </FormulateForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
      schema: [
        {
          type: "group",
          repeatable: true,
          name: "bee",
          addLabel: "+ Add New Field",
          children: [
            {
              name: "companies_contracted",
              label: "Companies Contracted",
              type: "number",
              "outer-class": ["col-span-3", "md:col-span-3"]
            },
            {
              name: "bee",
              label: "BEE Levels",
              placeholder: "Select BEE level",
              type: "select",
              options: [
                { label: "Level 1", value: "Level 1" },
                { label: "Level 2", value: "Level 2" },
                { label: "Level 3", value: "Level 3" },
                { label: "Level 4", value: "Level 4" },
                { label: "Level 5", value: "Level 5" },
                { label: "Level 6", value: "Level 6" },
                { label: "Level 7", value: "Level 7" },
                { label: "Level 8", value: "Level 8" },
                { label: "Level 9", value: "Level 9" }
              ],
              "outer-class": ["col-span-3", "md:col-span-3"]
            },
            {
              name: "companies_sub_contracted",
              label: "Number of Companies Sub-Contracted",
              placeholder: "Total",
              type: "number",
              "outer-class": ["col-span-3", "md:col-span-3"]
            }
          ]
        },
        {
          type: "submit",
          label: "Save"
        }
      ]
    };
  },
  methods: {
    handleSubmit() {}
  }
};
</script>

<style></style>
