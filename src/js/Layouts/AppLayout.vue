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
                            <div class="flex-shrink-0 flex items-center gap-4">
                                <inertia-link :href="route('dashboard')">
                                    <jet-application-mark class="block h-9 w-auto" name="Autum" acronym="BL" />
                                </inertia-link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <slot name="main-nav">
                                    <jet-nav-link :href="route('dashboard')" :active="routeIs('dashboard')">
                                        Painel
                                    </jet-nav-link>
                                </slot>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">

                            <div class="relative mr-2" v-if="$page.props.jetstream.hasTeamFeatures">
                                <!-- Teams Dropdown -->
                                <jet-teams-dropdown />
                            </div>

                            <toggle-dark-mode />

                            <NotificationIcon 
                                :unread-notifications="hasUnreadNotications"
                                @toggle="toggleNotifications" />
                            
                            <autum-apps-dropdown />

                            <!-- Settings Dropdown -->
                            <div class="ml-2 relative">
                                <jet-navbar-settings-dropdown />
                            </div>
                            
                        </div>

                        <!-- Hamburger -->
                        <div class="flex items-center sm:hidden">

                            <toggle-dark-mode />

                            <NotificationIcon 
                                :unread-notifications="hasUnreadNotications"
                                @toggle="toggleNotifications" />

                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="ml-2 inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Profile Navigation Menu -->
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

                            <!-- Authentication -->
                            <form method="POST" @submit.prevent="logout">
                                <jet-responsive-nav-link as="button">
                                    <template #icon><ArrowLeftOnRectangleIcon class="w-4 h-4" /></template>
                                    Sair
                                </jet-responsive-nav-link>
                            </form>

                            
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
                <div class="max-w-7xl mx-auto p-3 md:px-6 md:py-4 sm:px-6 lg:px-8">
                    <div class="flex items-center gap-3">
                        <button @click.prevent="toggleAppNavigation" class="md:hidden cursor-pointer relative inline-flex items-center justify-center p-2 text-gray-600 focus:text-gray-800 hover:text-gray-800 active:text-gray-800 dark:hover:text-gray-300 dark:active:text-gray-300">
                                <Bars3Icon class="w-6 h-6" />
                        </button>
                        <slot name="header"></slot>
                        
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot></slot>
            </main>

            <footer class="border-t-1 border-indigo-400">
                <div class="max-w-7xl mx-auto pt-6 pb-3 px-4 sm:px-6 lg:px-8">
                    <div class="text-center text-sm text-gray-400">Autum @ 2023 | <a href="https://autum.com.br" class="text-cyan-400 text-bold" title="Autum">autum.com.br</a></div>
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
    import JetTeamsDropdown from '@/Jetstream/TeamsDropdown'
    import JetNavbarSettingsDropdown from '@/Components/NavbarSettingsDropdown'
    import { Bars3Icon, BriefcaseIcon, DocumentMagnifyingGlassIcon, CogIcon, UserCircleIcon, PuzzlePieceIcon, UserPlusIcon, UserGroupIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'
    import AutumAppsDropdown from '@/Components/AutumAppsDropdown'

    export default {
        components: {
            JetNavbarSettingsDropdown,
            JetApplicationMark,
            JetBanner,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
            Bars3Icon,
            BriefcaseIcon,
            CogIcon,
            UserCircleIcon,
            PuzzlePieceIcon, 
            UserPlusIcon, 
            UserGroupIcon,
            ArrowLeftOnRectangleIcon,
            DocumentMagnifyingGlassIcon,
            JetTeamsDropdown,
            AutumAppsDropdown,
        },

        data() {
            return {
                showingNavigationDropdown: false,
                showingNotificationDropdown: false,
                showingAppNavigationDropdown: false,
                notifications: {},
                notificationPooling: null,
            }
        },

        computed: {
            
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

            routeIs(route) {
                return window.route().current(route) || String(window.route().current()).startsWith(route);
            },

            profileIs(profile) {
                return _.includes(this.$page.props.user.profiles, profile);
            },

            toggleNotifications() {
                this.showingNotificationDropdown = !this.showingNotificationDropdown;
            },

            toggleAppNavigation() {
                this.showingAppNavigationDropdown = !this.showingAppNavigationDropdown;
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
