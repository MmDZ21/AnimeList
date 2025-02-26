const fetch = require("node-fetch");
const HttpsProxyAgent = require("https-proxy-agent");

const proxyAgent = new HttpsProxyAgent.HttpsProxyAgent("http://127.0.0.1:10809");

async function customFetch(url, options) {
  return fetch(url, {
    ...options,
    agent: proxyAgent,
  });
}

module.exports = { default: customFetch };