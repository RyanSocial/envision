<template>
  <div>
    <h1 class="headers">Social Capture Form</h1>
    <FormulateForm
      class="grid grid-cols-1 gap-6 m-6 sm:grid-cols-2 md:grid-cols-4"
      :schema="schema"
      v-model="values"
      @submit="handleSubmit"
    >
      <nuxt-link class="text-blue-700" to="/newjobs">Next</nuxt-link>
    </FormulateForm>
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
          label: "Executive",
          name: "executive",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Senior Management",
          name: "management",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Middle Management",
          name: "middle_management",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Professionals (Permanent)",
          name: "prof_permanent",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Professionals (Temporary)",
          name: "prof_temp",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Skilled (Permanent)",
          name: "skilled_permanent",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Skilled (Temporary)",
          name: "skilled_temp",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Semi-Skilled (Permanent)",
          name: "semi_skilled_permanent",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Semi-Skilled (Temporary)",
          name: "semi_skilled_temp",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Unskilled (Permanent)",
          name: "unskilled_permanent",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Unskilled (Temporary)",
          name: "unskilled_temp",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Local Jobs(50KM Radius) (Permanent)",
          name: "permanent_local_jobs",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Local Jobs(50KM Radius) (Temporary)",
          name: "local_jobs",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Consultant",
          name: "consultant",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Internship/Learnership",
          name: "internship",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: true,
          label: "Total (Permanent)",
          name: "total_permanent",
          addLabel: "+ Add Data",
          children: [
            {
              type: "number",
              label: "White Male",
              name: "white_male",
              validation: "required",
              validationName: "Number of White Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "Total Number of Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "Total Number of Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "Total Number of Jobs"
            }
          ]
        },
        {
          type: "submit",
          label: "Save"
        }
      ]
    };
  },
  methods: {
    handleSubmit() {}
  }
};
</script>

<style></style>
