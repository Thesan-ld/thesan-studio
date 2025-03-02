import { defineField, defineType } from 'sanity';

export const logoGrid = defineType({
    title: 'Logo Grid',
    name: 'logoGrid',
    type: 'object',
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            type: 'string',
            description: 'Only for internal use and will not be displayed on the website.',
            initialValue: 'Logo Grid',
        }),
        defineField({
            title: 'Section Text Content',
            name: 'sectionTextContent',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            title: 'Columns',
            name: 'columns',
            type: 'number',
            initialValue: 4,
            validation: Rule => Rule.required().min(1).max(12),
        }),
        defineField({
            title: 'Logos',
            name: 'logos',
            type: 'array',
            of: [{
                type: 'image',
                preview: {
                    select: {
                        imageUrl: 'asset.url',
                        title: 'asset.originalFilename',
                    },
                },
            }],
            validation: Rule => Rule.required(),
        }),
    ],
})