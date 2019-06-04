<template>
    <div>
        <nav class="xshop-login-nav">
            <label>XSHOP后台登录</label>
        </nav>

        <div>
            <el-card class="xshop-login-box">
                <h2>管理员登陆</h2>
                <el-form ref="loginForm" :model="loginFormData" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox-group class="xshop-login-readme" v-model="loginFormData.readMe">
                            <el-checkbox label="记住我" name="readMe"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <a href="#">忘记密码?</a>
                </el-form>
                <el-button class="xshop-login-btn" type="primary" @click="loginDo">登录</el-button>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginFormData: {
                    readMe: false
                }
            };
        },
        methods: {
            loginDo() {
                localStorage.setItem("token", "123");
                this.$router.push({path: "/home"})
            },

        }
    }
</script>

<style lang="scss" scoped>
    .xshop-login-nav {
        width: 100%;
        height: 46px;
        background: #000;

        label {
            color: #fff;
            line-height: 46px;
        }
    }

    .xshop-login-box {
        margin: 80px auto auto;
        width: 600px;
    }

    .xshop-login-btn {
        width: 100%;
    }

    .xshop-login-readme {
        text-align: left;
    }
</style>