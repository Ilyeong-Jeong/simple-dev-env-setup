# simple-dev-env-setup
**간단하게 프론트 개발 환경 설정**

## 기술 스텍
- `webpack` module bundler
- `webpack-cli` webpack 명령 실행에 필요
- `babel-loader` ES6 -> ES5 transpiler, `@babel/core, @babel/preset-env` 필요
- `@babel/polyfill` ES6에 추가된 객체 및 객체 메서드를 쓰기 위해 필요
- `vue` Frontend Framework
- `vue-loader` vue 파일을 자바스크립트 모듈로 변환.
- `css-loader` css 파일을 자바스크립트 모듈로 변환.
- `vue-style-loader` css-loader로 로딩된 css를 html 파일에 삽입.
- `node-sass` node 환경에서 sass를 사용하기 위해 필요.
- `sass-loader` sass를 css로 변환.
- `postcss-loader` postcss의 플러그인을 사용하기 위해 필요.
- `autoprefixer` 자동으로 vendor(브라우저)에 맞는 prefix를 추가.
- `html-webpack-plugin` webpack output으로 html 파일 생성 및 번들된 js 파일 삽입.
- `uglifyjs-webpack-plugin` webpack bundle시 uglify하기 위해 필요.
