const token = process.env.GITHUB_TOKEN;
// get 3 latest commits all repos
const GITHUB_LATEST_COMMITS_ENDPOINT = `https://api.github.com/users/DemuraAIdev/repos?per_page=100`;

export const getLatestCommits = async () => {
    const response = await fetch(GITHUB_LATEST_COMMITS_ENDPOINT, {
        headers: {
            Authorization: `token ${token}`,
        },
    });

    return response.json();
}