<template>
    <div class="wrapper">
        <navbar-component></navbar-component>
        <div class="container">
            <slot></slot>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {NavbarComponent, FooterComponent}
}

</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  flex: 1
}
</style>