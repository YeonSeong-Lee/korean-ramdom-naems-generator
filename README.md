# 설명

(관형사) + (동물) 형태로 랜덤하게 이름을 반환합니다.

# 설치법

```
$ npm install korean-random-names-generator
```

# 코드 사용법

```
import randomNameGenerator from "korean-random-names-generator";

const randomName_1 = randomNameGenerator(); // 철학적인 부엉이
const randomName_2 = randomNameGenerator(); // 현실적인 비버
```

# 반환 예시

똑똑한 호랑이, 철학적인 부엉이 ...

# 조합 수

이름은 `(관형사) + (동물)` 형태로 생성됩니다. 현재 데이터는 관형사 **102개**, 동물 **140개**로 구성되어 있어, 만들어질 수 있는 이름의 조합은 총 **102 × 140 = 14,280개**입니다.

데이터를 추가하면 조합 수는 `관형사 개수 × 동물 개수`로 늘어납니다.
