<template>
    <div class="bg-white mx-12 p-4 flex flex-col">
        <h2 class="flex justify-center">Submitted Forms:</h2>
        <div class="flex justify-center">
            <table class="table-auto">
                <thead>
                    <tr>
                        <th class="pr-2 text-left">First Name</th>
                        <th class="pr-2 text-left" >Last Name</th>
                        <th class="pr-2 text-left">Address</th>
                        <th class="pr-2 text-left">City</th>
                        <th class="pr-2 text-left">State</th>
                        <th class="pr-2 text-left">Zipcode</th>
                        <th class="pr-2 text-left">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="form in formItems" :key="form.id">
                        <td class="pr-2">{{ form.firstName }}</td>
                        <td class="pr-2">{{ form.lastName }}</td>
                        <td class="pr-2">{{ form.address }}</td>
                        <td class="pr-2">{{ form.city }}</td>
                        <td class="pr-2">{{ form.state }}</td>
                        <td class="pr-2">{{ form.zipCode }}</td>
                        <td class="pr-2">{{ form.email }}</td>
                        <td>edit</td>
                        <td>delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
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