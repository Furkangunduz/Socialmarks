<template>
    <div class="bg-gray-100">
        <div class="login_register_container">
            <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
            <input
                v-model="userData.title"
                type="text"
                placeholder="Başlık"
                class="input mb-3"
            />
            <input
                v-model="userData.url"
                type="text"
                placeholder="URL"
                class="input mb-3"
            />
            <select v-model="userData.category_id" class="input mb-3">
                <option disabled value="" selected>Kategori</option>
                <option
                    v-for="category in categoryList"
                    :key="category.id"
                    :value="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
            <textarea
                placeholder="Açıklama"
                class="input mb-3"
                v-model="userData.description"
                cols="30"
                rows="10"
            ></textarea>
            <div class="flex items-center justify-end gap-x-1">
                <button
                    @click="$router.push({ name: 'HomePage' })"
                    class="secondary-button"
                >
                    İptal
                </button>
                <button @click="onSubmit" class="default-button">Kaydet</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            categoryList: [],
            userData: {
                title: null,
                url: null,
                category_id: null,
                description: null,
            },
        };
    },

    created() {
        this.$appAxios.get("/categories").then((res) => {
            this.categoryList = res?.data || [];
        });
    },
    methods: {
        onSubmit() {
            var submittedData = {
                ...this.userData,
                user_id: this._getCurrentUser?.id || 0,
                created_at: new Date(),
            };
            this.$appAxios.post("/bookmarks", submittedData);
            Object.keys(this.userData).forEach((field) => {
                this.userData[field] = null;
            });
        },
    },
    computed: {
        ...mapGetters(["_getCurrentUser"]),
    },
};
</script>
