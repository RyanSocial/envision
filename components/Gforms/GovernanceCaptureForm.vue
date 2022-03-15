<template>
  <div>
    <h2 class="headers">Governance Capture Form</h2>
    <FormulateForm
      class="grid grid-cols-1 gap-6 m-6 sm:grid-cols-2 md:grid-cols-3"
      v-model="values"
      :schema="schema"
      :disabled="setDisabled"
    />
    <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/board">Next</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setDisabled: true,
      values: {},
      schema: [
        {
          type: "select",
          label: "Is there a Board Charter?",
          name: "board_charter",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Is there an MOI?",
          name: "moi",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "Please Specify any other board mandates",
          name: "board_mandates",
          help: "Charters, Responsibilities, Governance and other components"
        },
        {
          type: "select",
          label: "The company has a strategy approved by the board",
          name: "company_strategy",
          help: "",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "Refer to the next tab",
          name: "tab"
        },

        {
          type: "select",
          label:
            "Does the company have a dedicated company secretary or company that provides secretariat services?",
          name: "company_secretary",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label:
            "Does the company have a formal induction programme for new directors?",
          name: "induction",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Is there a training programme in place for the directors?",
          name: "training_programme",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Identify the focus areas for the directors training",
          name: "directors_training",
          help:
            "Decision Making, Communication, Leadership, Management, Technical, Completence, Other",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "Evaluation, Conducted by and Frequency",
          name: "monthly",
          help: "Monthly, "
        },
        {
          type: "text",
          label: "Evaluation, Conducted by and Frequency",
          name: "quarterly",
          help: " Quarterly"
        },
        {
          type: "text",
          label: "Evaluation, Conducted by and Frequency",
          name: "semi_annually",
          help: " Semi-Annually"
        },
        {
          type: "text",
          label: "Evaluation, Conducted by and Frequency",
          name: "annually",
          help: " Annually"
        },
        {
          type: "select",
          label: "Does the company pay any remuneration to the board members?",
          name: "remuneration",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "How does the board determine directors remuneration?",
          name: "directors_remuneration"
        },
        {
          type: "select",
          label: "Risk Management Strategy",
          name: "risk_management",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label:
            "Key company risks which have been identified with a mitigation plan?",
          name: "mitigation_plan",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label:
            "Company keeps a risks register that is monitored by the board?",
          name: "risks_register",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "How often does the board review the risk register?",
          name: "board_risks"
        },
        {
          type: "text",
          label:
            "Are undue, unexpected or unusual risks disclosed in the integrated report?",
          name: "unusual_risks"
        },
        {
          type: "select",
          label:
            "Are ESG Risks/ Matters discussed during the board meetings? If yes provide details",
          name: "esg",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "Details",
          name: "details"
        },
        {
          type: "select",
          label: "Political Donations",
          name: "political_donations",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Anti-Competitive Practice",
          name: "anti_competitive_practice",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Delegation Authority",
          name: "delegation_authority",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Anti-Corruption",
          name: "anti_corruption",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Gift Policy",
          name: "gift_policy",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "select",
          label: "Succession Planning Policy",
          name: "succession_planing",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "If no, how is succession planning managed in the company",
          name: "succession"
        },
        {
          type: "text",
          label: "Refer to tab activity 1b",
          name: "1b"
        },
        {
          type: "select",
          label: "Disclosure of the executive pay?",
          name: "executive_pay",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "Prosecutions, legal contraventions, judgements and fines",
          name: "prosecutions"
        },
        {
          type: "text",
          label: "Procurement practice",
          name: "procurement"
        },
        {
          type: "text",
          label: "Anti-competitive behaviour",
          name: "anti_competitive"
        },
        {
          type: "text",
          label: "Payment to Political Parties",
          name: "political_parties"
        },
        {
          type: "text",
          label: "Stakeholders engagements",
          name: "stakeholders"
        },
        {
          type: "text",
          label: "Consumer treatment",
          name: "consumer"
        },
        {
          type: "select",
          label: "Internal audit department",
          name: "internal_audit_department",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]
        },
        {
          type: "text",
          label: "External audit",
          name: "external_audit",
          help: "List with names of common companies e.g Grant Thornton, KPMG"
        },
        {
          type: "text",
          label: "Partner",
          name: "partner"
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
