<template>
  <div>
    <h2 class="headers">Environmental Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/resource"
      >Next</nuxt-link
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
          component: "h2",
          children: "Environmental and Social Assessment and Management Systems"
        },
        {
          type: "select",
          label: "Does the company have an Environmental Management Policy? ",
          name: "env_policy",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Identification Process of Risk and Impact(EIA)",
          name: "risk_and_impact",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Environmental Management Programme",
          name: "management_programme",
          validation: "required",
          validationName: "Management Programme",
          help: "Policies/Approved Documentation",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Response",
          name: "response",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Competency",
          name: "competency",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Stakeholder Engagements",
          name: "engagements",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Monitoring and Review",
          name: "review",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          component: "h2",
          children: "Environmental Licenses"
        },
        {
          type: "select",
          label: "Air Quality",
          name: "air_quality",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Water",
          name: "water",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Hazardous Substances (Storage, Transportation, Disposal)",
          name: "hazardous",
          validation: "required",
          help:
            "The National Environmental Management Act No 107 of 1998, National Water Act 36 of 1998, NAtional Environment Management: Waste Act 59 of 2008, National Ait Quality Act 39 of 2004 and The National Environment Management ",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Biodiversity",
          name: "bio",
          validation: "required",
          help: "Biodiversity Act 10 of 2004",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Environmental (i.e EIA/EA/EMPr)",
          name: "env",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Waste",
          name: "waste",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
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
