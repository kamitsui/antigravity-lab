import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Antigravity Lab",
    description: "Experiments and technical documentation produced with Antigravity AI",
    base: '/antigravity-lab/', // GitHub Pagesのリポジトリ名に合わせて設定
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/projects/index' }
        ],
        sidebar: [
            {
                text: 'Lab Docs',
                items: [
                    { text: 'Implementation Plan', link: '/docs/implementation_plan' },
                    { text: 'Task Board', link: '/docs/task' }
                ]
            },
            {
                text: 'Projects',
                items: [
                    {
                        text: 'Task Manager',
                        collapsed: false,
                        items: [
                            { text: 'Overview', link: '/projects/task-manager/README' },
                            { text: 'Walkthrough', link: '/projects/task-manager/docs/walkthrough' },
                            { text: 'Implementation Plan', link: '/projects/task-manager/docs/implementation_plan' }
                        ]
                    },
                    {
                        text: 'Number Guessing Game',
                        collapsed: false,
                        items: [
                            { text: 'Overview', link: '/projects/number-guessing-game/README' },
                            { text: 'Walkthrough', link: '/projects/number-guessing-game/docs/walkthrough' },
                            { text: 'Implementation Plan', link: '/projects/number-guessing-game/docs/implementation_plan' }
                        ]
                    }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/kamitsui/antigravity-lab' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026-present kamitsui'
        }
    }
})
