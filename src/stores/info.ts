import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', () => {
  const menuItems = ref([
    { id: 0, name: 'menuItems.home' },
    { id: 1, name: 'menuItems.about' },
    { id: 2, name: 'menuItems.products' },
    { id: 3, name: 'menuItems.architecture' },
    { id: 4, name: 'menuItems.scenarios' },
    { id: 5, name: 'menuItems.partners' },
    { id: 6, name: 'menuItems.contact' },
  ])

  return { menuItems }
})
