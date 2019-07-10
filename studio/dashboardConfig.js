export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d25f828a68a8f64ac61bda7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-wuyydghv',
                  apiId: 'ca4ae3fb-9274-4cbf-b31a-0fb9deb4b84a'
                },
                {
                  buildHookId: '5d25f8288553a55ce9f0cf08',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web',
                  apiId: 'efb03dc4-02ae-4223-875a-d46df4cfbb14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanmacolino123/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
