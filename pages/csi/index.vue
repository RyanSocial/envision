<template>
  <div>
    <h2 class="headers">CSI Projects Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-2 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <div class="flex">
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/training"
        >Prev</nuxt-link
      >
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/health"
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
        // {
        //   component: "h3",
        //   children: "CSI/CSR Spend"
        // },
        {
          type: "text",
          label: "Total amount spent on CSI for this period",
          name: "amount_spent",
          help:
            "CSI/CSR Spend (Indicate percentage corporate social investment/corporate social responsibility spend by the)"
        },
        {
          type: "text",
          label: "Specify whether as: % of turnover OR % of the Net after Tax",
          name: "turnover",
          help:
            "CSI/CSR Spend (Indicate percentage corporate social investment/corporate social responsibility spend by the)"
        },
        {
          type: "text",
          label: "Sector where the money is invested and name of projects",
          name: "money_invested",
          help:
            "CSI/CSR Spend (Indicate percentage corporate social investment/corporate social responsibility spend by the)"
        },

        {
          type: "text",
          label: "Project 1",
          name: "project_1",
          help: "CSI Project and Impact"
        },
        {
          type: "text",
          label: "Project 2",
          name: "project_2",
          help: "CSI Project and Impact"
        },
        {
          type: "text",
          label: "Project 3",
          name: "project_3",
          help: "CSI Project and Impact"
        },
        {
          type: "text",
          label: "Project 4",
          name: "project_4",
          help: "CSI Project and Impact"
        },
        {
          type: "text",
          label: "Project 5",
          name: "project_5",
          help: "CSI Project and Impact"
        },
        {
          type: "text",
          label: "Project 6",
          name: "project_6",
          help: "CSI Project and Impact"
        },
        {
          type: "text",
          label: "Project 7",
          name: "project_7",
          help: "CSI Project and Impact"
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
