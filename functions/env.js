export async function url(context) {
    const URL = context.env.REQUEST_URL;

    return new Response(URL);
}
