<template>
    <div>
        <AppHeader />
        <div class="flex flex-row">
            <SideBar />
            <BookMarkList />
        </div>
    </div>
</template>
<script>
import SideBar from "@/components/SidebarComp.vue";
export default {
    components: {
        SideBar,
    },
};
</script>
