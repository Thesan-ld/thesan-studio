import { defineType, defineField } from "sanity";

export const navigationItem = defineType({
    title: 'Navigation Item',
    name: 'navigationItem',
    type: 'object',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'URL',
            name: 'url',
            type: 'url',
            validation: Rule => Rule.uri({ allowRelative: true }).required(),
        }),
        defineField({
            title: 'Is Call To Action',
            name: 'isCallToAction',
            description: 'If true, this navigation item will be styled as a button-like call to action.',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})