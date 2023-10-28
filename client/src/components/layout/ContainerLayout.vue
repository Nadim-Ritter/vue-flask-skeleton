<template>

    <v-navigation-drawer v-model="drawer" class="d-none d-sm-flex">
        
        <!--page title with logo-->
        <v-sheet class="pa-4">
            <v-img max-height="100" src="/img/seb-logo-no-border.png" alt="Logo ETH Zürich"></v-img>
            <div class="app-title text-h6">{{ $t("navigation.title") }}</div>
        </v-sheet>

        <!--navigation items-->
        <v-list>
            <v-list-item v-for="[title, link] in navigationLinks" :key="title" :to="link" link>
                <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar>

        <!--menu icon-->
        <v-app-bar-nav-icon variant="text"
            @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <!--current site title-->
        <v-app-bar-title>{{ appBarStore.title }}</v-app-bar-title>


        <template v-slot:append>

            <div class="switch-container">
                <v-switch class="mx-auto" label="theme test" color="primary" v-model="useLigtTheme"></v-switch>
            </div>

            <!--profile icon menu-->
            <div class="profile-icon-container">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="primary" icon="mdi-account-circle" size="x-large"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item class="d-flex">
                            <v-list-item-title>Logged in as: hello world user</v-list-item-title>
                        </v-list-item>

                    </v-list>
                </v-menu>
            </div>

        </template>

    </v-app-bar>

    <!--main content view-->
    <v-main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>

</template>

<script setup lang="ts">
    import { ref, watch } from "vue"
    import { useAppBarStore } from "@/store/app";
    import { useRoute } from "vue-router";
    import { useTheme } from "vuetify";

    //navigation
    const drawer = ref();
    const navigationLinks = [
        ["Example Page", "/example"],
    ];

    //stores
    const appBarStore = useAppBarStore();

    //theme
    const useLigtTheme = ref<boolean>(true);
    const theme = useTheme();

    watch(useLigtTheme, () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    });

</script>

<style scoped>

</style>