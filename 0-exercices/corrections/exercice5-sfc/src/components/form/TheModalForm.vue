<template>
  <div id="modal" class="modal">
    <div class="modal-content">
      <header>
        <h3>{{ title }}</h3>
        <slot name="form"></slot>
        <span class="close">
          <img src="https://api.iconify.design/mingcute:close-circle-line.svg" alt="Close icon">
        </span>
      </header>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Formulaire'
    }
  }
}
</script>