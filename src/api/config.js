const devBaseURL = "/api";
const proBaseURL = "http://120.79.30.238:8000";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
