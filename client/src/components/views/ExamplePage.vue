<template>

    <div>example page</div>
    {{ message }}

</template>


<script setup lang="ts">
    import { useAppBarStore } from '@/store/app';
    import { ref, onBeforeMount, onMounted } from "vue";
    import * as helloWorldService from "@/services/api-services/helloWorldService";


    //refs
    const message = ref<string>();

    //storehelloWorldService
    const store = useAppBarStore();




    onBeforeMount(async () => {
        store.title = "Example Page";

        const messageResponse: Message = await helloWorldService.getHelloWorld();

        message.value = messageResponse.message;

    });


</script>