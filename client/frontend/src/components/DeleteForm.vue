<template>
  <td><button @click="removeFromServer(this.form.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 red w-6" fill="none" viewBox="0 0 24 24" stroke="red" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button></td>
</template>

<script>
import axios from "axios";
export default {
  name: 'DeleteForm',
  props: {
    form: Object
  },
  methods: {
    async removeFromServer(id) {
      if (confirm("Are you sure you want to delete " + this.form.firstName + " " + this.form.lastName + " ?") == true) {
          try {
            const res = await axios.delete(`http://localhost:3000/form/`+id);
            console.log('Deleted', res)
            location.reload();
          } catch (error) {
            console.log(error);
          }
      } else {
        console.log('user canceled')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
