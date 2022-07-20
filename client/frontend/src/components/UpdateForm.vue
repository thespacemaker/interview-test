<template>
  <div>
    <button @click="openModal()">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </button>
    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="modal__backdrop" @click="closeModal()"/>

        <div class="modal__dialog">
          <div class="modal__header">
            <slot name="header"/>
            <button type="button" class="modal__close" @click="closeModal()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="modal__body">
            <slot name="body"/>
            <div class="flex justify-center">
            <form class="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 class="my-4 text-center">Update Entry</h2>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                  First Name
                </label>
                <input v-model="formData.firstName" required class="formInput peer" id="firstName" type="text" placeholder="First Name">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  This field cannot be empty
                </p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                  Last Name
                </label>
                <input v-model="formData.lastName" required class="formInput peer" id="firstName" type="text" placeholder="Last Name">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  This field cannot be empty
                </p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                  Address
                </label>
                <input v-model="formData.address" required class="formInput peer" id="address" type="text" placeholder="Address">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  This field cannot be empty
                </p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                  City
                </label>
                <input v-model="formData.city" required class="formInput peer" id="city" type="text" placeholder="City">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  This field cannot be empty
                </p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="state">
                  State
                </label>
                <input v-model="formData.state" required class="formInput peer" id="state" type="text" placeholder="State">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  This field cannot be empty
                </p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipCode">
                  Zip Code
                </label>
                <input v-model="formData.zipCode" required class="formInput peer" id="zipCode" type="text" placeholder="Zip Code">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  This field cannot be empty
                </p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input v-model="formData.email" required class="formInput peer" id="email" type="email" placeholder="Email">
                <p class="invisible peer-invalid:visible text-red-700 font-light">
                  Must be a valid email
                </p>
              </div>
              <div class="flex items-center justify-left">
                <button @click="updateOnServer()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Update
                </button>
              </div>
            </form>
          </div>
          </div>

          <div class="modal__footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateForm",
  props: {
    form: Object
  },
  data() {
    return {
      show: false,
      formData: JSON.parse(JSON.stringify(this.form))
    };
  },

  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    async updateOnServer() {
      try {
        console.log('updating record', this.formData)
        const res = await axios.put(`http://localhost:3000/form/`+this.formData.id , {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          address: this.formData.address,
          city: this.formData.city,
          state: this.formData.state,
          zipCode: this.formData.zipCode,
          email: this.formData.email
        });
        console.log('Updated', res.data)
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>