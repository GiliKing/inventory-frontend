const getParam = () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const catId = url.searchParams.get('cat_id');
    return  catId;
}

export default getParam;