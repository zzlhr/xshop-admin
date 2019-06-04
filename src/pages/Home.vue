<template>
    <el-container>
        <el-aside width="200px">
            <left-nav-menu></left-nav-menu>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import LeftNavMenu from "@/components/LeftNavMenu";

    export default {
        name: 'Home',
        components: {LeftNavMenu},
        component: {LeftNavMenu}
    }
</script>

<style scoped>

</style>