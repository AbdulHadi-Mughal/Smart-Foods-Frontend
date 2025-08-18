/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_IMAGEKIT_URL: string;
  readonly VITE_GEO_API_KEY: string;
  // Add other variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
