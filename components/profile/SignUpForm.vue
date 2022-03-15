<template>
  <div>
    <h1 class="headers">Register</h1>
    <FormulateForm
      class="grid grid-cols-3 gap-8 px-4 py-2 m-8 rounded shadow-lg lg:max-w-3xl lg:mx-auto"
      :schema="schema"
      v-model="formData"
      @submit="handleSubmit"
    >
    </FormulateForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      schema: [
        {
          type: "text",
          label: "First Name",
          name: "first_name",
          placeholder: "First Name",
          validationName: "First name",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "text",
          label: "Last Name",
          name: "last_name",
          placeholder: "Last Name",
          validationName: "Last name",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "email",
          label: "Email",
          name: "email",
          placeholder: "Email",
          validation: "required|email",
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
          type: "password",
          label: "Confirm Password",
          name: "confirm_password",
          placeholder: "Confirm Password",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "text",
          label: "Mobile Number",
          name: "mobile_number",
          placeholder: "Mobile Number",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "number",
          label: "ID Number",
          name: "id_number",
          placeholder: "ID Number",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "text",
          label: "Employee Number",
          name: "employee_number",
          placeholder: "Employee Number",
          validation: "required",
          "outer-class": ["col-span-6", "md:col-span-3"]
        },
        {
          type: "submit",
          label: "Register"
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
