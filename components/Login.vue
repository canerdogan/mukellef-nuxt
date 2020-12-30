<template>
  <form @submit.prevent="login">
    <div class="m-5 text-left">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          id="username"
          v-model="formUsername"
          class="input"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="formPassword"
          class="input mb-3"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="flex items-center justify-between">
        <button class="btn btn-blue" type="submit">
          <slot>Sign In</slot>
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formUsername: '',
      formPassword: '',
    }
  },
  methods: {
    async login() {
      try {
        this.$emit('onError', null)
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword,
        })
        this.formUsername = ''
        this.formPassword = ''
      } catch (e) {
        this.$emit('onError', e.message)
      }
    },
  },
}
</script>

<style>
.input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700;
}

.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-blue {
    @apply bg-blue-500 text-white;
    &:hover {
      @apply bg-blue-700;
    }
  }
}
</style>
