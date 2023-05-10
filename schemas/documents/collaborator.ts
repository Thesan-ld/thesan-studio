import { defineField, defineType } from "sanity";

export const collaborator = defineType({
    title: 'Collaborator',
    name: 'collaborator',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})