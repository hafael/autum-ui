<template>
    <jet-dropdown align="right" width="60" >
        <template #trigger>
            <span class="inline-flex rounded-md">
                <button type="button" class="inline-flex items-center p-2 text-gray-600 focus:text-gray-800 dark:focus:text-gray-300 hover:text-gray-800 dark:hover:text-gray-300 active:text-gray-800 dark:active:text-gray-300 transition">
                    <Squares2X2Icon class="w-6 h-6" />
                </button>
            </span>
        </template>

        <template #content>
            <div class="w-60">
                
                <!-- Apps dropdown -->
                <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-300">
                    Meus apps
                </div>

                <div class="grid grid-cols-3 gap-4 mx-4">
                    <a href="#" class="flex flex-col text-gray-700 dark:text-gray-300 font-semibold text-xs text-center">
                        <img class="w-full h-auto rounded-md mb-1 shadow-md" src="/images/autum-dl-app-icon.png" alt="AC - Minha Conta">
                        <span>Conta Autum</span>
                    </a>
                    <a href="#" class="flex flex-col text-gray-700 dark:text-gray-300 font-semibold text-xs text-center">
                        <img class="w-full h-auto rounded-md mb-1 shadow-md" src="/images/autum-ag-app-icon.png" alt="AG - Agenda">
                        <span>Agenda</span>
                    </a>
                    <a href="#" class="flex flex-col text-gray-700 dark:text-gray-300 font-semibold text-xs text-center">
                        <img class="w-full h-auto rounded-md mb-1 shadow-md" src="/images/autum-hd-app-icon.png" alt="HD - Helpdesk">
                        <span>Helpdesk</span>
                    </a>
                    <a href="#" class="flex flex-col text-gray-700 dark:text-gray-300 font-semibold text-xs text-center">
                        <img class="w-full h-auto rounded-md mb-1 shadow-md" src="/images/autum-cs-app-icon.png" alt="CD - Cashier">
                        <span>Vendas</span>
                    </a>
                    <a href="#" class="flex flex-col text-gray-700 dark:text-gray-300 font-semibold text-xs text-center">
                        <img class="w-full h-auto rounded-md mb-1 shadow-md" src="/images/autum-dl-app-icon.png" alt="DL - Delivery">
                        <span>Delivery</span>
                    </a>
                    <a href="#" class="flex flex-col text-gray-700 dark:text-gray-300 font-semibold text-xs text-center">
                        <img class="w-full h-auto rounded-md mb-1 shadow-md" src="/images/autum-cd-app-icon.png" alt="CD - Conta Digital">
                        <span>Conta Digital</span>
                    </a>
                </div>

                <!-- Apps dasboard -->
                <a href="#" class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-300 hover:underline">
                    Ver todos os apps
                </a>

            </div>
        </template>
    </jet-dropdown>
</template>

<script>

    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import { Squares2X2Icon } from '@heroicons/vue/24/outline'

    export default {
        components: {
            JetDropdown,
            JetDropdownLink,
            Squares2X2Icon,
        },

        data() {
            return {
                apps: { data: [], current: {}},
            }
        },

        computed: {
            currentApp() {
                return this.apps.current;
            },

            changeTeamNameRoute() {
                let env = 'accounts-local.';
                return `https://${env}autum.com.br/teams/${this.currentTeam.id}`
            },

            createTeamsRoute() {
                let env = 'accounts-local.';
                return `https://${env}autum.com.br/teams/create`
            }
        },

        mounted() {
            this.fetchApps();
        },

        methods: {
            
            fetchApps() {
                let self = this;
                axios.get(route('api.apps.index')).then((response) => {
                    self.apps = response.data;
                }).catch((error) => {
                    console.log('fetchTeams error', error);
                });
            },
        }
    }
</script>
