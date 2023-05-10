import { defineType, defineField } from 'sanity';

export const contactForm = defineType({
    title: 'Contact Form',
    name: 'contactForm',
    type: 'object',
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            type: 'string',
            description: 'Only for internal use and will not be displayed on the website.',
            initialValue: 'Contact Form',
        }),
        defineField({
            title: 'Pre-form content',
            name: 'preFormContent',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
        }),
    ],
})