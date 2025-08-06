const URL = 'redacted';

// formData: { "MC user": string, "QC nick"?: string, "Discord user": string, "Material": string, "Reason": string }
export default async function submitRequest(formData) {
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

    const req = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return req.ok;
}
