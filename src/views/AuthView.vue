<template>
    <AuthLayout>
        <div class="h-screen flex items-center justify-center relative">
            <div class="absolute top-5 left-10 w-[98px] h-[34px] sm:top-8 sm:left-20 sm:w-auto sm:h-auto">
                <img src="../assets/img/logo.png" alt="">
            </div>

            <div class="px-[20px] pt-[20px] pb-[25px] sm:px-[30px] sm:pt-[30px] sm:pb-[40px] border bg-[#FAFAFA] rounded-lg md:w-auto w-4/5">
                <p class="font-semibold text-2xl text-center">Tizimga kirish</p>
                <p class="font-normal text-base sm:text-lg mt-[20px]">Parol va Telefon raqamingizni kiriting</p>

                <div class="flex flex-col md:w-[487px] w-full gap-[20px] mt-[20px]">
                    <MaskInput v-model="form.phoneNumber" mask="+998 ## ### ## ##" class="bg-[#E1E1E1] p-[18px] outline-none rounded-lg text-[15px]" type="phone" />
                    <input v-model="form.password" class="bg-[#E1E1E1] p-[18px] outline-none rounded-lg text-[15px]" type="password" placeholder="Parol">
                </div>

                <button @click="checkProfile" class="block rounded-lg bg-[#F77F00] mt-[30px] text-white py-3 px-12 mx-auto">Kirish</button>

                <div class="flex items-center sm:justify-between sm:flex-row flex-col mt-[20px]">
                    <span class="cursor-pointer">Ro’yhatdan o’tmaganmisiz?</span>
                    <span class="cursor-pointer">Parolingizni unutdingizmi?</span>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>

<script>
import { MaskInput } from 'vue-3-mask';
import AuthLayout from '../layouts/AuthLayout.vue'

export default {
    components: {AuthLayout, MaskInput},

    data() {
        return {
            form: {
                phoneNumber: '+998',
                password: ''
            }
        }
    },
    methods: {
        checkProfile() {
            console.log(this.form)
            if (this.form.phoneNumber === '+998 11 111 11 11' && this.form.password === 'admin') {

                localStorage.setItem('authenticated', true)
                this.$router.push('/main');
            } 
            else localStorage.setItem('authenticated', false)
        }
    }
}
</script>