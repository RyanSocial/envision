<template>
  <div>
    <h1 class="headers">Number of Construction Jobs per Category</h1>
    <FormulateForm
      class="form"
      :schema="schema"
      v-model="formValues"
      @submit="handleSubmit"
    >
      <div class="inline-block">
        <nuxt-link class="text-blue-600 " to="/joblosses">Prev</nuxt-link>
        <nuxt-link class="ml-12 text-blue-600 " to="/indirectjobs"
          >Next</nuxt-link
        >
      </div>
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
          name: "construction_jobs",
          addLabel: "+ Add New Field",
          children: [
            {
              name: "total_Construction_jobs",
              placeholder: "Enter Number of Construction Jobs",
              label: "Number of Construction Jobs",
              type: "number",
              "outer-class": ["col-span-6", "md:col-span-12"]
            },
            {
              name: "categories",
              label: "Categories/Options",
              placeholder: "Select Category",
              type: "select",
              "outer-class": ["col-span-6", "md:col-span-12"],
              options: [
                { label: "Executive", value: "Executive" },
                { label: "Senior Management", value: "Senior Management" },
                { label: "Middle Management", value: "Middle Management" },
                { label: "Professionals", value: "Professionals" },
                { label: "Skilled", value: "Skilled" },
                { label: "Unskilled", value: "Unskilled" },
                {
                  label: "Local Jobs(50KM Radius)",
                  value: "Local Jobs(50KM Radius)"
                },
                { label: "Consultant", value: "Consultant" },
                { label: "Total(Permanent)", value: "Total(Permanent)" }
              ]
            },
            {
              name: "question",
              label: "Question",
              placeholder: "Select Question",
              type: "select",
              "outer-class": ["col-span-6", "md:col-span-3"],
              options: [
                {
                  label: "Permanent-Contracted Company",
                  value: "Permanent-Contracted Company"
                },
                { label: "Temporary", value: "Temporary" }
              ]
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
