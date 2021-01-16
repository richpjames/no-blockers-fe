<script lang="ts">
    import Date from "./Date.svelte";
    import marked from 'marked';
    export let title:string = 'no title'
    export let content: string = 'no content';
    export let publishedAt:string = "date"

 
</script>

<section>
    <h2>{title}</h2>
    <Date date={publishedAt} />
    {@html marked(content)}
</section>