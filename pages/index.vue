<template>
  <div class="container">
    <div class="p-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <div v-if="!$store.state.authUser">
          <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <p v-if="formError" class="error">
            {{ formError }}
          </p>
          <Login @onError="onError" />
        </div>
        <div v-else>
          <div>
            <Cat />
            <div class="flex items-center justify-between m-5">
              Hello {{ $store.state.authUser.username }}!
              <button class="btn btn-red" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
    onError(value) {
      this.formError = value
    },
  },
}
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
}
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
.error {
  @apply bg-red-500 text-white py-4;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-red {
    @apply bg-red-500 text-white;
    &:hover {
      @apply bg-blue-700;
    }
  }
}
</style>
