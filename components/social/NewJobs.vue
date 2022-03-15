<template>
  <div>
    <h1 class="headers">New Job Form</h1>
    <FormulateForm
      class="grid grid-cols-1 gap-6 m-6 sm:grid-cols-2 md:grid-cols-4"
      :schema="schema"
      v-model="values"
      @submit="handleSubmit"
    >
      <div class="flex">
        <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/totaljobs"
          >Prev</nuxt-link
        >
        <nuxt-link class="mt-2 mb-4 ml-6 text-blue-700" to="/joblosses"
          >Next</nuxt-link
        >
      </div>
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
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
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
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
            }
          ]
        },
        {
          type: "group",
          repeatable: false,
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
              help: "New Jobs"
            },
            {
              type: "number",
              label: "White Female",
              name: "white_female",
              validation: "required",
              validationName: "Number of White Female",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Male",
              name: "black_male",
              validation: "required",
              validationName: "Number of Black Male",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Black Female",
              name: "black_female",
              validation: "required",
              validationName: "Number of Black Female",
              help: "New Jobs"
            },

            {
              type: "number",
              label: "Foreign Nationals",
              name: "foreign",
              validation: "required",
              validationName: "Number of Foreign Nationals",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Youth",
              name: "youth",
              validation: "required",
              validationName: "Number of Youth",
              help: "New Jobs"
            },
            {
              type: "number",
              label: "Disabled",
              name: "disabled",
              validation: "required",
              validationName: "Number of Disabled",
              help: "New Jobs"
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
