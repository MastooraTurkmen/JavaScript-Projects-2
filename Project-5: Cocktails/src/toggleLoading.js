import getElement from "./getElement.js"

export default showLoading = () => {
    const loading = getElement(".loading");

    
    loading.classList.add("hide-loading");
}