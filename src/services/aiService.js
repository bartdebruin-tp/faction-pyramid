import { ref } from 'vue'
import { GoogleGenAI } from '@google/genai'

const GEMINI_API_KEY = ''
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })
const isGenerating = ref(false)

function buildPrompt(fieldName, factionData) {
  const fieldLower = fieldName.toLowerCase()
  console.log(factionData)
  // Extract current faction properties for context
  const context = {
    name: factionData.factionName || 'this faction',
    summary: factionData.summary,
    motivations: factionData.motivations,
    masterVillain: factionData.masterVillain,
    organizationChart: factionData.organizationChart
  }
  
  // Build context string from existing properties
  let contextStr = `Faction: ${context.name}\n`
  if (context.summary && !fieldLower.includes('summary')) {
    contextStr += `Summary: ${context.summary}\n`
  }
  if (context.motivations && !fieldLower.includes('motivation')) {
    contextStr += `Motivations: ${context.motivations}\n`
  }
  if (context.masterVillain && !fieldLower.includes('villain')) {
    contextStr += `Master Villain: ${context.masterVillain}\n`
  }
  
  // Create field-specific prompts
  let prompt = ''
  if (fieldLower.includes('motivation')) {
    prompt = `Generate compelling motivations for ${context.name}. Consider what drives this faction, their goals, and what they're trying to achieve. Keep it concise (2-3 sentences).`
  } else if (fieldLower.includes('summary')) {
    prompt = `Generate a brief summary describing ${context.name}. Include their nature, purpose, and key characteristics. Keep it concise (2-3 sentences).`
  } else if (fieldLower.includes('villain') || fieldLower.includes('master')) {
    prompt = `Generate a description of the master villain or leader of ${context.name}. Include their name, role, and key traits. Keep it concise (2-3 sentences).`
  } else {
    prompt = `Generate a short, compelling description for the "${fieldName}" of ${context.name}. Keep it concise (2-3 sentences).`
  }
  
  if (contextStr.trim() !== `Faction: ${context.name}`) {
    prompt += `\n\nContext:\n${contextStr}`
  }
  
  return prompt
}

export async function generateWithAi(fieldName, factionData) {
  try {
    isGenerating.value = true
    const prompt = buildPrompt(fieldName, factionData)
    console.log('AI Prompt:', prompt)
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: prompt,
    })
    return response.text
  } catch (error) {
    console.error('Error generating with AI:', error)
    throw error
  } finally {
    isGenerating.value = false
  }
}

export { isGenerating }
