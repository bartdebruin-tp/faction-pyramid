import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFactionStore = defineStore('faction', () => {
  // State
  const version = ref(4)
  const factionName = ref('New Faction')
  const summary = ref('')
  const mastermind = ref('')
  const motivations = ref('')
  const members = ref('')
  const methods = ref('')
  const machinations = ref('')
  const mysteries = ref('')
  const notes = ref('')
  const pyramid = ref({})

  // Actions
  function resetFaction() {
    factionName.value = 'New Faction'
    summary.value = ''
    mastermind.value = ''
    motivations.value = ''
    members.value = ''
    methods.value = ''
    machinations.value = ''
    mysteries.value = ''
    notes.value = ''
    pyramid.value = {}
  }

  function loadFaction(data) {
    version.value = data.version || 4
    factionName.value = data.factionName || 'New Faction'
    summary.value = data.summary || ''
    mastermind.value = data.mastermind || ''
    motivations.value = data.motivations || ''
    members.value = data.members || ''
    methods.value = data.methods || ''
    machinations.value = data.machinations || ''
    mysteries.value = data.mysteries || ''
    notes.value = data.notes || ''
    pyramid.value = data.pyramid || {}
  }

  function exportFaction() {
    return {
      version: version.value,
      factionName: factionName.value,
      summary: summary.value,
      mastermind: mastermind.value,
      motivations: motivations.value,
      members: members.value,
      methods: methods.value,
      machinations: machinations.value,
      mysteries: mysteries.value,
      notes: notes.value,
      pyramid: pyramid.value
    }
  }

  return {
    // State
    version,
    factionName,
    summary,
    mastermind,
    motivations,
    members,
    methods,
    machinations,
    mysteries,
    notes,
    pyramid,
    // Actions
    resetFaction,
    loadFaction,
    exportFaction
  }
})
