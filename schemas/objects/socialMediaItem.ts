import { defineType, defineField } from 'sanity';

export const socialMediaItem = defineType({
    title: 'Social Media Item',
    name: 'socialMediaItem',
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
            validation: Rule => Rule.required(),
        }),
    ],
})