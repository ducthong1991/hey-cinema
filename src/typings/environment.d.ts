declare global {
  interface Window {
    env: Environment
  }
}

export interface Environment {
  API_URL: string
  API_KEY: string
}
