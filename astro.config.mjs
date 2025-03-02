import dotenv from 'dotenv';
dotenv.config();
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator';
import starlightImageZoom from 'starlight-image-zoom';
import { remarkBasePathLinks } from './src/plugins/remarkBasePathLinks';
import react from "@astrojs/react";

const isProduction = process.env.NODE_ENV === 'production';
const isGitHub = process.env.NODE_ENV === 'github';

// Determine the base path based on the environment
const basePath = isProduction
  ? '/developer/commerce/storefront'
  : isGitHub
    ? process.env.VITE_GITHUB_BASE_PATH
    : '/microsite-commerce-storefront';

// https://astro.build/config
export default defineConfig({
  site: 'https://experienceleague.adobe.com',
  base: basePath,
  markdown: {
    remarkPlugins: [remarkBasePathLinks]
  },
  trailingSlash: 'ignore',
  outDir: './dist',
  redirects: {
    '/customize/design-tokens': '/developer/commerce/storefront/dropins/all/branding',
    '/customize/enrich': '/developer/commerce/storefront/dropins/all/enriching',
    '/customize/localize': '/developer/commerce/storefront/dropins/all/localizing',
    '/customize/slots': '/developer/commerce/storefront/dropins/all/extending',
    '/customize/style': '/developer/commerce/storefront/dropins/all/styling',
    '/customize': '/developer/commerce/storefront/dropins/all/introduction',
    '/dropins': '/developer/commerce/storefront/dropins/all/introduction',
    '/dropins/cart/cart-introduction': '/developer/commerce/storefront/dropins/cart',
    '/dropins/checkout/checkout-introduction': '/developer/commerce/storefront/dropins/checkout',
    '/dropins/user-account/useraccount-introduction': '/developer/commerce/storefront/dropins/user-account',
    '/dropins/user-auth/userauth-introduction': '/developer/commerce/storefront/dropins/user-auth',
    '/faq': '/developer/commerce/storefront/troublshooting/faq',
    '/get-started/launch-checklist': '/developer/commerce/storefront/launch',
    '/get-started/requirements': '/developer/commerce/storefront/discovery/architecture',
    '/get-started/configurations': '/developer/commerce/storefront/setup/commerce-configuration',
    '/product-details/pdp-containers': '/developer/commerce/storefront/dropins/product-details/pdp-containers',
    '/product-details/pdp-functions': '/developer/commerce/storefront/dropins/product-details/pdp-functions',
    '/product-details/pdp-installation': '/developer/commerce/storefront/dropins/product-details/pdp-installation',
    '/product-details/pdp-introduction': '/developer/commerce/storefront/dropins/product-details/',
    '/product-details/pdp-slots': '/developer/commerce/storefront/dropins/product-details/pdp-slots',
    '/product-details/pdp-styles': '/developer/commerce/storefront/dropins/product-details/pdp-styles',
    '/references/configurations': '/developer/commerce/storefront/setup/commerce-configuration',
    '/references/requirements': '/developer/commerce/storefront/discovery/architecture',
  },
  integrations: [
    tailwind({
      nesting: true
    }), starlight({
      editLink: {
        baseUrl: 'https://github.com/commerce-docs/microsite-commerce-storefront/edit/develop/'
      },
      head: [{
        tag: 'script',
        attrs: {
          src: 'https://assets.adobedtm.com/d4d114c60e50/9f881954c8dc/launch-7a902c4895c3.min.js'
        }
      }, {
        tag: 'meta',
        attrs: {
          name: 'google-site-verification',
          content: 'NwoVbL9MrtJAa4vdfMC0vJmKV3Hvuc4L_UHlv4Uzjgk'
        }
      }],
      title: 'Adobe Commerce Storefront',
      favicon: 'favicon.ico',
      lastUpdated: true,
      plugins: [starlightLinksValidator({
        errorOnFallbackPages: false,
        errorOnInconsistentLocale: true
      }), starlightImageZoom({
        showCaptions: false
      })],
      // Component overrides
      components: {
        CallToAction: './src/components/overrides/CallToAction.astro',
        Footer: './src/components/overrides/Footer.astro',
        Icon: './src/components/overrides/Icon.astro',
        Header: './src/components/overrides/Header.astro',
        Hero: './src/components/overrides/Hero.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        SiteTitle: './src/components/overrides/SiteTitle.astro',
        PageFrame: './src/components/overrides/PageFrame.astro',
        PageSidebar: './src/components/overrides/PageSidebar.astro',
        TwoColumnContent: './src/components/overrides/TwoColumnContent.astro',
        Pagination: './src/components/overrides/Pagination.astro',
        Sidebar: './src/components/overrides/Sidebar.astro',
        SidebarSublist: './src/components/overrides/SidebarSublist.astro',
        SocialIcons: './src/components/overrides/SocialIcons.astro',
        LinkCard: './src/components/LinkCard.astro',
      },
      customCss: ['./src/styles/reset.css', './src/styles/tailwind.css', './src/fonts/font-face.css', './src/styles/colors.css', './src/styles/badge.css', './src/styles/custom.css', './src/styles/asides.css', './src/styles/layout.css', './src/styles/text.css',],
      logo: {
        src: './src/assets/sitelogo.svg',
        replacesTitle: false
      },
      social: {
        discord: 'https://discord.com/channels/1131492224371277874/1220042081209421945',
        github: 'https://github.com/commerce-docs/microsite-commerce-storefront/tree/develop'
      },
      sidebar: [{
        label: 'Get Started',
        autogenerate: {
          directory: '/get-started/'
        }
      },
      {
        label: 'Discovery',
        collapsed: true,
        autogenerate: {
          directory: '/discovery/'
        },
      },
      {
        label: 'Setup',
        collapsed: true,
        autogenerate: {
          directory: '/setup/'
        },
      },
      {
        label: 'Analytics',
        collapsed: true,
        autogenerate: {
          directory: '/analytics/'
        },
      },
      {
        label: 'SEO',
        collapsed: true,
        autogenerate: {
          directory: '/seo/'
        },
      },
      {
        label: 'Dropins',
        collapsed: true,
        items: [
          {
            label: 'Overview',
            link: '/dropins/all/introduction/'
          },
          // {
          //   label: 'Anatomy of a dropin',
          //   link: '/dropins/all/anatomy/'
          // },
          {
            label: 'Installing dropins',
            link: '/dropins/all/installing/'
          },
          {
            label: 'Branding dropins',
            link: '/dropins/all/branding/'
          },
          // {
          //   label: 'Localizing dropins',
          //   link: '/dropins/all/localizing/'
          // },
          {
            label: 'Styling dropins',
            link: '/dropins/all/styling/'
          },
          {
            label: 'Extending dropins',
            link: '/dropins/all/extending/'
          },
          // {
          //   label: 'Enriching dropins',
          //   link: '/dropins/all/enriching/'
          // },
          {
            label: 'Product Details Page',
            collapsed: true,
            items: [
              { label: 'Overview', link: '/dropins/product-details/' },
              { label: 'PDP Installation', link: '/dropins/product-details/pdp-installation/' },
              { label: 'PDP Initialization', link: '/dropins/product-details/pdp-initialization/' },
              { label: 'PDP Styles', link: '/dropins/product-details/pdp-styles/' },
              { label: 'PDP Containers', link: '/dropins/product-details/pdp-containers/' },
              { label: 'PDP Slots', link: '/dropins/product-details/pdp-slots/' },
              { label: 'PDP Functions', link: '/dropins/product-details/pdp-functions/' }
            ]
          },
          {
            label: 'Cart',
            collapsed: true,
            items: [
              { label: 'Overview', link: '/dropins/cart/' },
              { label: 'Cart Installation', link: '/dropins/cart/cart-installation/' },
              { label: 'Cart Styles', link: '/dropins/cart/cart-styles/' },
              { label: 'Cart Containers', link: '/dropins/cart/cart-containers/' },
              { label: 'Cart Slots', link: '/dropins/cart/cart-slots/' },
              { label: 'Cart Functions', link: '/dropins/cart/cart-functions/' },
            ]
          },
          {
            label: 'Checkout',
            collapsed: true,
            items: [
              { label: 'Overview', link: '/dropins/checkout/' },
              { label: 'Installation', link: '/dropins/checkout/installation/' },
              { label: 'Initialization', link: '/dropins/checkout/initialization/' },
              { label: 'Styles', link: '/dropins/checkout/styles/' },
              { label: 'Containers',
                collapsed: true,
                items: [
                  { label: 'BillToShippingAddress', link: '/dropins/checkout/containers/bill-to-shipping-address/' },
                  { label: 'EstimateShipping', link: '/dropins/checkout/containers/estimate-shipping/' },
                  { label: 'LoginForm', link: '/dropins/checkout/containers/login-form/' },
                  { label: 'MergedCartBanner', link: '/dropins/checkout/containers/merged-cart-banner/' },
                  { label: 'OrderConfirmationHeader', link: '/dropins/checkout/containers/order-confirmation-header/' },
                  { label: 'OutOfStock', link: '/dropins/checkout/containers/out-of-stock/' },
                  { label: 'PaymentMethods', link: '/dropins/checkout/containers/payment-methods/' },
                  { label: 'PlaceOrder', link: '/dropins/checkout/containers/place-order/' },
                  { label: 'ServerError', link: '/dropins/checkout/containers/server-error/' },
                  { label: 'ShippingMethods', link: '/dropins/checkout/containers/shipping-methods/' },
                ]
              },
              // { label: 'Slots', link: '/dropins/checkout/slots/' },
              { label: 'Functions', link: '/dropins/checkout/functions/' },
            ]
          },
          {
            label: 'User Auth',
            collapsed: true,
            items: [
              { label: 'Overview', link: '/dropins/user-auth/' },
              { label: 'reCAPTCHA', link: '/dropins/user-auth/recaptcha/' },
              { label: 'Functions', link: '/dropins/user-auth/auth-functions/' },
              {
                label: 'Containers',
                collapsed: true,
                items: [
                  { label: 'AuthCombine', link: '/dropins/user-auth/containers/auth-combine/' },
                  { label: 'ResetPassword', link: '/dropins/user-auth/containers/reset-password/' },
                  { label: 'SignIn', link: '/dropins/user-auth/containers/sign-in/' },
                  { label: 'SignUp', link: '/dropins/user-auth/containers/sign-up/' },
                  { label: 'SuccessNotification', link: '/dropins/user-auth/containers/success-notification/' },
                  { label: 'UpdatePassword', link: '/dropins/user-auth/containers/update-password/' },
                ]
              },
            ]
          },
          {
            label: 'User Account',
            collapsed: true,
            items: [
              { label: 'Overview', link: '/dropins/user-account/' },
              { label: ' Initialization', link: '/dropins/user-account/initialization/' },
              { label: 'Styles', link: '/dropins/user-account/styles/' },
              { label: 'Containers', 
                collapsed: true,
                items: [
                  { label: 'Addresses', link: '/dropins/user-account/containers/addresses/' },
                  { label: 'AddressForm', link: '/dropins/user-account/containers/address-form/' },
                  { label: 'CustomerInformation', link: '/dropins/user-account/containers/customer-information/' },
                  { label: 'OrdersList', link: '/dropins/user-account/containers/orders-list/' },
                ]
              },
              // { label: 'Slots', link: '/dropins/user-account/slots/' },
              { label: 'Functions', link: '/dropins/user-account/functions/' },
              { label: 'Sidebar', link: '/dropins/user-account/sidebar/' },
              { label: 'Tutorial', link: '/dropins/user-account/tutorials/' },
            ]
          }]
      },
      {
        label: 'Launch',
        collapsed: true,
        autogenerate: {
          directory: '/launch/'
        },
      },
      {
        label: 'Toubleshooting',
        collapsed: true,
        autogenerate: {
          directory: '/troubleshooting/'
        }
      },
      ]
    }), (await import("@playform/compress")).default({
      CSS: false,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true
    }), react()]
});
