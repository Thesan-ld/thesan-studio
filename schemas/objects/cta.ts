import { defineField, defineType } from 'sanity';

export const cta = defineType({
    type: 'object',
    name: 'cta',
    title: 'Call to Action',
    description: 'A CTA link that appears on its own row.',
    fields: [
        defineField({
            type: 'url',
            name: 'url',
            title: 'Link URL',
            description: 'The URL to link to.',
            options: {
                allowRelative: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'text',
            title: 'Link Text',
            description: 'The text to display.',
            validation: Rule => Rule.required(),
        }),
    ],
});