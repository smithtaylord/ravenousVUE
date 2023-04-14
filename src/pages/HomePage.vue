<template></template>

<script>
import Pop from '../utils/Pop.js';
import { businessService } from '../services/BusinessService.js'
import { onMounted } from 'vue';

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

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
