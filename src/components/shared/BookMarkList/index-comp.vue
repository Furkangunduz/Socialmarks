<template>
    <div>
        <div
            class="p-2 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4"
        >
            <BookMarkListItem
                v-for="(item, indx) in items"
                :key="indx"
                :item="item"
            />
        </div>
    </div>
</template>
<script>
import BookMarkListItem from "./BookMarkListItem.vue";
export default {
    components: {
        BookMarkListItem,
    },
    props: {
        items: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
};
</script>
