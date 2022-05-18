/**
 *
 * Voir tsconfig.json, raccourci pour import depuis la lib sans SFC
 * '#vue' -> 'vue/dist/vue.esm-bundler'
 * 
 * @see https://www.npmjs.com/package/vue -> section "With a Bundler" -> "vue.esm-bundler.js"
 */
import { createApp, ref } from '#vue'

/**
 * Voir `index.html`
 *
 * Création d'un disclosure
 *
 * @param el - Element parent
 */
export const createDisclosure = (el: HTMLElement) => createApp({
  setup() {
    const isDisplayed = ref(false)
    const toggle = () => isDisplayed.value = !isDisplayed.value

    return {
      isDisplayed,
      toggle
    }
  }
}).mount(el)
