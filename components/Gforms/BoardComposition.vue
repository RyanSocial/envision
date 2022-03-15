<template>
  <div>
    <h2 class="headers">Board Composition Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <div class="flex">
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/governance"
        >Prev</nuxt-link
      >
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/executive"
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
          type: "group",
          repeatable: true,
          label: "Board Composition (Gov. 5 - Gov. 13)",
          name: "board_composition",
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
              type: "text",
              label: "ID Number",
              name: "id_number",
              validationName: "ID Number",
              validation: "required"
              // errorBehavior: "live"
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
              label: "Nationality",
              name: "nationality",
              options: [
                { label: "South African", value: "South African" },
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
              label: "Company Status",
              name: "company_status",
              validationName: "Company Status",
              validation: "required"
            },
            {
              type: "text",
              label: "Position",
              name: "position",
              validation: "required",
              help: "List CEO, General Manager, CFO, Managing Director, Other"
            },
            {
              type: "number",
              label: "Number of Board Meetings Attended",
              name: "board_meetings",
              validation: "required",
              validationName: "Board Meetings",
              help: "1,2,3,4,5,6,7 to 20"
            },
            {
              type: "date",
              label: "Date Appointed",
              name: "date",
              validation: "required"
            },
            {
              type: "text",
              label: "Other Directorship",
              name: "directorship",
              validation: "required"
            },
            {
              type: "text",
              label: "Board Committees",
              name: "committees",
              validation: "required"
            },
            {
              type: "text",
              label: "Position on Board Committees",
              name: "board_committees",
              validationName: "Board Committees",
              validation: "required"
            },
            {
              type: "number",
              label: "Number of Meetings Attended",
              name: "meetings_attended",
              validation: "required",
              validationName: "Meetings Attended",
              help: "1,2,3,4,5,6,7 to 20"
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
