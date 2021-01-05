const microcms = {
  apiKey: process.env.MICROCMS_API_KEY || '', // X-API-KEY
  globalDraftKey: process.env.MICROCMS_GLOBAL_DRAFT_KEY || '', // X-GLOBAL-DRAFT-KEY
};

export default {
  target: 'static',
  modules: ['@nuxtjs/axios'],
  publicRuntimeConfig: {
    microcms: process.env.NODE_ENV === 'production' ? {} : microcms,
  },
  privateRuntimeConfig: {
    microcms,
  },
  axios: {
    baseURL: `https://${process.env.MICROCMS_SERVICE_NAME}.microcms.io/api/v1`,
  },
};
