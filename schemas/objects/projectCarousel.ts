import { defineType, defineField } from 'sanity';

export const projectCarousel = defineType({
    title: 'Project Carousel',
    name: 'projectCarousel',
    type: 'object',
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            type: 'string',
            description: 'Only for internal use and will not be displayed on the website.',
            initialValue: 'Project Carousel',
        }),
        defineField({
            title: 'Projects',
            name: 'projects',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'project' }]
            }],
            validation: Rule => Rule.required(),
        }),
    ],
})