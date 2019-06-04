<template>
    <div id="index">
        <div>首页</div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        mounted() {
            let token = localStorage.getItem("token");
            if (token === undefined || token === "" || token === null) {
                this.$router.push({path: "/login"})
            }
        }
    }
</script>

<style scoped>

</style>