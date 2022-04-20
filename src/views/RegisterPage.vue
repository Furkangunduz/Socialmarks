<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Register</h3>
        <input
            v-model="userData.fullName"
            type="text"
            placeholder="Tam Ad"
            class="input mb-3"
        />
        <input
            v-model="userData.userName"
            type="text"
            placeholder="Kullanıcı Adı"
            class="input mb-3"
        />
        <input
            v-model="userData.password"
            type="password"
            placeholder="Şifre"
            class="input mb-3"
        />
        <button @click="onSave" class="default-button">Kayıt ol</button>
        <span class="text-center mt-3 text-sm">
            Zaten Üyeyim,
            <router-link
                class="text-red-900 hover:text-black"
                :to="{ name: 'LoginPage' }"
            >
                Giriş yap!
            </router-link>
        </span>
    </div>
</template>

<script>
import CryptoJs from "crypto-js";

export default {
    data() {
        return {
            userData: {
                fullName: null,
                userName: null,
                password: null,
            },
        };
    },
    methods: {
        onSave() {
            const password = CryptoJs.SHA256(this.userData.password).toString();
            this.$appAxios
                .post("/users", { ...this.userData, password })
                .then(() => {
                    this.$router.push({
                        name: "HomePage",
                    });
                });
        },
    },
};
</script>
