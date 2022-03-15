<template>
  <div>
    <h1 class="headers">Reset Your Password</h1>
    <FormulateForm
      class="grid grid-cols-3 gap-8 px-4 py-2 m-8 rounded shadow-lg lg:max-w-3xl lg:mx-auto"
      :schema="schema"
      v-model="formValues"
      @submit="handleSubmit"
    >
      <nuxt-link class="inline ml-10 text-blue-700" to="/signin"
        >Back to Sign in</nuxt-link
      >
    </FormulateForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
      schema: [
        {
          type: "email",
          label: "Email",
          name: "email",
          placeholder: "Enter Your Email",
          validation: "^required|email",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },

        {
          type: "submit",
          label: "Reset"
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
