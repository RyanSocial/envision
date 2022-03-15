<template>
  <div>
    <h2 class="headers">Training & Development Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/csi">Next</nuxt-link>
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
          children: "Training and Development Policy"
        },
        {
          type: "select",
          label: "Does the company have training and development policy?",
          name: "development_policy",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          component: "h2",
          children: "Training and Skills Development for Staff"
        },
        {
          type: "text",
          label:
            "What is the Total Rand Value of training for the period i.e.Q1 2021",
          name: "total_rand_value",
          validation: "required",
          help: "Details on training and skills development"
        },
        {
          type: "text",
          label: "Demographic of people trained",
          name: "demographic",
          validation: "required",
          help: "Details on training and skills development"
        },
        {
          type: "text",
          label: "Number of people trained for the period i.e.Q1 2021",
          name: "people_trained",
          validation: "required",
          validationName: " Number of People Trained",
          help: "Details on training and skills development"
        },
        {
          type: "text",
          label:
            "What was the level of training provide (e.g NQF) and accreditation status (AgrisSETA)",
          name: "training_level",
          validation: "required",
          validationName: " Number of People Trained",
          help: "Details on training and skills development"
        },
        {
          type: "text",
          label: "Number of days in training for the period i.e.Q1 2021",
          name: "days_trained",
          validation: "required",
          validationName: " Number of days Trained",
          help: "Details on training and skills development"
        },
        {
          component: "h2",
          children: "Training and Skills Development for SMMEs"
        },
        {
          type: "select",
          label:
            "Total Rand Value of training spent for SMMEs this period i.e.Q1 2021",
          name: "rand_value",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Demographic of people trained",
          name: "demographic_of_people_trained",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label:
            "Number of people trained for SMMEs for this period i.e.Q1 2021",
          name: "people_trained_smme",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Total number of SMMEs trained for this period ",
          name: "SMMEs_trained",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Number of local SMMEs trained for this period ",
          name: "local_SMMEs_trained",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "Number of Black SMMEs trained for this period ",
          name: "black_SMMEs_trained",
          validation: "required",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)"
        },
        {
          type: "text",
          label: "Number of Women Owned BBBEE trained for this period ",
          name: "number_of_women_owned_bbbee",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)"
        },
        {
          type: "text",
          label: "Number of contracts awarded to SMMEs for this period ",
          name: "contracts",
          validation: "required",
          help:
            "Kindly provide details on training and skills development (as the end of the reporting period)"
        },
        {
          component: "h2",
          children: "Human Rights Principles"
        },
        {
          type: "text",
          label: "No child labour",
          name: "child_labour",
          validation: "required",
          help:
            "Does ths company have that policy to protect human right principles and ensure that they are adhered to"
        },
        {
          type: "text",
          label: "Anti-Discrimination",
          name: "discrimination",
          validation: "required"
        },
        {
          type: "text",
          label: "Access and protection of people with disabilities",
          name: "access",
          validation: "required"
        },
        {
          type: "text",
          label: "HIV/AIDS Policy",
          name: "HIV_policy",
          validation: "required"
        },
        {
          type: "text",
          label: "Forced Labour Practice",
          name: "forced_labour",
          validation: "required"
        },
        {
          type: "text",
          label: "Sexual Harassment Policy",
          name: "harassment",
          validation: "required"
        },
        {
          type: "text",
          label:
            "Support and Respect for protection of other human rights principles",
          name: "human_rights",
          validation: "required"
        },
        {
          type: "select",
          label:
            "Does the company have a policy to ensure that the human rights principles are adhered to through their supply chain  ",
          name: "company_policy",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          component: "h2",
          children: "Community and Stakeholder engagements"
        },
        {
          type: "text",
          label: "Public participation process",
          name: "participation_process",
          validation: "required",
          help:
            "Kindly indicate the company strategy to manage local communities and the other company stakeholders"
        },
        {
          type: "text",
          label: "Managing community Expectation",
          name: "community_expectation",
          validation: "required"
        },
        {
          type: "text",
          label: "Strategy to address community health and safety",
          name: "community_expectation",
          validation: "required"
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
