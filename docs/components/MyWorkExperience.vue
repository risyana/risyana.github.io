<script lang="ts" setup>

interface WorkExperience {
    company: string;
    description?: string;
    position: string;
    start_date: string;
    end_date: string;
    summary: string;
}


const workExperiences: WorkExperience[] = [
    {
        company: 'Mekari',
        position: 'Frontend Developer',
        start_date: '2022',
        end_date: 'Current',
        summary: '3+ years',
    },
    {
        company: 'Metranet by Telkom Indonesia',
        description: '(Vutura / ChatAja)',
        position: 'Frontend Developer',
        start_date: '2019',
        end_date: '2021',
        summary: '2+ years',
    },
    {
        company: 'Fujitsu Indoneia',
        position: 'ERP Consultant',
        start_date: '2013',
        end_date: '2019',
        summary: '6+ years',
    },
]


</script>

<template>
    <main class="page">
        <h3>Work Experience</h3>

        <div class="work-experiences">
            <div v-for="workExperience in workExperiences" :key="workExperience.company">
                <h4 style="text-align: center;">{{ workExperience.company }}</h4>
                <p v-if="workExperience.description" style="text-align: center;">{{ workExperience.description }}</p>
                <p style="font-weight:bold;">{{ workExperience.start_date }} - {{ workExperience.end_date }}
                    <span style="font-size: 12px;"> ({{ workExperience.summary }})</span>
                </p>
                <p>{{ workExperience.position }}</p>
            </div>
        </div>

    </main>
</template>

<style scoped>
.work-experiences {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.work-experiences div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: inline-block;
    background-color: #e2eaff;
    color: #3451b2;
    border: 1px solid #3451b2;
    padding: 9px;
    font-size: 16px;
    border-radius: 3px;
    width: 30%;
}

@media (max-width: 599px) {
    .work-experiences {
        flex-direction: column;
        gap: 9px;
        align-items: stretch;
    }

    .work-experiences div {
        width: 99%;
    }
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