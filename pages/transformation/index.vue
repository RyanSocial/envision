<template>
  <div>
    <h2 class="headers">Transformation Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
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
          children: "Transformation Policy"
        },
        {
          type: "select",
          label:
            "Does the company have a transformation strategy with clear target and timeframe?",
          name: "transformation_strategy",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          component: "h2",
          children: "BEE CERTIFICATE"
        },
        {
          type: "select",
          label: " Levels",
          name: "level_1",
          placeholder: "Select BEE Certificate Level",
          help: "status",
          options: [
            { label: "Level 1", value: "Level 1" },
            { label: "Level 2", value: "Level 2" },
            { label: "Level 3", value: "Level 3" },
            { label: "Level 4", value: "Level 4" },
            { label: "Level 5", value: "Level 5" },
            { label: "Level 6", value: "Level 6" },
            { label: "Level 7", value: "Level 7" },
            { label: "Level 8", value: "Level 8" }
          ]
        },

        {
          type: "select",
          label: "Non-Compliance",
          name: "non_compliance",
          help: "status",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "PBO",
          name: "pbo",
          help: "status",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },

        {
          component: "h2",
          children: "Ownership"
        },
        {
          type: "text",
          label: "Percentage(%) of Black Ownership",
          name: "black_ownership",
          help: "Black Ownership"
        },
        {
          type: "text",
          label: "Percentage(%) of Black Women Ownership",
          name: "black_women_ownership",
          help: "Black Ownership"
        },
        {
          type: "text",
          label: "Percentage(%) of Broad Based Black Empowerment Scheme",
          name: "black_empowerment",
          help: "Black Ownership"
        },
        {
          type: "text",
          label: "Percentage(%) of Employee Stock Ownership Scheme",
          name: "employee_stock",
          help: "Black Ownership"
        },
        {
          type: "text",
          label: "PIC BEE facilitator status used",
          name: "pic_bee",
          help: "Black Ownership"
        },
        {
          type: "text",
          label: "Risk Management Strategy",
          name: "risk_management_strategy",
          help: "Black Ownership"
        },
        {
          component: "h2",
          children: "Audit"
        },
        {
          type: "text",
          label:
            "Confirmation of current audit results (please send BEE Certificate) if different from what was sent in December 2020",
          name: "current_audit_results"
        },
        {
          component: "h2",
          children: "Sustainable Development Plan"
        },
        {
          type: "text",
          label: "Confirmation of your 2021 SD plans",
          name: "sd_plans"
        },
        {
          component: "h2",
          children: "Bursaries/ Internships  & Learnerships"
        },
        {
          type: "text",
          label:
            "Confirmation of number of bursaries/internships & learnerships delivered to date and any plans to add to this 2021",
          name: "bursaries"
        },
        {
          component: "h2",
          children: "Management Control"
        },
        {
          type: "text",
          label:
            "Management Control - please comment of any plans you have in regards to recruitment and succession plan",
          name: "management_control_plan"
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
