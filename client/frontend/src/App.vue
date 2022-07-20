<template>
  <div class="bg-yellow-300 h-screen">
    <HelloWorld />
    <AllForms class="flex mt-12 justify-center" />
    <div class="flex justify-center my-4">
        <button v-if="!isFormVisible" @click="showForm" class="bg-blue-200 w-40">Create New</button>
    </div>
    <div class="flex justify-center my-4">
        <button v-if="isFormVisible" @click="showForm" class="bg-blue-200 w-40">Close Form</button>
    </div>
    <AddForm v-if="isFormVisible" class="m-4"/>
    <p class="flex justify-center text-center text-gray-500 text-xs">
        &copy;2022 spacemaker. All rights reserved.
      </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AllForms from './components/AllForms.vue'
import AddForm from './components/AddForm.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AllForms,
    AddForm
  },
  data() {
    return {
      isFormVisible: false,
    };
  },
  methods: {
    showForm() {
      this.isFormVisible = !this.isFormVisible
    }
  }
}
</script>

<style>

</style>
