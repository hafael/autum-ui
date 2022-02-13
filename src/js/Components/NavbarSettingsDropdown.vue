<template>
    <jet-dropdown align="right" width="48">
        <template #trigger>
            <button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
            </button>

            <span v-else class="inline-flex rounded-md">
                <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                    {{ $page.props.user.name }}

                    <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </span>
        </template>

        <template #content>
            <!-- Account Management -->
            <div class="block px-4 py-2 text-xs text-gray-400 border-b border-gray-200">
                <span class="block w-full truncated">{{ $page.props.user.name }} {{ $page.props.user.lastname }}</span>
                <strong class="block w-full truncated">@{{ $page.props.user.username }}</strong>
            </div>

            <jet-dropdown-link :href="route('manager.dashboard')" v-if="profileIs('manager')">
                <template #icon><BriefcaseIcon class="w-4 h-4" /></template>
                Área do Gerente
            </jet-dropdown-link>

            <jet-dropdown-link :href="route('admin.dashboard')" v-if="profileIs('admin') || $page.props.user.is_admin">
                <template #icon><CogIcon class="w-4 h-4" /></template>
                Área Administrativa
            </jet-dropdown-link>

            <jet-dropdown-link :href="route('profile.show')">
                <template #icon><UserCircleIcon class="w-4 h-4" /></template>
                Meu Perfil
            </jet-dropdown-link>

            <jet-dropdown-link :href="route('contacts.index')">
                <template #icon><UserGroupIcon class="w-4 h-4" /></template>
                Meus Contatos
            </jet-dropdown-link>

            <jet-dropdown-link :href="route('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">
                API
            </jet-dropdown-link>

            <div class="border-t border-gray-100"></div>

            <!-- Authentication -->
            <form @submit.prevent="logout">
                <jet-dropdown-link as="button">
                    <template #icon><LogoutIcon class="w-4 h-4" /></template>
                    Sair
                </jet-dropdown-link>
            </form>
        </template>
    </jet-dropdown>
</template>

<script>
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import { BriefcaseIcon, CogIcon, UserCircleIcon, PuzzleIcon, UserAddIcon, UserGroupIcon, LogoutIcon } from '@heroicons/vue/outline'

    export default {
        name: 'NavbarSettingsDropdown',

        components: {
            JetDropdown,
            JetDropdownLink,
            BriefcaseIcon,
            CogIcon,
            UserCircleIcon,
            PuzzleIcon,
            UserAddIcon, 
            UserGroupIcon, 
            LogoutIcon
        },

        methods: {
            profileIs(profile) {
                return _.includes(this.$page.props.user.profiles, profile);
            },
            logout() {
                axios.post(route('logout')).then((response) => {
                    window.location.replace('/');
                }).catch((error) => {
                    this.$inertia.post(route('logout'));
                });
            },
        }
    }
</script>