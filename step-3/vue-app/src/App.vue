<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <error-component>Esto en un mensaje</error-component>
    <error-component :kind="warning">Esto en un mensaje</error-component>
    <error-component :kind="error">Esto en un mensaje</error-component>
  </div>
</template>

<script>
import 'simple-error-component';

export default {
  name: 'App',
  data() {
    return {
      warning: 'warning',
      error: 'error'
    }
  }
}
</script>
