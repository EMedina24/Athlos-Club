<template>
    <div class="container">
        <main>
            <h1>{{ post.title }}</h1>
            <div class="content">
                <div v-html="post.html">{{ post.html }}</div>
            </div>
        </main>
    </div>
</template>

<script>

import { getSinglePost } from '~/api/posts';

export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);
    return { post: post }
  }
}
</script>

<style lang="scss">

    p {
    padding: 0.8rem !important;
    margin-bottom: 0.5em !important;
}

    header {
        height: 15em;
    }

    h1 {
        color: black;
        margin-bottom: 1em;
        font-size: 2rem !important;
    }

    h2 {
        color: black;
        margin-bottom: 1em;
        font-size: 2rem !important;
    }

    h3 {
        color: black;
        margin-bottom: 1em;
        font-size: 2rem !important;
    }

    .content {
        background: white;
       
       
        padding: 1em !important;
    }

    main {
        margin-top: -9em;
    }

    .content img {
        width: 100%;
    }

@media only screen and (min-width: 768px) {
    .content {
        padding: 2em;
    }
}

</style>
