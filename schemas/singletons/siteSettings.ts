import { defineField, defineType } from "sanity";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

export const siteSettings = defineType({
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
    icon: MdOutlineSettingsInputComposite,
    fields: [
        defineField({
            title: 'Company Name',
            name: 'companyName',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Company Logo',
            name: 'companyLogo',
            type: 'image',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Navigation',
            name: 'navigation',
            type: 'array',
            of: [{ type: 'navigationItem' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Default Project Sort',
            name: 'defaultProjectSort',
            type: 'object',
            fields: [
                defineField({
                    title: 'Sort By',
                    name: 'sortBy',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Date', value: 'date' },
                            { title: 'Title', value: 'title' },
                            { title: 'Last Updated', value: '_updatedAt' },
                            { title: 'Created', value: '_createdAt' },
                        ],
                    },
                    validation: Rule => Rule.required(),
                    initialValue: 'date',
                }),
                defineField({
                    title: 'Sort Direction',
                    name: 'sortDirection',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Ascending', value: 'asc' },
                            { title: 'Descending', value: 'desc' },
                        ],
                    },
                    validation: Rule => Rule.required(),
                    initialValue: 'desc',
                }),
            ],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Footer Navigation',
            name: 'footerNavigation',
            type: 'array',
            of: [{ type: 'navigationItem' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Social Media',
            name: 'socialMedia',
            type: 'array',
            of: [{ type: 'socialMediaItem' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Footer Text',
            name: 'footerText',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
        }),
    ],
})