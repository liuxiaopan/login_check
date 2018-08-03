<template>
    <div class="login">
        <form class="login-form">
            <div>
                <label for="name">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xxx"></use>
                    </svg>
                </label>
                <input type="text" name="name" id="name"/>
            </div>
            <div>
                <label for="password">
                    <i class=""></i>
                </label>
                <input type="text" name="password" id="password"/>
            </div>

            <div>
                <button class="button">登录</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
