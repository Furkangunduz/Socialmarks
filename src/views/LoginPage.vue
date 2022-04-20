<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Login</h3>
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
        <button @click="onSubmit" class="default-button">Giriş yap</button>
        <span class="text-center mt-3 text-sm">
            Üye değilim,
            <router-link
                class="text-red-900 hover:text-black"
                :to="{ name: 'RegisterPage' }"
            >
                Üye olmak istiyorum!
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
                userName: null,
                password: null,
            },
        };
    },
    methods: {
        onSubmit() {
            const password = CryptoJs.SHA256(this.userData.password).toString();
            this.$appAxios
                .get(
                    `/users/?username=${this.userData.userName}&password=${password}`
                )
                .then((res) => {
                    if (res?.data?.length > 0) {
                        this.$store.commit("setUser", res?.data[0]);
                        // this.$router.push({ name: "HomePage" });
                    } else {
                        alert("kullanıcı bulunamadı");
                    }
                });
        },
    },
};
</script>
