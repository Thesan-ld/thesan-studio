import { defineType } from 'sanity';

export const pageContent = defineType({
    title: 'Page Content',
    name: 'pageContent',
    type: 'array',
    of: [
        { type: 'basicSection' },
        { type: 'contactForm' },
        { type: 'projectCarousel' },
        { type: 'categoryGrid' },
    ],
})