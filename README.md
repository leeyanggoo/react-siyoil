# 시요일(Siyoil)
![siyoil-min](https://github.com/leeyanggoo/react2023-1/assets/125417787/b20add3d-6117-4e77-9ee9-9e947aa08669)

>  애플리케이션 '시요일'을 컨셉으로 만든 사이트입니다.
> + Live Demo : [react-siyoil.netlify.app](https://react-siyoil.netlify.app/)
> + Refer to : [https://jdan.github.io/98.css/#intro](https://nodlik.github.io/StPageFlip/)

# 사용 스택 / 라이브러리
+ React
+ Netlify
+ Swiper
+ StPageFlip
+ SCSS

# 구현 내역
+ **Youtube API / Unsplash API / TMDB API**를 이용하여 사이트 구현
+ **Swiper** 라이브러리를 이용하여 슬라이드 구현
  + `transition-timing-function: linear` 속성을 이용하여 delay 없는 슬라이드 구현
+ **StpageFlip** 라이브러리를 이용하여 책 넘김 효과 구현(오늘의 시)
  + `forwardRef()`를 이용하여 ref를 컴포넌트 에서 사용

## 미구현
+ 시요일의 API를 이용해보고자 했으나 아직 미완성이라 연결 불가(http://sisun.changbi.com/sisunapi/)

# 프로젝트 목적
+ 여러 REST API를 이용하여 fetch() 메서드  JSON 데이터 구조 파악
+ JSX(JavaScript XML) 문법 이해
+ 라이브러리 사용법 및 docs 이해
+ Router 사용 및 적용
