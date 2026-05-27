import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // ID pego automaticamente do seu .env.local
  dataset: "production",
  apiVersion: "2026-05-26", // Data de hoje para travar a versão da API
  useCdn: false, // Deixamos false para que o site atualize na hora quando seu cliente postar algo
});
