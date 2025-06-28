<script lang="ts" setup>

type SkillCategory = {
    soft: string[];
    technical: string[];
};

const skills: SkillCategory = {
    soft: [
        'Teaching', 'Problem solving', 'Leadership', 'Team player'
    ],
    technical: [
        'HTML', 'CSS', 'Vue', 'Nuxt', 'Vuex', 'Vuetify',
        'Responsive Web', 'JavaScript (ES6)', 'REST API', 'Version Control (Git, SVN)', 'SCSS ',
        'ReactJS', 'NodeJS (Express)', 'DBMS (Oracle, MySQL, SQLite)', 'SQL',
        'Unit test (Jest)', 'Agile Tools (Jira, Trello)', 'Firebase (DB, Hosting)', 'Visualization (Highchart, D3)', 'Docker ',
    ]
};
</script>

<template>
    <main class="page">
        <h3>Soft skill</h3>

        <div class="skills">
            <div v-for="soft in skills.soft" :key="soft">
                {{ soft }}
            </div>
        </div>

        <h3>Technical skill</h3>

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
    background-color: #f6f6f7;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
    transition: background-color 0.3s;
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