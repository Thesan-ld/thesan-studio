import { defineField, defineType } from "sanity"

export const project = defineType({
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
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
            title: 'Description',
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
            // validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Cover Image',
            name: 'coverImage',
            type: 'image',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Collaborators',
            name: 'collaborators',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Collaborator',
                            name: 'collaborator',
                            type: 'reference',
                            to: [{ type: 'collaborator' }],
                        },
                        {
                            title: 'Role',
                            name: 'role',
                            type: 'string',
                        },
                    ],
                }
            ],
        }),
        defineField({
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
        }),
        defineField({
            title: 'Date',
            name: 'date',
            type: 'date',
            validation: Rule => Rule.required(),
        }),
    ],
})