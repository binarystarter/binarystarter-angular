import { environment } from "../../../environments/environment";

const base = `${environment.api.url}/admin`;
export const DashboardPaths = {
  base,
  dashboard: `${base}`,
  profile: `${base}/account`,
};
