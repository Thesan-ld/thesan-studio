import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import schemaTypes from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { media } from 'sanity-plugin-media'
import * as singletons from './schemas/singletons'
import { PostsPreview } from './lib/components/PostsPreview';

const devOnlyPlugins = [getStartedPlugin()]

// define the actions that should only be available to singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// define all the singleton document types
const singletonTypes = new Set(Object.values(singletons).map((type) => type.name))

const singletonsWithPreviews = new Set(["homePage"])

export default defineConfig({
  name: 'default',
  title: 'Thesan Light Design',

  projectId: 'o4baxwxm',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        console.log('schemaType', schemaType)
				if (['page', 'project'].includes(schemaType)) {
					return S.document().views([S.view.form(), S.view.component(PostsPreview).title('Preview')]);
				}
				return null;
			},
      structure: (S) => {
        const getSingletonViews = (typeName: string) => (
            singletonsWithPreviews.has(typeName) 
              ? [S.view.form(), S.view.component(PostsPreview).title('Preview')]
              : [S.view.form()]
          )

        return S.list()
          .title("Content")
          .items([
            // All non-singleton types get a standard list view
            ...S.documentTypeListItems().filter(
              // Filter out the singleton types
              (listItem) => !singletonTypes.has(listItem.getId() || "" as any)
            ),

            // Add a visual divider (optional)
            S.divider(),
            
            // map over singleton types and create a list item for each
            ...Object.values(singletons).map((type) =>
              S.listItem()
                .title(type.title || type.name)
                .id(type.name)
                .child(
                  // Instead of rendering a list of documents, we render a single
                  // document, specifying the `documentId` manually to ensure
                  // that we're editing the single instance of the document
                  S.document()
                    .schemaType(type.name)
                    .documentId(type.name)
                    .views(getSingletonViews(type.name))
                ),
            ),
          ])
        }
    }),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
    media(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType as any))
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType as any)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  }
})

