<template>
  <div>
    <h2 class="headers">Executive Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/board">Prev</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: {},
      schema: [
        {
          type: "group",
          repeatable: true,
          label: "Executive Management (Gov. 38 - Gov. 50)",
          name: "executive_management",
          addLabel: "+ Add Data",
          children: [
            {
              type: "text",
              label: "Name",
              name: "name",
              validation: "required"
            },
            {
              type: "text",
              label: "Surname",
              name: "surname",
              validation: "required"
            },
            {
              type: "select",
              label: "Gender",
              name: "gender",
              options: [
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" }
              ]
            },
            {
              type: "select",
              label: "Race",
              name: "race",
              options: [
                { label: "White", value: "White" },
                { label: "Black", value: "Black" },
                { label: "Asian", value: "Asian" },
                { label: "Other", value: "Other" }
              ]
            },
            {
              type: "text",
              label: "Qualification and Skills",
              name: "qualification",
              validation: "required",
              help:
                "Qualification Levels (BSc/Bcom, Honours, MSc/MA/LLM, PHD/MBA)"
            },

            {
              type: "text",
              label: "Position",
              name: "position",
              validation: "required",
              help: "List CEO, General Manager, CFO, Managing Director, Other"
            },
            {
              type: "text",
              label: "Experience",
              name: "experience",
              validation: "required"
            }
          ]
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
