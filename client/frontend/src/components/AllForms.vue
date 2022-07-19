<template>
    <div>
        <h2>This is the Forms Component</h2>
        <p>{{ formItems }}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'AllForms',
  data() {
    return {
      formItems: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/form`);
      this.formItems = res.data;
      console.log('form items', this.formItems)
    } catch (error) {
      console.log(error);
    }
  }
}
</script>