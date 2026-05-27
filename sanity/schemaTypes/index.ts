import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post' // 1. Importa o post

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
