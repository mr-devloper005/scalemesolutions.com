import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find and compare trusted business listings',
      description: 'Explore businesses, compare services, and discover trusted companies through a focused business listing directory.',
      openGraphTitle: 'Find and compare trusted business listings',
      openGraphDescription: 'Discover business listings with clear profiles, service details, categories, and direct contact paths.',
      keywords: ['business listings', 'business directory', 'company directory', 'local business search'],
    },
    hero: {
      badge: 'marketplace',
      title: ['Find the right business,', 'service, or supplier faster.'],
      description: 'Search trusted business profiles, compare service categories, and reach companies with the details buyers need before they contact a provider.',
      primaryCta: { label: 'Browse listings', href: '/listing' },
      secondaryCta: { label: 'Add your business', href: '/create' },
      searchPlaceholder: 'Search businesses, services, categories, or locations',
      focusLabel: 'Verified profiles',
      featureCardBadge: 'Business profile',
      featureCardTitle: 'Compare listings with service details, ratings, location, and contact actions.',
      featureCardDescription: 'Every section is shaped around business discovery instead of generic content browsing.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for comparing businesses without a stretched, cluttered browsing experience.',
      paragraphs: [
        'This directory helps visitors move from broad category research to individual business profiles with fewer distractions.',
        'Listings emphasize practical comparison: services offered, location, summary, contact options, and useful trust signals.',
        'The layout keeps content centered and readable so buyers can scan results without feeling lost on overly wide pages.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Focused listing cards with clear business identity and action links.',
        'Category-led discovery for buyers comparing service providers.',
        'Rich profile details without unnecessary date labels or clutter.',
        'Account-aware navigation for creating and managing listings.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Add a business', href: '/create' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Put your business where serious buyers already search.',
      description: 'Create a listing with service context, contact details, category signals, and a cleaner profile page for comparison-driven visitors.',
      primaryCta: { label: 'Create a Listing', href: '/create' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A focused marketplace for discovering credible businesses.',
    description: `${slot4BrandConfig.siteName} helps buyers find, compare, and contact businesses through practical listings instead of scattered search results.`,
    paragraphs: [
      'We organize businesses by category, location, service focus, and profile quality so visitors can understand options quickly.',
      'For business owners, the platform creates a clearer path to publish details, build trust, and make contact information easy to act on.',
      'For buyers, it reduces the guesswork of evaluating companies by putting the most useful listing details into a consistent layout.',
    ],
    values: [
      {
        title: 'Buyer-first comparison',
        description: 'Profiles are arranged so visitors can compare businesses by services, location, summaries, and direct contact options.',
      },
      {
        title: 'Clear business identity',
        description: 'Every listing has room for a name, category, logo, overview, useful details, and links that support confident outreach.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We keep the interface centered, readable, and consistent so the directory feels professional on every page.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Get help with listings, business profiles, and directory support.',
    description: 'Tell us whether you want to add a company, update listing information, verify business details, or discuss directory coverage.',
    formTitle: 'Contact the listings team',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search businesses, categories, and service providers.',
      description: 'Use keywords, service categories, and locations to find the business listings that match your buying intent.',
      placeholder: 'Search by business name, category, service, or location',
    },
    resultsTitle: 'Latest searchable business listings',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a business listing.',
      description: 'Use your account to open the listing workspace and publish or manage business details.',
    },
    hero: {
      badge: 'Listing workspace',
      title: 'Create a clear business profile.',
      description: 'Choose the listing type, add company details, categories, website, logo, summary, and a useful business description.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Business listing draft submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your business directory account.',
      description: 'Login to create listings, save business details, and continue managing your company profile workspace.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and list your business.',
      description: 'Create an account to publish a company profile, save listing details, and help buyers discover your services.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
