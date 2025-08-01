// ... is a nuxt for catch all route params

import { auth } from "~/lib/auth"; // import your auth config

export default defineEventHandler((event) => {
  return auth.handler(toWebRequest(event));
});
