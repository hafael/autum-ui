<template>
    <editor-content 
        :editor="editor" 
        class="min-h-[82px] border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400"
        :disabled="disabled" />
</template>

<script>

    import { Editor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    import Highlight from '@tiptap/extension-highlight'
    import Typography from '@tiptap/extension-typography'
    
    export default {
        name: 'Tiptap',
        components: {
            EditorContent,
        },

        emits: ['update', 'ready'],
        
        props: {
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            modelValue: {
                type: String,
                default: '',
            },
        },

        watch: {
            modelValue(value) {
                // HTML
                const isSame = this.editor.getHTML() === value

                // JSON
                // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

                if (isSame) {
                    return
                }

                this.editor.commands.setContent(value, false)
            },
        },

        data() {
            return {
                editor: null,
            }
        },

        mounted() {
            let self = this;
            this.editor = new Editor({
                content: self.modelValue,
                extensions: [
                    StarterKit,
                    Highlight,
                    Typography,
                ],
                editorProps: {
                    attributes: {
                        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-lg p-2 focus:outline-none',
                    },
                },
                onUpdate({ editor }) {
                    self.$emit('update', editor);
                },
                onCreate({ editor }) {
                    self.$emit('ready', editor);
                },
            });
        },

        beforeUnmount() {
            this.editor.destroy()
        },

    }
</script>

<style lang="scss" scoped>
    /* Basic editor styles */
    .ProseMirror {
        > * + * {
            margin-top: 0.75em;
        }

        ul,
        ol {
            padding: 0 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            line-height: 1.1;
        }

        h1 { font-size: 2.25rem}
        h2 { font-size: 1.875rem }
        h3 { font-size: 1.5rem }
        h4 { font-size: 1.25rem }
        h5 { font-size: 1.125rem }
        h6 { font-size: 1rem }
        

        code {
            background-color: rgba(#616161, 0.1);
            color: #616161;
        }

        pre {
            background: #0D0D0D;
            color: #FFF;
            font-family: 'JetBrainsMono', monospace;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;

            code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
            }
        }

        img {
            max-width: 100%;
            height: auto;
        }

        hr {
            margin: 1rem 0;
        }

        blockquote {
            padding-left: 1rem;
            border-left: 2px solid rgba(#0D0D0D, 0.1);
        }
    }
</style>