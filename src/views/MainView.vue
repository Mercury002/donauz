<template>
    <MainLayout>
        <div class="mt-[40px]">
            <div class="flex flex-wrap gap-y-[30px] mb-[80px]">
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/1.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Uy va hovli uchun</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/2.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Bolalar uchun</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/3.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Sovg’alar</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/4.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Automobillar uchun</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/5.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Smartfonlar</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/6.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Go’zallik va salomatlik</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/7.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Quloqchinlar</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/8.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Aqlli soatlar</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/9.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Kolonkalar</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/10.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Kitoblar</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/11.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Voyaga yetganalar 
                        uchun</p>
                </div>
                <div class="flex items-center gap-[7px] flex flex-col sm:w-1/4 lg:w-1/6 w-1/2">
                    <span class="rounded-lg overflow-hidden w-[160px] h-[150px]">
                        <img class="w-full h-full object-cover" src="../assets/img/routingPics/12.png" alt="">
                    </span>
                    <p class="transition-colors hover:text-[#F77F00]">Bolajonlar</p>
                </div>
            </div>

            <div class="mb-[80px]">
                <h1 class="font-semibold text-[40px] mb-[40px]">Yangi Mahsulotlar</h1>

                <div class="flex flex-wrap justify-between gap-y-[20px] mb-[40px] lg:gap-x-[5px] gap-x-[10px]">
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/1.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Choyshab Lelit</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/2.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Xiomi M 10 Smartfon</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/3.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Smartwatch 11</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/4.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">O’tgan kunlar 1</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/5.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Mashina qismlari</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/6.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">O’yinchoq mashina</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card lg:block hidden">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/7.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Xiaomi Ми 8 Lite </span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card lg:block hidden">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/1.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Choyshab Lelit</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <button class="mx-auto block text-white text-xl rounded-[10px] bg-[#F77F00] py-2.5 px-[42px]">Barchasini ko’rish</button>
            </div>

            <div class="mb-[80px]">
                <swiper 
                    :loop="true"
                    :modules="modules" 
                    :spaceBetween="30"
                    :slides-per-view="6" 
                    :breakpoints="breakpoints"
                    :pagination="{clickable: true}" 
                    :autoplay="{ delay: 1500, disableOnInteraction: false }"
                    class="mySwiper h-[150px]"
                >
                    <swiper-slide><img src="../assets/img/brands/apple 1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/lg.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/acer.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/sony.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/asus.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/hplogo 1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/apple 1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/lg.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/brands/acer.png" alt=""></swiper-slide>
                </swiper>
            </div>

            <div class="mb-[80px]">
                <h1 class="font-semibold text-[40px] mb-[40px]">Ommabop tovarlar</h1>

                <div class="flex flex-wrap justify-between gap-y-[20px] mb-[40px] lg:gap-x-[5px] gap-x-[10px]">
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/1.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Choyshab Lelit</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/2.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Xiomi M 10 Smartfon</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/3.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Smartwatch 11</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/4.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">O’tgan kunlar 1</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/5.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Mashina qismlari</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/6.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">O’yinchoq mashina</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card lg:block hidden">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/7.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Xiaomi Ми 8 Lite </span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="card lg:block hidden">
                        <router-link to="/detail" class="sm:ml-auto mx-auto flex flex-col  rounded-lg cursor-pointer" style="box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);">
                            <span class="h-[202px] rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="../assets/img/newProducts/1.png" alt="">
                            </span>
                            <div class="p-2.5">
                                <div class="flex items-center justify-between mb-2.5"> 
                                    <span class="font-normal text-sm">Choyshab Lelit</span>
                                    <span class="flex items-center gap-0.5 text-xs text-[#666666]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.49983 0.081543L9.45048 4.78735L14.4826 5.20768L10.656 8.53636L11.8154 13.5019L7.49983 10.8534L3.18424 13.5019L4.34362 8.53636L0.517064 5.20768L5.54919 4.78735L7.49983 0.081543Z" fill="#F77F00"/>
                                        </svg>
                                        4.3
                                    </span>
                                </div>
                                <div class="flex items-center justify-between mb-5">
                                    <span class="text-lg">149,000 so’m</span>
                                    <span>
                                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.715 7.58348C23.5206 7.25915 23.2423 6.98887 22.9071 6.79901C22.5719 6.60914 22.1913 6.50618 21.8025 6.50015H7.4025L6.75 4.05181C6.68407 3.81547 6.53699 3.60759 6.33271 3.46202C6.12843 3.31645 5.87898 3.24177 5.625 3.25015H3.375C3.07663 3.25015 2.79048 3.36428 2.5795 3.56745C2.36853 3.77061 2.25 4.04616 2.25 4.33348C2.25 4.6208 2.36853 4.89635 2.5795 5.09951C2.79048 5.30268 3.07663 5.41681 3.375 5.41681H4.77L7.875 16.5318C7.94092 16.7682 8.08801 16.976 8.29229 17.1216C8.49657 17.2672 8.74602 17.3419 9 17.3335H19.125C19.3327 17.3329 19.5363 17.2769 19.713 17.1717C19.8897 17.0665 20.0328 16.9163 20.1262 16.7376L23.8162 9.63098C23.9762 9.30816 24.0506 8.95224 24.033 8.59497C24.0153 8.2377 23.9061 7.8902 23.715 7.58348Z" fill="#F77F00"/>
                                            <path d="M8.4375 22.75C9.36948 22.75 10.125 22.0225 10.125 21.125C10.125 20.2275 9.36948 19.5 8.4375 19.5C7.50552 19.5 6.75 20.2275 6.75 21.125C6.75 22.0225 7.50552 22.75 8.4375 22.75Z" fill="#F77F00"/>
                                            <path d="M19.6875 22.75C20.6195 22.75 21.375 22.0225 21.375 21.125C21.375 20.2275 20.6195 19.5 19.6875 19.5C18.7555 19.5 18 20.2275 18 21.125C18 22.0225 18.7555 22.75 19.6875 22.75Z" fill="#F77F00"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <button class="mx-auto block text-white text-xl rounded-[10px] bg-[#F77F00] py-2.5 px-[42px]">Barchasini ko’rish</button>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';  
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import MainLayout from '../layouts/MainLayout.vue'

export default {
    components: {
      Swiper,
      SwiperSlide,
      MainLayout
    },
    setup() {
        const modules = [Pagination, Autoplay];
        const breakpoints = {
            0: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        };
        
        return {
            modules,
            breakpoints
        };
    },
  };
</script>

<style>
.swiper-slide {
    border: 1px solid #F0F0F0;
    box-shadow: 0 1px 5px rgba(182, 182, 182, 0.25);
    max-width: 170px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    background-color: #F77F00;
}

.swiper-pagination-bullet {
    width: 12.41px;
    height: 12.41px;
}

.card {
    flex: 1 1 calc(25% - 5px);

    @media (max-width: 1024px) {
        flex: 1 1 calc(33% - 5px);
    }
}
</style>