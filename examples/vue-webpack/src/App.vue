<template>
  <div class="Example-List">
    <h3>superhero-utils example using vue, webpack</h3>
    medium:
    <SuperheroButton size="medium" account="ak_... or .chain name" />
    <template v-for="size in ['large', 'small', 'icon']">
      {{size}}:
      <SuperheroButton :size="size" account="ak_... or .chain name" :key="size" />
    </template>
  </div>
</template>

<script>
import '../../superhero-utils/index.css';
import { Button } from '../../superhero-utils/vue-without-styles.js';

export default {
  components: {
    SuperheroButton: Button,
  },
}
</script>

<style>
.Example-List {
  width: 235px;
  outline: 1px #1162fe solid;
  padding: 20px;
  height: 400px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
</style>
