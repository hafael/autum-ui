<template>
    <div>
        <inertia-head :title="pageTitle + 'Autum Blank'" />
        <jet-banner />

        <div class="min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white transition duration-300">
            <nav class="bg-white border-b border-gray-100 dark:bg-gray-900 dark:text-white dark:border-gray-600">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center">
                                <inertia-link :href="route('dashboard')">
                                    <jet-application-mark class="block h-9 w-auto" />
                                </inertia-link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <jet-nav-link :href="route('contacts.index')" :active="route().current('contacts.index')">
                                    Meus Contatos
                                </jet-nav-link>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">

                            <toggle-dark-mode />

                            <NotificationIcon 
                                :unread-notifications="hasUnreadNotications"
                                @toggle="toggleNotifications" />
                            
                            <div class="ml-3 relative" v-if="$page.props.jetstream.hasTeamFeatures">
                                <!-- Teams Dropdown -->
                                <jet-dropdown align="right" width="60" >
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">
                                                {{ $page.props.user.current_team.name }}&nbsp;<small>({{ $page.props.user.current_network }})</small>

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <div class="w-60">
                                            
                                            <!-- Team Management -->
                                            <template v-if="$page.props.jetstream.hasTeamFeatures">
                                                <div class="block px-4 py-2 text-xs text-gray-400">
                                                    Gerenciar equipe
                                                </div>

                                                <!-- Team Settings -->
                                                <jet-dropdown-link :href="route('teams.show', $page.props.user.current_team)">
                                                    Configurações
                                                </jet-dropdown-link>

                                                <jet-dropdown-link :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
                                                    Nova equipe
                                                </jet-dropdown-link>

                                                <div class="border-t border-gray-100"></div>

                                                <!-- Team Switcher -->
                                                <div class="block px-4 py-2 text-xs text-gray-400">
                                                    Alternar entre equipes
                                                </div>

                                                <template v-for="team in $page.props.user.all_teams" :key="team.id">
                                                    <form @submit.prevent="switchToTeam(team)">
                                                        <jet-dropdown-link as="button">
                                                            <div class="flex items-center">
                                                                <svg v-if="team.id == $page.props.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                <div>{{ team.name }}</div>
                                                            </div>
                                                        </jet-dropdown-link>
                                                    </form>
                                                </template>
                                            </template>
                                        </div>
                                    </template>
                                </jet-dropdown>
                            </div>

                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <navbar-settings-dropdown />
                            </div>
                            
                        </div>

                        <!-- Hamburger -->
                        <div class="flex items-center sm:hidden">
                            <toggle-dark-mode />

                            <NotificationIcon 
                                :unread-notifications="hasUnreadNotications"
                                @toggle="toggleNotifications" />

                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="ml-3 inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
                            </button>

                            
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div class="flex items-center px-4 cursor-pointer" @click="goToMyAccount">
                            <div v-if="$page.props.jetstream.managesProfilePhotos" class="flex-shrink-0 mr-3" >
                                <img class="h-10 w-10 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
                            </div>

                            <div>
                                <div class="font-medium text-base">{{ $page.props.user.name }} {{ $page.props.user.lastname }}</div>
                                <div class="font-semibold text-sm text-gray-500">@{{ $page.props.user.username }}</div>
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">

                            <jet-responsive-nav-link :href="route('manager.dashboard')" :active="route().current('manager.dashboard')" v-if="profileIs('manager')">
                                <template #icon><CogIcon class="w-4 h-4" /></template>
                                Área do Gerente
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('admin.dashboard')" :active="route().current('admin.dashboard')" v-if="$page.props.user.is_admin || profileIs('admin')">
                                <template #icon><CogIcon class="w-4 h-4" /></template>
                                Área administrativa
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('contacts.index')" :active="route().current('contacts.index')">
                                <template #icon><UserGroupIcon class="w-4 h-4" /></template>
                                Meus Contatos
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('profile.show')" :active="route().current('profile.show')">
                                <template #icon><UserCircleIcon class="w-4 h-4" /></template>
                                Perfil & Segurança
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('api-tokens.index')" :active="route().current('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">
                                API
                            </jet-responsive-nav-link>

                            <!-- Authentication -->
                            <form method="POST" @submit.prevent="logout">
                                <jet-responsive-nav-link as="button">
                                    <template #icon><LogoutIcon class="w-4 h-4" /></template>
                                    Sair
                                </jet-responsive-nav-link>
                            </form>

                            <!-- Team Management -->
                            <template v-if="$page.props.jetstream.hasTeamFeatures">
                                <div class="border-t border-gray-200"></div>

                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Gerenciar equipes
                                </div>

                                <!-- Team Settings -->
                                <jet-responsive-nav-link :href="route('teams.show', $page.props.user.current_team)" :active="route().current('teams.show')">
                                    Configurações
                                </jet-responsive-nav-link>

                                <jet-responsive-nav-link :href="route('teams.create')" :active="route().current('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
                                    Nova equipe
                                </jet-responsive-nav-link>

                                <div class="border-t border-gray-200"></div>

                                <!-- Team Switcher -->
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Alternar entre equipes
                                </div>

                                <template v-for="team in $page.props.user.all_teams" :key="team.id">
                                    <form @submit.prevent="switchToTeam(team)">
                                        <jet-responsive-nav-link as="button">
                                            <div class="flex items-center">
                                                <svg v-if="team.id == $page.props.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <div>{{ team.name }}</div>
                                            </div>
                                        </jet-responsive-nav-link>
                                    </form>
                                </template>

                                
                            </template>
                        </div>
                    </div>
                </div>

                <!-- Notification Central -->
                <div :class="{'block': showingNotificationDropdown, 'hidden': ! showingNotificationDropdown}" class="relative md:fixed md:w-full h-full bottom-0">
                    <div class="hidden md:block absolute w-full h-full bg-white dark:bg-black opacity-75" @click="toggleNotifications"></div>
                    <!-- Responsive Settings Options -->
                    <div class="border-t border-gray-200 md:absolute md:top-0 md:right-0 md:w-1/4 md:h-full md:border-l border-gray-400 dark:border-gray-500 bg-white dark:bg-black">
                        <NotificationCentral
                            class="pt-4 pb-1 w-full md:h-full"
                            :notifications="notifications"
                            @update="fetchNotifications"
                            @close="toggleNotifications" />
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white dark:bg-gray-900 dark:text-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"></slot>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot></slot>
            </main>

            <footer class="border-t-1 border-indigo-400">
                <div class="max-w-7xl mx-auto pt-6 pb-3 px-4 sm:px-6 lg:px-8">
                    <div class="text-center text-sm text-gray-400">Autum @ 2022 | <a href="https://autum.com.br" class="text-cyan-400 text-bold" title="Autum">autum.com.br</a></div>
                </div>
                <div class="flex justify-center">
                    <div class="autum-brand light inline-block dark:hidden"></div>
                    <div class="autum-brand dark hidden dark:inline-block"></div>
                </div>
                
            </footer>
        </div>
    </div>
</template>

<script>
    import JetApplicationMark from '@/Jetstream/ApplicationMark'
    import JetBanner from '@/Jetstream/Banner'
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'
    import { BriefcaseIcon, DocumentSearchIcon, CogIcon, UserCircleIcon, PuzzleIcon, UserAddIcon, UserGroupIcon, LogoutIcon } from '@heroicons/vue/outline'
    import ToggleDarkMode from '@/Components/ToggleDarkMode'
    import NotificationIcon from '@/Components/NotificationIcon'
    import NotificationCentral from '@/Components/NotificationCentral'
    import NavbarSettingsDropdown from '@/Components/NavbarSettingsDropdown'

    export default {
        components: {
            JetApplicationMark,
            JetBanner,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
            ToggleDarkMode,
            NotificationIcon,
            NotificationCentral,
            NavbarSettingsDropdown,
            BriefcaseIcon,
            CogIcon,
            UserCircleIcon,
            PuzzleIcon, 
            UserAddIcon, 
            UserGroupIcon,
            LogoutIcon,
            DocumentSearchIcon
        },

        data() {
            return {
                showingNavigationDropdown: false,
                showingNotificationDropdown: false,
                notifications: {},
                notificationPooling: null
            }
        },

        computed: {
            availableNetworks() {
                return [{
                    name: 'TestNet'
                },{
                    name: 'MainNet'
                }];
            },

            hasUnreadNotications() {
                return !_.isEmpty(_.filter(this.notifications.data, (n) => {
                    return _.isEmpty(n.read_at);
                }));
            },

            pageTitle() {
                return this.$page.props.title ? $page.props.title + ' – ' : '';
            }
        },

        mounted() {
            this.fetchNotifications();

            this.notificationPooling = setInterval(() => {
                this.fetchNotifications();
            }, 1000 * 10);
        },
        

        methods: {

            profileIs(profile) {
                return _.includes(this.$page.props.user.profiles, profile);
            },

            toggleNotifications() {
                this.showingNotificationDropdown = !this.showingNotificationDropdown;
            },
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            switchToNetwork(network) {
                this.$inertia.put(route('current-network.update'), {
                    'current_network': network
                }, {
                    preserveState: false
                })
            },

            goToMyAccount() {
                this.$inertia.visit(route('profile.show'));
            },

            logout() {
                axios.post(route('logout')).then((response) => {
                    window.location.replace('/');
                }).catch((error) => {
                    this.$inertia.post(route('logout'));
                });
            },

            

            fetchNotifications() {
                
                let self = this;

                axios.get(route('api.notifications.index')).then((response) => {
                    self.notifications = response.data;
                }).catch((error) => {
                    console.log('fetchNotifications error', error);
                });
            },
        }
    }
</script>
