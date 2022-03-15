<template>
  <div>
    <h2 class="headers">Regulatory & Risk Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />

      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/resource"
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
          component: "h2",
          children: "International Regulations"
        },
        {
          type: "number",
          label: "ISO (Specify) ",
          name: "iso",
          validation: "required",
          help: "International and Regional Standard (Voluntary)"
        },
        {
          type: "number",
          label: "GLOBAL G.A.P ",
          name: "global",
          validation: "required",
          help: "International and Regional Standard (Voluntary)"
        },
        {
          type: "number",
          label: "IFC Performance Standards ",
          name: "ifc",
          validation: "required",
          help: "International and Regional Standard (Voluntary)"
        },
        {
          type: "number",
          label: "Other(Specify) ",
          name: "other",
          validation: "required",
          help: "International and Regional Standard (Voluntary)"
        },
        {
          component: "h2",
          children: "Environmental Risk Management"
        },
        {
          type: "select",
          label:
            "Environmental audit report(s) conducted over the last 5 years (both internal and external) ",
          name: "report",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label:
            "Any Environmental penalty/fin (Outline the conduct and stipulate the penalty) ",
          name: "penalty",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Does the company have the strategy on climate change?",
          name: "climate_change",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Any sign of contaminated land, Attach report if Available ",
          name: "land",
          validation: "required",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Land under company charge? Area (Ha) lease or owned ",
          name: "company_charge",
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
