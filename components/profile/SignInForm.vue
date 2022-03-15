<template>
  <div>
    <h1 class="headers">Sign into your account</h1>
    <FormulateForm
      class="grid grid-cols-3 gap-8 px-4 py-2 m-8 rounded shadow-lg lg:max-w-3xl lg:mx-auto"
      :schema="schema"
      v-model="formValues"
      @submit="handleSubmit"
    >
      <nuxt-link class="text-blue-700 " to="/forgotPassword"
        >Forgot Password</nuxt-link
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
          placeholder: "Email",
          validation: "^required|email",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "password",
          label: "Password",
          name: "password",
          placeholder: "Password",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },

        {
          type: "submit",
          label: "Sign in"
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
