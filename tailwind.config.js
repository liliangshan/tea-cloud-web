module.exports = {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {
        extend: {
            colors: {
                'tea-primary': '#2F855A',  // 根据XD设计稿定义
                'tea-accent': '#C6F6D5',
            },
            spacing: {
                '15': '3.75rem',  // 扩展间距系统
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp') // 安装额外插件
    ]
}