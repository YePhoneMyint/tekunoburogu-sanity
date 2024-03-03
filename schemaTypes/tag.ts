import {defineType} from 'sanity'

export const tag = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {name: 'name', type: 'string', title: 'Tag Name'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'name'}},
  ],
})
