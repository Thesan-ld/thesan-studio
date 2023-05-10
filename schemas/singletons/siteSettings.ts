import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
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