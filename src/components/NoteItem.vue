<template>
  <li @click="$emit('click')">
    {{ truncatedText }}
    <button @click.stop="$emit('delete')">Удалить</button>
  </li>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: String // Ожидаем, что нам передадут текст, как строку
})

const truncatedText = computed(() => {
  if (!props.text) return 'Пустая заметка'
  const cleanText = props.text.replace(/\n/g, ' ').trim()
  if (cleanText.length <= 30) {
    return cleanText || 'Пустая заметка'
  }
  return cleanText.substring(0, 30) + '...'
})

</script>