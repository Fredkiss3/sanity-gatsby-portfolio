export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '621ca5d53fbf87e3313dac3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2occijcx',
                  apiId: '6e893ee2-e0e8-4870-a6ed-45c5cb32506f'
                },
                {
                  buildHookId: '621ca5d5a0e0754b0e5258ec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-138srvoz',
                  apiId: '9caa1cfb-3d49-4914-9fc6-78a12cb6e9a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Fredkiss3/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-138srvoz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
