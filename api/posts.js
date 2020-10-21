import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://edgardomedina.ghost.io',
    key: '59d20873593a3e57b1ede9a977',
    version: "v3"
  });

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getPage(pageSlug) {
    return await api.pages
        .read({
            slug: pageSlug
        })
        .catch(err => {
            console.error(err);
        })
}