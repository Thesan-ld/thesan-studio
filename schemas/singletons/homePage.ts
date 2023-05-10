import { defineType, defineField } from "sanity";

export const homePage = defineType({
    title: 'Home Page',
    name: 'homePage',
    type: 'document',
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            type: 'string',
            readOnly: true,
            hidden: true,
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