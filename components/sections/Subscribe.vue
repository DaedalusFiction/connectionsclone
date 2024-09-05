<template>
    <section id="contact">
        <div class="container mx-auto p-4 py-24 md:px-24">
            <div class="flex flex-col md:grid gap-4 grid-cols-12">
                <div class="col-span-3">
                    <h4 class="font-semibold text-2xl md:text-5xl uppercase">
                        Move your story forward
                    </h4>
                </div>
                <div class="col-span-9">
                    <div
                        v-if="!isSent"
                        class="flex flex-col md:grid gap-4 grid-cols-12"
                    >
                        <div class="col-span-2"><p>I am interested in:</p></div>
                        <div class="col-span-10">
                            <div
                                v-for="(service, index) in services"
                                :key="index"
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        class="accent-black"
                                        :checked="selectedServices[index]"
                                        @change="toggleService(index)"
                                    />
                                    {{ service }}
                                </label>
                            </div>
                        </div>
                        <div class="col-span-2"><p>Email:</p></div>
                        <div class="col-span-10">
                            <input
                                class="w-full bg-backgroundAccent p-2 focus:outline-none border rounded-lg"
                                v-model="email"
                            />
                        </div>
                        <div class="col-span-2"><p>Message:</p></div>
                        <div class="col-span-10">
                            <textarea
                                rows="4"
                                class="w-full bg-backgroundAccent p-2 focus:outline-none border rounded-lg"
                                v-model="message"
                            />
                        </div>
                    </div>
                    <div v-else class="">
                        <p>Thank you so much! I'll be in touch soon.</p>
                    </div>
                    <div class="flex justify-end">
                        <button
                            v-if="!isSent"
                            class="btn"
                            :class="!isValidEmail && 'btn-disabled'"
                            :disabled="!isValidEmail"
                            @click="send"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from "vue";
import emailjs from "@emailjs/browser";
const props = defineProps(["interestedService"]);
const email = ref("");
const message = ref("");
const isSent = ref(false);
const selectedServices = ref(new Array(4).fill(false));

const services = [
    "Portfolio Website",
    "Custom Website",
    "App Development",
    "Troubleshooting",
];

watch(
    () => props.interestedService,
    (newValue, oldValue) => {
        console.log("Effect running, someProp:", newValue);
        selectedServices.value = selectedServices.value.map(
            (_, index) => index === newValue
        );
    },
    { immediate: true }
);

const toggleService = (index) => {
    selectedServices.value[index] = !selectedServices.value[index];
};

const isValidEmail = computed(() => {
    return email.value.includes("@") && email.value.includes(".");
});

const send = () => {
    const templateParams = {
        website: "FictionalWeb",
        name: selectedServices.value.join(", "),
        email: email.value,
        comment: message.value,
    };
    email.value = "";
    emailjs
        .send(
            "service_t1yo7dn",
            "template_pfang7n",
            templateParams,
            "aMDOy4kUud9rd0Yg9"
        )
        .then(function () {
            isSent.value = true;
        });
};
</script>

<style scoped></style>
