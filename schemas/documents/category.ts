import { MdCategory } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const category = defineType({
    title: 'Category',
    name: 'category',
    type: 'document',
    icon: MdCategory,
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
            validation: Rule => Rule.required(),
        }),
    ],
})
