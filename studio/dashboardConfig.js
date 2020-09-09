export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5968ff182f14013ac2221b',
                  title: 'Sanity Studio',
                  name: 'cth-io-v-2-studio',
                  apiId: '71ebdd67-fca4-4c9d-b204-319df41fca30'
                },
                {
                  buildHookId: '5f5968ff910c38014c0a04d9',
                  title: 'Blog Website',
                  name: 'cth-io-v-2',
                  apiId: 'ba453aa7-0695-4e4d-a6fc-685a4453b5ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kylemhudson/cth-io-v2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cth-io-v-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
