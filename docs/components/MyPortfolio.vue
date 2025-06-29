<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getDatabase, ref as dbRef, onValue } from "firebase/database";
import firebaseApp from '../firebase';

interface Portfolio {
    name: string;
    url: string;
    desc: string;
    tech: string;
    github: string;
}

const portfolios = ref<Portfolio[]>([]);
const isFetching = ref(false);

function fetchDataPortfoliosOnce(ref: ReturnType<typeof dbRef>) {
    isFetching.value = true;
    onValue(ref, (data) => {
        const val = data.val();
        if (val) {
            let arr = Array.isArray(val) ? val : Object.values(val);
            // Sort descending by name (or change to another property if needed)
            arr = arr.sort((a, b) => a.name.localeCompare(b.name));
            portfolios.value = arr;
        } else {
            portfolios.value = [];
        }
        isFetching.value = false;
    }, (error) => {
        console.log(error);
        isFetching.value = false;
    });
}

onMounted(() => {
    const db = getDatabase(firebaseApp);
    const dbPortfolios = dbRef(db, 'portfolio');
    fetchDataPortfoliosOnce(dbPortfolios);
});
</script>

<template>
    <main class="page">
        <h3>Portfolio</h3>

        <div v-if="isFetching">Fetching data</div>
        <div v-else class="container">
            <div class="portfolio" v-for="portfolio in portfolios" :key="portfolio">
                <a class="title" target="_blank" :href="portfolio.url">{{ portfolio.name }}</a>
                <p class="desc">"{{ portfolio.desc }}"</p>
                <div class="tech">
                    <span class="tech-item" v-for="(tech, index) in portfolio.tech.split(',')" :key="index">
                        {{ tech }}
                    </span>
                </div>
                <hr />
                <span>code: <a :href="portfolio.github" target="_blank">{{ portfolio.github }}</a></span>
            </div>
        </div>


    </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}

.container .portfolio {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    width: 30%;
}

@media (max-width: 599px) {
    .container {
        flex-direction: column;
        gap: 9px;
        align-items: stretch;
    }

    .container .portfolio {
        width: 99%;
    }
}

.container .portfolio div.tech {
    margin-top: 10px;
    font-size: 15px;
    color: #555;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
}

.container .portfolio div.tech span.tech-item {
    display: inline-block;
    background-color: #e2eaff;
    color: #3451b2;
    border: 1px solid #3451b2;
    font-size: 14px;
    padding: 2px 5px;
    margin-right: 5px;
    border-radius: 3px;
}

.container .portfolio div.tech span.tech-item:last-child {
    margin-right: 0;
}

.container .portfolio a.title {
    font-size: 18px;
    font-weight: bold;
    color: #3451b2;
}

.container .portfolio a {
    color: #3451b2;
    text-decoration: none;
}

.container .portfolio a:hover {
    text-decoration: underline;
}

.container .portfolio p {
    margin: 0;
    color: #333;
}

.container .portfolio p.desc {
    font-size: 14px;
    margin: 0;
    color: #333;
}

.container .portfolio hr {
    margin: 10px 0;
    border: 0;
    border-top: 1px solid #ccc;
}

.container .portfolio span {
    font-size: 14px;
    color: #555;
    word-break: break-word;
    white-space: normal;
}

h3 {
    margin: 20px 0;
    font-size: 18px;
    color: #98989f;
}

.page {
    margin: auto;
}
</style>