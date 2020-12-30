<template>
  <div>
    <div class="w-96 min-w-full rounded overflow-hidden shadow-lg mb-4">
      <transition name="fade">
        <div
          v-if="!catLoading"
          class="w-full w-96 background-center"
          :style="{ backgroundImage: 'url(' + cat + ')' }"
        ></div>
      </transition>
    </div>
    <button class="btn btn-blue" type="button" @click="change">
      <slot>Change</slot>
    </button>
  </div>
</template>

<style>
.w-96 {
  width: 20rem;
  height: 20rem;
}
.background-center {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store, redirect }) {
    store.dispatch('getCat')
  },
  middleware: 'auth',
  computed: {
    ...mapState({
      cat: (state) => {
        return state.cat.url
      },
      catLoading: (state) => {
        return state.catLoading
      },
    }),
  },
  methods: {
    async change() {
      try {
        await this.$store.dispatch('getCat')
      } catch (e) {}
    },
  },
}
</script>
