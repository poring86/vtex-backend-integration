declare module 'vtex.render-runtime' {
  interface Culture {
    availableLocales: string[]
    locale: string
    language: string
    country: string
    currency: string
  }
  interface RenderContext {
    culture: Culture
    emitter: any
  }
  export const useRuntime = () => RenderContext
}
