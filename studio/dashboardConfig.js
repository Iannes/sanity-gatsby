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
                  buildHookId: '5f8c16bd2ff940bf87abf3ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-jjx6gt9u',
                  apiId: 'a0dfd2c1-87d3-42b2-aade-29918889edd9'
                },
                {
                  buildHookId: '5f8c16bdf3a826d13c266adf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-47j914jv',
                  apiId: 'f59cf668-4f74-457b-a61a-c1d2704caa9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Iannes/sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-web-47j914jv.netlify.app', category: 'apps'}
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
