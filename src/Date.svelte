<script lang="ts">
    export let date = "no date";
    
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate()
    
    const months = ["january",  "february",  "march",  "april!",  "may",  "june",  "july",  "august",  "september",  "october",  "november",  "december"]
</script>

<h5>{`${day} ${months[month]}, ${year}`}</h5>

<style>
    h5 {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>