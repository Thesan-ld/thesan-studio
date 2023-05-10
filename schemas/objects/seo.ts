import { defineField, defineType } from "sanity";

export const seo = defineType({
    title: 'SEO',
    name: 'seo',
    type: 'object',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            description: 'Image to display when sharing on social media. If you don not provide an image, a fallback will be used instead.',
        }),
        defineField({
            title: 'Hidden',
            name: 'hidden',
            type: 'boolean',
            description: 'Hide this page from search engines.',
        })
    ],
})
