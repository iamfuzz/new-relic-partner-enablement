const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://partners.newrelic-es.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://newrelic.com/themes/custom/curio/assets/mediakit/NR_logo_Horizontal_Rev.svg',
    logoLink: '/',
    title:
      "<a href='/'><img class='img-responsive' src='https://newrelic.com/themes/custom/curio/assets/mediakit/NR_logo_Horizontal_Rev.svg' alt='New Relic logo' /></a>",
    githubUrl: 'https://github.com/iamfuzz/new-relic-partner-enablement',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/newrelic" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/lab1', // add trailing slash if enabled above
      '/lab2',
      '/lab3',
      '/lab4',
      '/lab5',
      '/lab6',
      '/lab7',
      '/lab8',
      '/lab9',
      '/lab10'
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'New Relic', link: 'https://newrelic.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      ""
  },
  siteMetadata: {
    title: 'New Relic Partner Enablement',
    description: 'A website for partner relics to get started with learning New Relic. ',
    ogImage: null,
    docsLocation: 'https://github.com/iamfuzz/new-relic-partner-enablement/tree/main/content',
    favicon: 'https://newrelic.com/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
