<script setup>
import { reactive, provide } from 'vue'

const datamodel = reactive({
  "version": 4,
  "factionName": "New Faction",
  "summary": "",
  "mastermind": "",
  "motivations": "",
  "members": "",
  "methods": "",
  "machinations": "",
  "mysteries": "",
  "notes": "",
  "pyramid": {}
})

provide('datamodel', datamodel)
</script>

<template>
  <section class="flex">
    <SidebarComponent />
    <main class="p-16 w-full ml-80">
      <div class="flex flex-col gap-4">
        <div class="w-full">
          <input id="faction-name" v-model="datamodel.factionName" type="text" placeholder="Faction Name" class="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none overflow-hidden" />
        </div>
        <TextareaComponent name="Summary" description="Write a summary" v-model="datamodel.summary" />
        <TextareaComponent name="Mastermind Villain" description="Describe the mastermind villain" v-model="datamodel.mastermind" />
        <TextareaComponent name="Motivations" description="List the motivations" v-model="datamodel.motivations" />
        <TextareaComponent name="Members" description="Describe the members" v-model="datamodel.members" />
        <TextareaComponent name="Methods" description="Outline the methods" v-model="datamodel.methods" />
        <TextareaComponent name="Machinations" description="Detail the machinations" v-model="datamodel.machinations" />
        <TextareaComponent name="Mysteries" description="Explain the mysteries" v-model="datamodel.mysteries" />
        <TextareaComponent name="Notes" description="Additional notes" v-model="datamodel.notes" />
        <OrganizationalChartComponent></OrganizationalChartComponent>
        <MindMapComponent></MindMapComponent>
      </div>
    </main>
  </section>
</template>

<style scoped>

</style>
