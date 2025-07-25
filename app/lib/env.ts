import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// by export defaulting this it will try to parse right away, and it will fail if one of the
// values is missing so the app wont start if all vals are not present
tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
