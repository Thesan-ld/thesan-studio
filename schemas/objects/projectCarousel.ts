import { defineType, defineField } from 'sanity';
import { mediaAssetSource } from 'sanity-plugin-media';

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
            },
            {
                type: 'image',
                title: 'Image',
                options: {
                    sources: [mediaAssetSource],
                }
            }],
            validation: Rule => Rule.required(),
        }),
    ],
})