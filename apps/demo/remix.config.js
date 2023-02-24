/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	// When running locally in development mode, we use the built in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	server: process.env.VERCEL ? './server.js' : undefined,
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  serverBuildPath: "api/index.js",
  serverDependenciesToBundle: ['@rangle/radius-react-core-foundations', '@rangle/radius-react-core-components'],
};
