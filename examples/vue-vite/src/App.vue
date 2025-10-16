<template>
  <div>
    <h3>superhero-utils example using vue, vite</h3>
    <SuperheroButton size="medium" target="ak_gvxNbZf5CuxYVfcUFoKAP4geZatWaC2Yy4jpx5vZoCKank4Gc" />
  </div>
</template>

<script>
import '../../superhero-utils/index.css';
import { Button as SuperheroButton } from '../../superhero-utils/vue-without-styles.js';

export default {
  components: {
    SuperheroButton,
  },
};
</script>
