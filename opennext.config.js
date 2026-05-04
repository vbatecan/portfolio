/** @type {import('opennext').default.Config} */
const config = {
  default: {
    override: {
      wrapper: "opennextjs-cloudflare/wrapper",
      converter: "opennextjs-cloudflare/converter",
      incrementalCache: "opennextjs-cloudflare/incremental-cache",
      tagCache: "opennextjs-cloudflare/tag-cache",
      queue: "opennextjs-cloudflare/queue",
    },
  },
};

export default config;