<script lang="ts" setup>

type SkillCategory = {
    soft: string[];
    technical: string[];
};

const skills: SkillCategory = {
    soft: [
        'Effective Communication',  'Problem solving', 'Time management', 'Team player', 'Adaptability', 'Leadership',
    ],
    technical: [
        'HTML', 'CSS', 'Vue', 'Nuxt', 'Vuex', 'Vuetify',
        'Responsive Web', 'JavaScript (ES6)', 'REST API', 'Version Control (Git, SVN)', 'SCSS/SASS',
        'ReactJS', 'NodeJS (Express)', 'DBMS (Oracle, MySQL, SQLite)', 'SQL',
        'Unit test (Jest)', 'Agile Tools (Jira, Trello)', 'Firebase (DB, Hosting)', 'Visualization (Highchart, D3)', 'Docker',
    ]
};
</script>

<template>
    <main class="page">
        <h3>General</h3>

        <div class="skills">
            <div v-for="soft in skills.soft" :key="soft">
                {{ soft }}
            </div>
        </div>

        <h3>Technology / tools</h3>

        <div class="skills">
            <div v-for="technical in skills.technical" :key="technical">
                {{ technical }}
            </div>
        </div>

    </main>
</template>

<style scoped>
.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.skills div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: inline-block;
    background-color: #e2eaff;
    color: #3451b2;
    border: 1px solid #3451b2;
    padding: 6px 9px;
    font-size: 16px;
    border-radius: 3px;
}

.skills div:hover {
    background-color: #e0e0e0;
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