<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.input-field {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input {
    margin: 10px;
    width: 10vw;
}

button {
    width: 10vw;
    height: 20px;
}
</style>
<template>
    <section class="login-page">
        <h1>Ingreso aplicación</h1>

        <form>
            <div class="input-field">
                <label for="email">Email</label>
                <input id="email" type="email">
            </div>

            <div class="input-field">
                <label for="password">Password</label>
                <input id="password" type="password">
            </div>

            <button type="submit" @click="login">Ingresar</button>
        </form>
    </section>
</template>

<script>

export default {
    created() {
        console.log("created Login Page", this.$authService)
    },
    methods: {
        login(event) {
            event.preventDefault();
            this.$emit("notify", "HOLA!!")
        }
    }
}
</script>
