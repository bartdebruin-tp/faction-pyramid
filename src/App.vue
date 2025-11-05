<script setup>
import { useFactionStore } from './stores/faction'

const factionStore = useFactionStore()
</script>

<template>
  <section class="flex">
    <SidebarComponent />
    <main class="p-16 w-full ml-80">
      <div class="flex flex-col gap-4">
        <div class="w-full">
          <input id="faction-name" v-model="factionStore.factionName" type="text" placeholder="Faction Name" class="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none overflow-hidden" />
        </div>
        <TextareaComponent name="Summary" description="Write a summary" v-model="factionStore.summary" />
        <TextareaComponent name="Mastermind Villain" description="Describe the mastermind villain" v-model="factionStore.mastermind" />
        <TextareaComponent name="Motivations" description="List the motivations" v-model="factionStore.motivations" />
        <TextareaComponent name="Members" description="Describe the members" v-model="factionStore.members" />
        <TextareaComponent name="Methods" description="Outline the methods" v-model="factionStore.methods" />
        <TextareaComponent name="Machinations" description="Detail the machinations" v-model="factionStore.machinations" />
        <TextareaComponent name="Mysteries" description="Explain the mysteries" v-model="factionStore.mysteries" />
        <TextareaComponent name="Notes" description="Additional notes" v-model="factionStore.notes" />
        <MindMapComponent></MindMapComponent>
      </div>
    </main>
  </section>
</template>

<style scoped>

</style>
