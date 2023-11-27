import { config } from 'dotenv';

const out = config({
  path: `${process.cwd()}/../../.env`,
});

export const useInfrastructure = () => ({
  configuration: {
    app: {
      stage: out.parsed.stage,
      allowed_headers: out.parsed.allowed_headers,
      name: out.parsed.app_name,
      auth: out.parsed.app_auth,
    },
    api: {
      url: out.parsed.api_url,
      port: out.parsed.api_port,
    },
    web: {
      url: out.parsed.web_url,
    },
    email: { from: out.parsed.email_from },
    payload: {
      secret: out.parsed.payload_secret,
      users_slug: out.parsed.payload_users_slug,
    },
    mongo: {
      port: out.parsed.mongo_port,
      host: out.parsed.mongo_host,
      password: out.parsed.mongo_password,
      username: out.parsed.mongo_username,
      db: out.parsed.mongo_db,
      url: out.parsed.mongo_url,
    },
  },
});
