// customFetch.ts
import fetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

const proxyUrl ="http://127.0.0.1:10809" // e.g. "http://127.0.0.1:10809"

export default async function customFetch (input: RequestInfo, options?: any): Promise<Response> {
  // Create an agent if a proxy URL is defined
  const agent = proxyUrl ? new HttpsProxyAgent.HttpsProxyAgent(proxyUrl) : undefined;
  return fetch(url, { ...options, agent });
}
