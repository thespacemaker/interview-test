<template>
  <div class="flex justify-center">
    <form class="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="my-4 text-center">Add a New Entry</h2>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
          First Name
        </label>
        <input required class="formInput peer" id="firstName" type="text" placeholder="First Name">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          This field cannot be empty
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
          Last Name
        </label>
        <input required class="formInput peer" id="firstName" type="text" placeholder="Last Name">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          This field cannot be empty
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
          Address
        </label>
        <input required class="formInput peer" id="address" type="text" placeholder="Address">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          This field cannot be empty
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
          City
        </label>
        <input required class="formInput peer" id="city" type="text" placeholder="City">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          This field cannot be empty
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="state">
          State
        </label>
        <input required class="formInput peer" id="state" type="text" placeholder="State">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          This field cannot be empty
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="zipCode">
          Zip Code
        </label>
        <input required class="formInput peer" id="zipCode" type="text" placeholder="Zip Code">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          This field cannot be empty
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input required class="formInput peer" id="email" type="email" placeholder="Email">
        <p class="invisible peer-invalid:visible text-red-700 font-light">
          Must be a valid email
        </p>
      </div>
      <div class="flex items-center justify-left">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: 'AdForm',
  data() {
    return {
      
    };
  }
}
</script>

<style lang="postcss" scoped>
.formInput {
  @apply shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none; focus:shadow-outline;
}
</style>