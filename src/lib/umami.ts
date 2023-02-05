const LOGIN_ENDPOINT = `https://umami.vahryiskandar.my.id/api/auth/login`;

const Token = async () => {
    const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
            email: process.env.UMAMI_EMAIL,
            password: process.env.UMAMI_PASSWORD
        }),
    });

    return response.json();
};

export const getAnalytics = async () => {
    const { token } = await Token();

    return fetch(`https://umami.vahryiskandar.my.id/api/website/1`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}