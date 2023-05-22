import { TbTheater } from 'react-icons/tb'
import { defineField, defineType } from "sanity"
import { mediaAssetSource } from "sanity-plugin-media"

export const project = defineType({
    title: 'Project',
    name: 'project',
    type: 'document',
    icon: TbTheater,
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
            of: [
                {
                    type: 'image',
                    options: {
                        sources: [mediaAssetSource],
                    }
                },
            ],
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
        defineField({
            title: 'Sort Offset',
            name: 'sortOffset',
            description: 'Used to offset the sort order of this project on the landing page.',
            type: 'number',
            validation: Rule => Rule.required(),
            initialValue: 0,
        }),
    ],
})