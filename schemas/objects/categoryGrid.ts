import { defineType, defineField } from 'sanity';

export const categoryGrid = defineType({
    title: 'Category Grid',
    name: 'categoryGrid',
    type: 'object',
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            type: 'string',
            description: 'Only for internal use and will not be displayed on the website.',
            initialValue: 'Category Grid',
        }),
        defineField({
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'category' }],
            }],
            validation: Rule => Rule.required(),
        }),
    ],
})