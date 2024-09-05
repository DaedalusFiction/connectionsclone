import rumenScreencap from "../assets/images/rumenScreencap.webp";
import jamesCole from "../assets/images/jamesCole.webp";
import flavor from "../assets/images/flavor.webp";
import angelo from "../assets/images/angelo.webp";
import johnPotter from "../assets/images/johnPotter.webp";
import reflections from "../assets/images/reflections.webp";
import mvdbShowcase from "../assets/images/mvdb_screencap.webp";

const portfolio = [
    {
        name: "Angelo Jewelry",
        backgroundColor: "#FEE440",
        headerImage: { src: angelo, alt: "screenshot of Angelo Jewelry" },
        year: "2023",
        href: "https://commerce-template.netlify.app",
        industry: "Retailer",
        deliverables: [
            "Website Design",
            "Website Development",
            "Copywriting & Editing",
        ],
        description:
            "Angelo Jewelry was founded in 1998 by Lee Angelo Marraccini and his wife, Pam. Located on the downtown mall in Charlottesville, Virginia, they offer hand-made jewelry crafted by Lee as well as a number of other nationally recognized jewelers.",
    },
    {
        name: "John RC Potter",
        backgroundColor: "#FEE440",
        headerImage: { src: johnPotter, alt: "Screenshot of johnrcpotter.com" },
        year: "2024",
        href: "https://johnrcpotter.com",
        industry: "Portfolio",
        deliverables: ["Website Design", "Website Development"],
        description:
            "John RC Potter was born in Canada and was raised on a farm in southwestern Ontario near the town of Clinton. He has lived in several countries (Israel, Indonesia, Türkiye, UAE), due to his career as an international educator (university counsellor, school principal, teacher). He has lived in Türkiye for several years (currently in Istanbul, previously in Izmir). He started this website in order to showcase his published creative writing, and to reach a wider readership.",
    },
    {
        name: "Flavor Catering",
        backgroundColor: "#FEE440",
        headerImage: {
            src: flavor,
            alt: "screenshot of flavor catering website",
        },
        year: "2023",
        href: "https://flavorcville.com",
        industry: "Food Service",
        deliverables: ["Website Design", "Website Development"],
        description:
            "Flavor Catering of Charlottesville, Virginia provides catered meals to a variety of businesses and communities in the area. They work closely with UVA sports as well as many fraternities and sororities to create memorable, healthy, delicious dining experiences.",
    },
    {
        name: "MetroidvaniaDB",
        backgroundColor: "#09bc8a",
        headerImage: { src: mvdbShowcase, alt: "screenshot of Metroidvaniadb" },
        year: "2024",
        industry: "Video Game Database",
        deliverables: [
            "Website Design",
            "Website Development",
            "Database Generation",
            "Search Integration",
        ],
        href: "https://metroidvaniadb.com",
        description:
            "MetroidvaniaDB a database of Metroidvanias, which is a portmanteau of Metroid and Castlevania, two of the pioneering franchises in this exploration- and character-progression-based action platformer. I integrated Algolia Search with Firebase to make it easy for users to find games based on a variety of fields.",
    },
    {
        name: "James Cole",
        backgroundColor: "#09bc8a",
        headerImage: {
            src: jamesCole,
            alt: "screenshot of James Cole portfolio",
        },
        year: "2024",
        industry: "Portfolio",
        deliverables: ["Website Design", "Website Development"],
        href: "https://jamescoleauthor.com",
        description:
            "James Cole is a poet, writer, filmmaker, and scientist based out of Morgantown, WV. James' writings have appeared in numerous publications over the years, many of which can be viewed on the Writings tab. In 2019 he published his first collection, Crow, come home, with VerbalEyze Press.",
    },
    {
        name: "Reflections",
        backgroundColor: "#09bc8a",
        headerImage: { src: reflections, alt: "screenshot of Reflections" },
        year: "2024",
        industry: "Group Therapy",
        deliverables: ["Website Design", "Website Development"],
        href: "https://charlottesvillereflections.com",
        description:
            "Reflections is a Charlottesville-based therapy group designed for anyone who identifies as female. They discuss body image and cultural influence in a safe and confidential environment.",
    },
    {
        name: "The Rumen",
        backgroundColor: "#9B5DE5",
        headerImage: { src: rumenScreencap, alt: "screenshot of the rumen" },
        year: "2024",
        industry: "Literary Journal",
        deliverables: [
            "Website Design",
            "Website Development",
            "Database Management",
        ],
        href: "https://therumen.com",
        description:
            "Poet and academic James Cole and I collaborate on a literary journal that publishes fiction, poetry, and creative non-fiction. The journal is listed on Duotrope and in Poets & Writers. It uses Firebase as a BaaS and email.js to handle form emails.",
    },
];

export { portfolio };
