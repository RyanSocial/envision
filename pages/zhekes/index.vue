<template>
  <div class="container px-5 py-5">
    <div class="grid grid-cols-1">
      <div v-for="(f, idx) in form" :key="idx">
        <div v-if="f.component">
          <h1 class="text-2xl">{{ f.children }}</h1>
        </div>
        <div v-else>
          <label for="f.model">{{ f.label }}</label
          ><br />
          <input
            class="border border-black bg-red"
            :type="f.type"
            :model="FormData[f.model]"
          /><br />
          <span>{{ f.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: [
        {
          label: "Is there a board charter",
          type: "text",
          model: "FormData.boardcharter",
          description: ""
        },
        {
          label: "Is the a MOI",
          type: "text",
          model: "FormData.moi",
          description: ""
        },
        {
          label: "Is the a MOI",
          type: "text",
          model: "FormData.moi",
          description: ""
        },
        {
          label: "Evaluation, Conducted and Frequency",
          type: "text",
          model: "FormData.evalmonthly",
          description: "Monthly"
        },
        {
          label: "Evaluation, Conducted and Frequency",
          type: "text",
          model: "FormData.evalweekly",
          description: "Weekly"
        },
        {
          label: "Evaluation, Conducted and Frequency",
          type: "text",
          model: "FormData.evalquarterly",
          description: "Quarterly"
        }
      ],
      FormData: {},
      racial: ["Black", "White", "Indian", "Pink"],
      categories2: [
        {
          label: "Senior Management",
          value: "senior_management"
        },
        {
          label: "Middle Management",
          value: "middle_management"
        }
      ],
      categories: ["Executives", "Senior Management", "Middle Management"]
    };
  },
  created() {
    this.categories2.forEach((c, index) => {
      this.form.push({
        component: "h2",
        children: c.label
      });
      this.racial.forEach((r, ridx) => {
        this.form.push({
          label: r,
          type: "text",
          model: `FormData.${c.value}_${r}`,
          description: "Total Number of Jobs"
        });
      });
    });
  }
};
</script>

<style></style>
