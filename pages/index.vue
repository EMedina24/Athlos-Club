<template>
  <div>
    <div class="hero">
      <div  class="container">
        <img class="logo" src="/assets/Logo.png">
        <br>
        <br>
       
      </div>
    </div>

    <div class="container">
      <main>
        <h2>Latest Articles</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <div class="content">
              <span>{{ post.authors[0].name }}</span>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>

  </div>
</template>

<script>

import { getPosts } from '~/api/posts';

export default {
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts }
  }
}
</script>

<style lang="scss">


main h2 {
    margin-top:1em !important;
    text-transform: uppercase;
    font-size: .8em;
}

  .hero {
    background-color: $primary-color;
    color: white;
    text-align: center;
    padding-top: 2em;
    

  

    
  }

  .container ul {
    list-style-type: none;
    padding: 0;
  }

  main {

    li {
      background: white;
      border-radius: 1em;
      padding: .8em;
      margin: 1em 0;
      box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);
    }

    img {
      width: 100%;
      border-radius: .5em;
    }

    .content {
      padding: .5em;
    }

    a {
      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      display: block;
      margin: -.1em 0 .2em;
    }

    h2 {
      margin-top: 3em;
      text-transform: uppercase;
      font-size: .8em;
    }

    span {
      color: $primary-color;
      text-transform: uppercase;
    }

  }

@media only screen and (min-width: 768px) {
  main li {
    display: grid;
    grid-template-columns: 180px auto;
    grid-column-gap: 1em;
  }
}

</style>
