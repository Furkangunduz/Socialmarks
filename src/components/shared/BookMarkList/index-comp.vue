<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
            <BookMarkListItem v-for="i in 10" :key="i" />
        </div>
    </div>
</template>
<script>
import BookMarkListItem from "./BookMarkListItem.vue";
export default {
    components: {
        BookMarkListItem,
    },
};
</script>
