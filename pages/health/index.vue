<template>
  <div>
    <h2 class="headers">Health & Safety Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-4 m-6"
      v-model="values"
      :schema="schema"
    />
    <div class="flex">
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/csi"
        >Prev</nuxt-link
      >
      <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/education"
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
          children: "Health and Safety Policy"
        },
        {
          type: "select",
          label: "Does the company have a health and safety policy ",
          name: "safety_policy",
          validation: "required",
          help: "Soc.1",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          component: "h2",
          children: "Injuries & fatalities"
        },
        {
          type: "number",
          label:
            "Number of people trained on health and safety for this period ",
          name: "number_of_people",
          validationName: "Number of People",
          validation: "required",
          help: "Soc.2"
        },
        {
          type: "number",
          label:
            "Number of health and safety incidents (as per incidents register) for this period ",
          name: "number_of_incidents",
          validationName: "Number of Incidents",
          validation: "required",
          help: "Soc.3"
        },
        {
          type: "number",
          label: "Severity of incident ",
          name: "severity",
          validation: "required",
          help: "Soc.4"
        },
        {
          type: "number",
          label: "Major",
          name: "major",
          validation: "required",
          help: "Soc.4"
        },
        {
          type: "number",
          label: "Moderate ",
          name: "moderate",
          validation: "required",
          help: "Soc.4"
        },
        {
          type: "number",
          label: "Minor ",
          name: "minor",
          validation: "required",
          help: "Soc.4"
        },
        {
          type: "number",
          label: "Number of fatalities for the period i.e.Q1 2021",
          name: "fatalities",
          validation: "required",
          help: "Soc.5"
        },
        {
          type: "number",
          label: "Number of Covid cases for the period i.e.Q1 2021",
          name: "covid",
          validation: "required",
          help: "Soc.6"
        },
        {
          type: "text",
          label:
            "Occupation screening done for the period (i.e Air Quality, Ergonomics, Hazardous Chemical Substances, Noise, etc)",
          name: "screening",
          validation: "required",
          help: "Soc.7"
        },
        {
          type: "text",
          label:
            "Occupation diseases recorded (i.e. noise induced hearing loss, pneumatosis, ect) for the period i.e.Q1 2021",
          name: "diseases",
          validation: "required",
          help: "Soc.8"
        },
        {
          type: "number",
          label: "Lost time injury (LTI)",
          name: "time",
          validation: "required",
          help: "Soc.9"
        },
        {
          type: "number",
          label:
            "Lost time injury frequency rate (LTIFR) for the period i.e Q1 2021",
          name: "frequency",
          validation: "required",
          help: "Soc.10"
        },
        {
          type: "number",
          label: "Number of claims as a results of workplace injuries",
          name: "claims",
          validation: "required",
          help: "Soc.11"
        },
        {
          type: "number",
          label:
            "Percentage (%) of claims that was declined and reason for declined",
          name: "claims_declined",
          validation: "required",
          help: "Soc.11"
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
