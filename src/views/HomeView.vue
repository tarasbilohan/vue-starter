<template>
  <div class="py-4 flex flex-col items-center">
    <h1 class="block text-5xl font-semibold text-center">
      Welcome to Your Vue.js + TypeScript App
      <span class="text-green-500">{{ user }}</span>
    </h1>
    <div class="mt-8 flex flex-col gap-4 w-full max-w-lg">
      <label
        for="user"
        class="text-lg font-semibold"
      >
        Your name
      </label>
      <input
        id="user"
        v-model="user"
        type="text"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeView',
  setup () {
    const user = ref('')

    return {
      user
    }
  }
})
</script>
