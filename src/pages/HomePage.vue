<template>
  <div class="app">
    <h1 class="mb-0">ravenous</h1>
    <SearchBar />
    <div class="container" v-if="business.length > 0">
      <div class="row">
        <div v-for="b in business" class="col-6 col-lg-4 mt-3">
          <BusinessCard :business="b" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { businessService } from '../services/BusinessService.js'
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    const term = 'pizza'
    const location = 'Boise'
    const sortBy = 'best_match'

    async function getTestBusinesses() {
      try {
        await businessService.getTestBusinesses(term, location, sortBy)
      } catch (error) {
        Pop.error(error, '[get test businesses]')
      }
    }
    onMounted(() => {
      getTestBusinesses()
    })
    return {
      business: computed(() => AppState.businesses)
    }
  }
}
</script>

<style scoped lang="scss"></style>
