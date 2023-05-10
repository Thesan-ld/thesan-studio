import { defineType, defineField } from "sanity";

export const basicSection = defineType({
    title: "Basic Section",
    name: "basicSection",
    type: "object",
    fields: [
        defineField({
            title: 'Internal Label',
            name: 'title',
            type: 'string',
            description: 'Only for internal use and will not be displayed on the website.',
            initialValue: 'Basic Section',
        }),
        defineField({
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { "title": "Strong", "value": "strong" },
                            { "title": "Emphasis", "value": "em" },
                        ],
                    },
                },
                { type: 'contactForm' },
            ],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
        }),
        defineField({
            title: 'Content Column',
            name: 'contentColumn',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
            },
            initialValue: 'left',
            hidden: ({ parent }) => !parent?.image,
        }),
    ],
})