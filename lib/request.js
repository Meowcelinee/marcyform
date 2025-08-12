// formData: { "MC user": string, "QC nick"?: string, "Discord user": string, "Material": string, "Reason": string }
export default async function submitRequest(formData) {
    try {
        const { URL: REQUEST_URL } = await fetch(
            'https://meowceline.pages.dev/api/url'
        ).then(response => response.json());

        const embedFields = Object.keys(formData).map(data => {
            return { name: data, value: formData[data] || 'N/A' };
        });

        const reqBody = {
            content: `<@777623770466615326> <@1265542247085244517>`,
            embeds: [
                {
                    title: '⚠ NEW REQUEST ⚠',
                    fields: embedFields,
                },
            ],
        };

        const req = await fetch(REQUEST_URL, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return req.ok;
    } catch (e) {
        console.error(e);
        return false;
    }
}
