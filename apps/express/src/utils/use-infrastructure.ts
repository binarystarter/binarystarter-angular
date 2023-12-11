export const useInfrastructure = () => ({
  configuration: {
    app: {
      stage: process.env.stage,
      allowed_headers: process.env.allowed_headers,
      name: process.env.app_name,
      auth: process.env.app_auth,
    },
    api: {
      url: process.env.api_url,
      port: process.env.api_port,
    },
    web: {
      url: process.env.web_url,
    },
    email: {
      host: process.env.email_host,
      user: process.env.email_user,
      from: process.env.email_from,
      password: process.env.email_password,
    },
    payload: {
      secret: process.env.payload_secret,
      users_slug: process.env.payload_users_slug,
    },
    mongo: {
      port: process.env.mongo_port,
      host: process.env.mongo_host,
      password: process.env.mongo_password,
      username: process.env.mongo_username,
      db: process.env.mongo_db,
      url: process.env.mongo_url,
    },
  },
});
