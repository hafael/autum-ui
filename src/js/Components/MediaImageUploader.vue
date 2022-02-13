<template>
    <div class="block">
        <div class="flex items-center">
            <!-- Media File Input -->
            <input type="file" class="hidden"
                        ref="media"
                        :accept="accept"
                        :multiple="multiple"
                        @change="updateMediaPreview">

            <div class="mr-3">
                <!-- Current Media File -->
                <div v-show="!mediaPreview && currentSrc">
                    <img :src="currentSrc" :class="{'rounded-full': imageCircle, 'rounded': !imageCircle }" class="h-20 w-20 object-cover">
                </div>
                <div v-show="!mediaPreview && !currentSrc" >
                    <span class="block w-20 h-20 bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
                          :class="{'rounded-full': imageCircle, 'rounded': !imageCircle }"
                          :style="'background-size: cover; background-repeat: no-repeat; background-position: center center;'">
                        <PhotographIcon class="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </span>
                </div>

                <!-- New Media File Preview -->
                <div v-show="mediaPreview" @click="showPreviewModal">
                    <span class="block w-20 h-20 cursor-pointer bg-gray-300 dark:bg-gray-600 flex items-end justify-end relative"
                          :class="{'rounded-full': imageCircle, 'rounded': !imageCircle }"
                          :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + mediaPreview + '\');'">
                          <span 
                            class="block w-20 h-20 opacity-60 bg-gradient-to-t from-black via-transparent absolute top-0 left-0"
                            :class="{'rounded-full': imageCircle, 'rounded': !imageCircle }"></span>
                          <ZoomInIcon class="w-4 h-4 m-2 text-white" />
                    </span>
                </div>
            </div>
            <div class="ml-3 space-x-2">
                <jet-secondary-button type="button" @click.prevent="selectNewFile" v-show="!mediaPreview">
                    <PhotographIcon class="w-5 h-5" />
                </jet-secondary-button>

                <jet-secondary-button type="button" @click.prevent="deleteMedia" v-if="currentSrc && !mediaPreview">
                    <TrashIcon class="w-5 h-5 text-red-500" />
                </jet-secondary-button>

                <jet-secondary-button type="button" @click.prevent="cancel" v-show="mediaPreview">
                    {{ btnCancelText }}
                </jet-secondary-button>
            </div>
        </div>

        <!-- Preview Modal -->
        <jet-dialog-modal :show="modalPreview">
            <template #title>
                Prever
            </template>

            <template #content>
                <img :src="currentSrc" class="mx-auto" v-if="currentSrc && !mediaPreview">
                <img :src="mediaPreview" class="mx-auto" v-else-if="mediaPreview">
            </template>

            <template #footer>
                <jet-secondary-button @click="modalPreview = false">
                    Fechar
                </jet-secondary-button>
            </template>
        </jet-dialog-modal>
    </div>
</template>

<script>

    import JetButton from '@/Jetstream/Button'
    import JetSecondaryButton from '@/Jetstream/SecondaryButton'
    import JetInputError from '@/Jetstream/InputError'
    import JetLabel from '@/Jetstream/Label'
    import JetDialogModal from '@/Jetstream/DialogModal';
    import { PhotographIcon, ZoomInIcon, TrashIcon } from '@heroicons/vue/outline'
    
    export default {
        name: 'MediaImageUploader',
        components: {
            JetButton,
            JetSecondaryButton,
            JetInputError,
            JetLabel,
            JetDialogModal,
            PhotographIcon,
            ZoomInIcon,
            TrashIcon
        },

        props: {
            modelValue: {},
            currentSrc: {
                type: String,
                default: null
            },
            btnSelectText: {
                type: String,
                default: 'Selecionar'
            },
            btnRemoveText: {
                type: String,
                default: 'Remover'
            },
            btnCancelText: {
                type: String,
                default: 'Cancelar'
            },
            imageClass: {
                type: String,
                default: 'image/*'
            },
            accept: {
                type: String,
                default: 'image/*'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            imageCircle: {
                type: Boolean,
                default: false
            }
        },

        emits: ['clear', 'delete', 'preview', 'change', 'cancel', 'update:modelValue'],

        data() {
            return {
                mediaPreview: null,
                modalPreview: false,
                mimePreview: 'image/jpeg',
                modelValueBackup: null,
                form: this.$inertia.form({
                    media: null,
                }),
            };
        },

        mounted() {
            this.modelValueBackup = this.modelValue;
        },

        watch: {
            modelValue: {
                handler: function(val) {
                    if(_.isEmpty(val) && !_.isEmpty(this.$refs.media.value)) {
                        this.clearPhotoFileInput();
                    }
                },
                deep: true
            }
        },

        methods: {

            showPreviewModal() {
                this.modalPreview = true;
            },
            clearPhotoFileInput() {
                if (this.$refs.media?.value) {
                    this.$refs.media.value = null;
                    this.$emit('clear');
                    this.mediaPreview = null;
                }
            },

            selectNewFile() {
                this.$refs.media.click();
            },

            updateMediaPreview() {
                const files = this.$refs.media.files;
                const media = files[0];

                if (! media) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.mediaPreview = e.target.result;
                    this.mimePreview = media.type;
                    this.$emit('preview', this.mediaPreview);
                    this.$emit('change', files);
                    this.$emit('update:modelValue', files);
                };

                reader.readAsDataURL(media);
            },
            
            deleteMedia() {
                this.$emit('delete');
            },

            cancel() {
                this.form.reset();
                this.clearPhotoFileInput();
                this.$emit('cancel');
                this.$emit('update:modelValue', this.modelValueBackup);
            },
        }
    }
</script>