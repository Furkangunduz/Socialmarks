<template>
    <div>
        <AppHeader />
        <div class="flex flex-row">
            <SideBar @category-changed="updateBookmarkList" />
            <BookMarkList :items="bookmarkList" />
        </div>
    </div>
</template>
<script>
import SideBar from "@/components/SidebarComp.vue";
export default {
    components: {
        SideBar,
    },
    data() {
        return {
            bookmarkList: [],
        };
    },
    created() {
        this.$appAxios
            .get("/bookmarks?_expand=category&_expand=user")
            .then((res) => {
                this.bookmarkList = res?.data || [];
            });
    },
    methods: {
        updateBookmarkList(categoryId) {
            this.$appAxios
                .get(
                    `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
                )
                .then((res) => {
                    this.bookmarkList = res?.data || [];
                });
        },
    },
};
</script>
