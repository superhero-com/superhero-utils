<template>
  <div>
    <h3>superhero-utils example using vue, webpack</h3>
    <SuperheroButton size="medium" account="ak_... or .chain name" />
  </div>
</template>

<script>
import '../../superhero-utils/index.css';
import { Button } from '../../superhero-utils/vue-without-styles.js';

export default {
  components: {
    SuperheroButton: Button,
  },
};
</script>
