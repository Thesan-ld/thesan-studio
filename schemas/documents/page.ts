import { defineType, defineField } from "sanity";

export const page = defineType({
    title: 'Page',
    name: 'page',
    type: 'document',
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            description: 'This is the label used in Sanity Studio. The SEO title is used for the page title in the browser.',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'SEO',
            name: 'seo',
            type: 'seo',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Content',
            name: 'content',
            type: 'pageContent',
            validation: Rule => Rule.required(),
        }),
    ],
})