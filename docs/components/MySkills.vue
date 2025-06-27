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
        <h1 class="timeline-title">Skills</h1>

        <h3>Soft skill</h3>

        <div v-for="soft in skills.soft" :key="soft">
            {{ soft }}
        </div>


        <h3>Technical skill</h3>

        <div v-for="technical in skills.technical" :key="technical">
            {{ technical }}
        </div>

    </main>
</template>
