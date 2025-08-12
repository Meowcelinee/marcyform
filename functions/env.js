export async function url(context) {
    console.log(`[/functions/env.js:async url()] context:`);
    console.log(context);

    const URL = context.env.REQUEST_URL;

    return new Response(JSON.stringify(URL));
}
