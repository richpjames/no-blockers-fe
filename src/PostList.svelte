<script>
    import {postsUrl} from "./constants"
    import { onMount } from 'svelte';
    import Post from "./Post.svelte";
    
    let posts = [];
    let error = null
    
    onMount(async () => {
        const parseJSON = (resp) => (resp.json ? resp.json() : resp);
        const checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp;
        }
        return parseJSON(resp).then((resp) => {
          throw resp;
        });
      };
      console.log("logging env", postsUrl)
        try {
            const res = await fetch(postsUrl, {
              method: "GET",
              headers: {
                 'Content-Type': 'application/json'
              },
            }).then(checkStatus)
          .then(parseJSON);
            posts = res
        } catch (e) {
            error = e
        }
    });
    </script>
    
    {#if error !== null}
      {error}
    {:else}
      <ul>
      {#each posts as post (post.slug)}
        <li>
          <Post title={post.title} content={post.content} publishedAt={post.published_at} />
        </li>
      {/each}
      </ul>
    {/if}
    
    <style>
      ul{
        list-style: none;
        width: min(95vw, 30rem)
      }
    </style>