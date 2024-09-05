<template>
    <div class="mt-24" id="main">
        <div class="">
            <div
                class="hero md:rounded-lg md:border border-t border-b mx-auto max-w-7xl"
            >
                <div
                    class="flex items-center justify-center lg:justify-end lg:items-end w-full min-h-[85vh]"
                >
                    <div
                        class="hero-text fade-in-and-right w-full py-16 flex lg:justify-end"
                    >
                        <p
                            class="text-[var(--color-text)] px-4 w-full text-center backdrop-blur-lg lg:backdrop-blur-0 lg:text-start lg:w-[35rem] py-4 lg:px-16 text-3xl"
                        >
                            As a designer and web developer, I help authors,
                            artists, and creatives cultivate their online
                            presences.
                        </p>
                    </div>
                </div>
            </div>
            <section id="portfolio" class="py-12 mx-auto max-w-7xl">
                <h2 class="header">Portfolio</h2>
                <div class="grid grid-cols-12 gap-3">
                    <component
                        v-for="(project, index) in displayedPortfolio"
                        :key="project.name"
                        :is="
                            selectedProject === index
                                ? SectionsProjectPreviewExtended
                                : SectionsProjectPreview
                        "
                        :project="displayedPortfolio[index]"
                        :projectIndex="index"
                        :isSelectedProject="selectedProject === index"
                        @selectProject="
                            handleSelectProject(index, project.name)
                        "
                    />
                </div>
            </section>
            <div
                id="services"
                class="border-t border-b py-12 bg-backgroundAccent"
            >
                <section class="mx-auto max-w-7xl">
                    <h4 class="header">Services</h4>
                    <div class="flex flex-col md:grid grid-cols-12 gap-4">
                        <div
                            v-for="(service, index) in services"
                            :key="service.name"
                            @mouseenter="handleHighlightService(index)"
                            @mouseleave="handleResetServices"
                            @click="handleSetInterestedService(index)"
                            class="col-span-6 rounded-lg border transition p-4 cursor-pointer"
                            :class="{
                                'bg-background':
                                    highlightedService === -1 ||
                                    highlightedService === index,
                            }"
                        >
                            <NuxtLink :to="`#contact`">
                                <div class="md:flex justify-between">
                                    <p
                                        class="text-2xl font-semibold font-header uppercase"
                                    >
                                        {{ service.name }}
                                    </p>
                                    <div>
                                        <p class="text-xs md:text-end">
                                            Starting at
                                        </p>
                                        <p class="text-xl font-semibold">
                                            {{ service.price }}
                                        </p>
                                    </div>
                                </div>
                                <div class="md:grid grid-cols-2 mt-8">
                                    <div class="col-span-1"></div>
                                    <div class="col-span-1">
                                        <p>{{ service.text }}</p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </section>
            </div>
            <section id="process" class="max-w-7xl mx-auto py-12">
                <h4 class="header">The Process</h4>
                <div class="flex flex-col md:grid grid-cols-12 gap-4">
                    <div class="col-span-6 h-full flex items-end">
                        <div>
                            <div
                                v-for="(processStep, index) in process"
                                class="p-3 transition cursor-pointer rounded-lg border hover:border-[#D0CCA7] hover:bg-backgroundAccent"
                                :class="
                                    selectedProcessStep === index
                                        ? ' bg-backgroundAccent border border-[#D0CCA7]'
                                        : 'border-background'
                                "
                                :key="processStep.name"
                                @click="handleSelectProcessStep(index)"
                            >
                                <div class="flex justify-between">
                                    <p
                                        class="text-2xl font-semibold font-header uppercase"
                                    >
                                        {{ processStep.name }}
                                    </p>
                                    <p
                                        class="text-2xl font-semibold font-header uppercase"
                                    >
                                        0{{ index + 1 }}
                                    </p>
                                </div>
                                <p
                                    class="mt-2"
                                    v-if="selectedProcessStep === index"
                                >
                                    {{ processStep.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <img
                            class="object-cover w-full filter h-[90vh] grayscale hover:grayscale-0 transition rounded-lg"
                            :src="process[selectedProcessStep].image"
                            :alt="process[selectedProcessStep].alt"
                        />
                    </div>
                </div>
            </section>
            <div id="about" class="border-t border-b py-12 bg-backgroundAccent">
                <section class="mx-auto max-w-7xl">
                    <h3 class="header">About</h3>
                    <div class="flex flex-col md:grid grid-cols-12 gap-12">
                        <div class="col-span-8 h-full flex items-center">
                            <div class="">
                                <p
                                    class="text-[var(--color-text)] text-3xl md:indent-64"
                                >
                                    My name is David Sorensen, and I believe
                                    that the number of underappreciated artists
                                    and creatives in this world is too damn
                                    high. My mission is to fix that.
                                </p>
                                <br />
                                <p>
                                    As a designer and web developer, I do that
                                    by creating virtual spaces that highlight
                                    the incredible work that people out there
                                    are doing. Whether you're a musician, actor,
                                    culinarian, poet, sculptor, cinematographer,
                                    novelist, painter, stylist, mechanic,
                                    playwright, weaver, potter, blacksmith,
                                    chef, cosmetologist, arborist, photographer,
                                    videographer, calligrapher, woodworker,
                                    luthier, or cobbler...
                                </p>
                                <br />
                                <div class="flex gap-1 items-center">
                                    <p>...Let's show the</p>
                                    <IconsWorld class="w-6" />
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-span-4 flex justify-center items-center"
                        >
                            <img
                                class="object-cover w-full filter max-h-screen grayscale hover:grayscale-0 transition rounded-lg"
                                src="~/assets/images/profile-river.webp"
                                alt="Dave Sorensen posing handsomely on a river rock"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <SectionsSubscribe :interestedService="interestedService" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { portfolio } from "../assets/data";
import SectionsProjectPreview from "../components/sections/ProjectPreview.vue";
import SectionsProjectPreviewExtended from "../components/sections/ProjectPreviewExtended.vue";

//images
import angelo1 from "~/assets/images/angeloMobile1.webp";
import charlene4 from "~/assets/images/charleneLaptop4.webp";
import flavorTablet from "~/assets/images/flavorTablet.webp";
import flavorTablet2 from "~/assets/images/flavorTablet2.webp";

const selectedProject = ref(0);
const selectedProcessStep = ref(0);
const highlightedService = ref(-1);
const interestedService = ref(0);
const displayedPortfolio = ref(portfolio);

const handleSetInterestedService = (index) => {
    console.log("index; ", index);
    interestedService.value = index;
};

const handleSelectProject = (index, name) => {
    // selectedProject.value = index;
    displayedPortfolio.value.unshift(
        displayedPortfolio.value.splice(index, 1)[0]
    );
    // navigateTo("#" + name);
    nextTick(() => {
        const element = document.getElementById(name);
        if (element) {
            const yOffset = -100; // 100 pixels from the top
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    });
};

const handleHighlightService = (index) => {
    highlightedService.value = index;
};

const handleResetServices = () => {
    highlightedService.value = -1;
};

const handleSelectProcessStep = (index) => {
    selectedProcessStep.value = index;
};

const process = [
    {
        name: "Discovery",
        text: "We'll talk in person or over the phone to make sure I understand your vision, goals, and target audience before starting development, which helps to prevent costly mistakes, ensure the website effectively meets requirements, and ultimately deliver a better final product by minimizing misunderstandings and unnecessary features throughout the project.",
        image: flavorTablet,
        alt: "screenshot of Flavor website",
    },
    {
        name: "Design",
        text: "Your website should be a reflection of yourself and your work. We'll work together to decide on an aesthetic direction for the project, including layout, typefaces, color palettes, animations, and negative space, to ensure that users experience your website the way you want them to.",
        image: angelo1,
        alt: "screenshot of angelo website",
    },
    {
        name: "Development",
        text: "I'll build a high-performing single-page app using the latest technologies to create a user experience that is smooth, fast, and intuitive. I take pride in creating robust, quality websites that will perform well on a variety of devices and last long into the future.",
        image: flavorTablet2,
        alt: "screenshot of Flavor website",
    },
    {
        name: "Support",
        text: "Every website I create comes with a month of unlimited support, including training for custom administrative functions, small changes to the original design, and answering any questions you have about the project. After that, you'll get up to two hours per month of small changes to the original design, so that your portfolio continues to grow as you do. And if anything ever goes wrong, I'll fix it at absolutely no charge, no matter how long it takes.",
        image: charlene4,
        alt: "screenshot of Charlene Morris portfolio website",
    },
];

const services = [
    {
        name: "Portfolio Website",
        text: "Perfect for the artist, author, or creative that needs something fast, beautiful, and reliable, and needs it now. I'll send you a form custom-built to your art, and I'll have your portfolio website up in as little as a week. The best part? Updating it or making changes is as easy as sending me an email.",
        image: "~/assets/images/rumenScreencap.webp",
        price: "$500 + 200/yr",
    },
    {
        name: "Custom Website",
        text: "Want something with a little more oomph? Have an idea for something uniquely you? I'll work with you to create your own unique spot on the internet, one that will have people why they ever look at any other websites, ever.",
        image: "~/assets/images/rumenScreencap.webp",
        price: "$1500 + 400/yr",
    },
    {
        name: "App Development",
        text: "Got a big idea? I'll build you a single-page app and make your vision come alive. I'm fluent in a number of modern tools, including various AI models, Firebase, shopify, webhooks, Algolia search, Google Analytics, and more.",
        image: "~/assets/images/rumenScreencap.webp",
        price: "$65/hr",
    },
    {
        name: "Troubleshooting",
        text: "Need help setting up a business email? Got your own website already, but the mobile view doesn't look good? Want someone to replace every selfie in your arch-enemy's facebook page with pictures of hairless cats? I can do it all. Well, maybe not the last one, but you get the idea.",
        image: "~/assets/images/rumenScreencap.webp",
        price: "$55/hr",
    },
];
</script>

<style scoped>
section {
    @apply px-4;
}

.hero {
    background: url("~/assets/images/background/rose2.webp");
    background-position: center;
    background-size: cover;
}

.titles {
    @apply h-8 lg:h-16;
    overflow: hidden;
}

.header {
    @apply text-xl text-end mb-2 font-serif uppercase;
}
</style>
