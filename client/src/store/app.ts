import { defineStore } from "pinia"
import { ref } from "vue";
import {navigateTo} from "@/router/navigation";

//-------------------------------------------------//
export const useAppBarStore = defineStore("appBar", () => {
  const title = ref<string>("Example Title");

  return {title};
});
//-------------------------------------------------//


//-------------------------------------------------//
export const useLoadingStore = defineStore("loading", () => {
  const skipLoading = ref<boolean>(false);
  const isLoading = ref<boolean>(false);

  return {skipLoading, isLoading};
});
//-------------------------------------------------//