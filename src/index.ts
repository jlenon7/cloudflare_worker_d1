/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { pathname } = new URL(request.url);

		if (pathname === '/api/users') {
			const { results } = await env.DB.prepare('SELECT * from users').all();

			return Response.json(results);
		}

		if (pathname.includes('/api/users/')) {
			const splitted = pathname.split('/');
			const id = splitted[splitted.length - 1];
			const { results } = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).all();

			return Response.json(results);
		}

		return new Response('Call /api/users to see all users. Call /api/users/1 to see user with id 1');
	},
};
