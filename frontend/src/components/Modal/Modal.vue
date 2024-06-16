<script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core'

  const props = defineProps({
    isOpen: Boolean,
  })

  const emit = defineEmits(["modal-close"]);
  const target = ref(null);
  onClickOutside(target, () => emit('modal-close'))

</script>

<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content" ref="target">
      <span class="close" @click="$emit('modal-close')">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fff;
  margin: auto;
  padding: 30px 50px;
  max-width: 624px;
  width: 80%;
  border-radius: 28px;
  position: relative;

  color: #111;
}

.close {
  color: #aaa;
  font-size: 28px;
  line-height: 0.7em;
  cursor: pointer;

  position: absolute;
  top: 15px;
  right: 20px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>