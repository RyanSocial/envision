<template>
  <div>
    <h2 class="headers">Resource Efficiency Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <div class="flex">
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/environment"
        >Prev</nuxt-link
      >
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/regulatory"
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
          component: "h2",
          children: "Resource Efficiency"
        },
        {
          type: "number",
          label: "Are there fuel management and cost controls in place? ",
          name: "fuel",
          validation: "required",
          help: "Fuel & hydrocarbon usage"
        },
        {
          type: "number",
          label: "Fuel & hydrocarbon usage ",
          name: "hydrocarbon",
          validation: "required",
          help: "Fuel & hydrocarbon usage"
        },
        {
          type: "number",
          label: "Petrol (litres) ",
          name: "petrol",
          validation: "required",
          help: "Fuel & hydrocarbon usage"
        },
        {
          type: "number",
          label: "Diesel (litres) ",
          name: "diesel",
          validation: "required",
          help: "Fuel & hydrocarbon usage"
        },
        {
          type: "number",
          label: "Heavy Oil fuel (litres) ",
          name: "oil",
          validation: "required",
          help: "Fuel & hydrocarbon usage"
        },
        {
          type: "number",
          label: "Reduction Strategy",
          name: "reduction",
          validation: "required",
          help: "Water Consumption"
        },
        {
          type: "number",
          label: "Portable Water (Litres)",
          name: "portable_water",
          validation: "required",
          help: "Water Consumption"
        },
        {
          type: "number",
          label: "Raw Water (Litres)",
          name: "raw_water",
          validation: "required",
          help: "Water Consumption"
        },
        {
          type: "number",
          label: "Grey Water (Litres)",
          name: "grey_water",
          validation: "required",
          help: "Water Consumption"
        },
        {
          type: "number",
          label: "Discharged Water (Litres)",
          name: "discharged_water",
          validation: "required",
          help: "Water Consumption"
        },
        {
          component: "h2",
          children: "Resource Efficiency and Pollution Prevention"
        },
        {
          type: "number",
          label:
            "Total amount of money spend on electricity for this period i.e.Q1 2021",
          name: "money",
          validation: "required",
          help: " Energy and Water Consumption"
        },
        {
          type: "number",
          label:
            "Total electricity consumption (kWh) for this period i.e.Q1 2021",
          name: "electricity",
          validation: "required",
          help: " Energy and Water Consumption"
        },
        {
          type: "number",
          label:
            "Total amount of money spend on water for this period i.e.Q1 2021",
          name: "money_on_water",
          validation: "required",
          help: " Energy and Water Consumption"
        },
        {
          type: "number",
          label:
            "Total water consumption in litres for this period i.e.Q1 2021",
          name: "water_consumption",
          validationName: "Water Consumption",
          validation: "required",
          help: " Energy and Water Consumption"
        },
        {
          type: "number",
          label: "General waste to landfill (kg) for this period i.e.Q1 2021",
          name: "landfill",
          validation: "required",
          help: " Waste"
        },
        {
          type: "number",
          label:
            "Hazardous waste to landfill/ Incinerator (kg) for this period i.e.Q1 2021",
          name: "hazardous_waste",
          validationName: "Hazardous Waste",
          validation: "required",
          help: " Waste"
        },
        {
          type: "number",
          label: "Recycled waste-general (kg) for this period i.e.Q1 2021",
          name: "recycled_waste",
          validationName: "Recycled Waste",
          validation: "required",
          help: " Waste"
        },
        {
          type: "number",
          label: "Recycled waste-hazardous (kg) for this period i.e.Q1 2021",
          name: "recycled_waste_hazardous",
          validationName: "Recycled Waste",
          validation: "required",
          help: " Waste"
        },
        {
          component: "h2",
          children: "Environmental Incidents"
        },
        {
          type: "number",
          label:
            "Number of environmental incidents (as per incident register) for this period i.e.Q1 2021",
          name: "env_incident",
          validationName: "Env Incident",
          validation: "required"
        },
        {
          type: "number",
          label: "Severity of Incident",
          name: "severity",
          validation: "required"
        },
        {
          type: "number",
          label: "Material",
          name: "material",
          validation: "required"
        },
        {
          type: "number",
          label: "Non-Material",
          name: "no_material",
          validationName: "Non Material",
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
