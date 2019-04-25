import {FileMonitoringToolsApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {FileMonitoringToolsApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new FileMonitoringToolsApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
