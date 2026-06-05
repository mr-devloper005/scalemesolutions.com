import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Verified business directory',
    primaryLinks: [
      { label: 'Listings', href: '/listings' },
      { label: 'Categories', href: '/listing' },
      { label: 'Add business', href: '/create' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Business discovery made simpler',
    description: 'Compare companies, explore local services, and create trusted business listings with clearer details, richer profiles, and practical contact paths.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Listings', href: '/listings' },
          { label: 'Business Archive', href: '/listing' },
          { label: 'Search Businesses', href: '/search' },
          { label: 'Add a Listing', href: '/create' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for focused business discovery and listing growth.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
