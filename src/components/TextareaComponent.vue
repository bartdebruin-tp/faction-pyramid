<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const model = defineModel()
const textareaRef = ref(null)

const props = defineProps({
  name: String,
  description: String
})

function createIdentifier(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function adjustHeight() {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }
}

onMounted(() => {
  adjustHeight()
})

watch(model, async () => {
  await nextTick()
  adjustHeight()
})
</script>

<template>
  
  <div class="w-full">
      <label :for="createIdentifier(props.name)" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.name }}</label>
      <textarea 
        ref="textareaRef"
        :id="createIdentifier(props.name)" 
        v-model="model" 
        @keyup="adjustHeight"
        rows="4" 
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none overflow-hidden" 
        :placeholder="props.description"></textarea>
  </div>
</template>
