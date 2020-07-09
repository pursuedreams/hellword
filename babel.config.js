module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
	plugins: [ // 解决vant-ui 样式不显示
		['import', {
			libraryName: 'vant',
			libraryDirectory: 'es',
			style: true
		}, 'vant']
	]
}
