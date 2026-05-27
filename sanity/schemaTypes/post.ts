import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Artigos do Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título do Artigo",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Link da URL (Slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Imagem de Capa",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Data de Publicação",
      type: "datetime",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "description",
      title: "Resumo / Descrição Curta",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Conteúdo do Artigo",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
