import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    return null;
  }

  const splitAuth = authHeader.split("_");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}

const validTestHeader = {
  authorization: "ApiKey_4f9a2c7e81b3d65a09e4c1f7b2d8a3e6_xxxx",
};
const invalidTestHeader = {};
