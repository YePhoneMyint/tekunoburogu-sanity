import {Rule} from 'sanity'

export const post = {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule) => rule.required().error('Required'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
      validation: (rule: Rule) => rule.required().error('Required'),
    },

    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: (rule: Rule) => rule.max(200).error('Max 200 characters.'),
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}, {type: 'image', fields: [{name: 'alt', type: 'string', title: 'Alt'}]}],
    },
    {name: 'tags', type: 'array', title: 'Tags', of: [{type: 'reference', to: [{type: 'tag'}]}]},
  ],
}
