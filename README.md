# TDD

| 프로젝트 기간 | 2023.06.26~2023.07.16                     |
| ------------- | ----------------------------------------- |
| 프로젝트 목적 | jest tour                                 |
| Github        | https://github.com/Jinwook-Song/tdd-basic |

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8bd61e48-01a4-426f-8f01-16339863dbae/Untitled.png)

---

- 테스트 구조 (Acceptance Criteria)
  - 준비 → 실행 → 검증
  - Arrange → Act → Assert
  - Given → When → Then
  ```
  Given: 준비 과정 재사용
  When: 의도적으로 실패하기
  Then: 가장 마지막에

  ex)
  Given: 로그인 하지 않은 사용자가
  When: 처음 웹사이트에 접속하면
  Then:  로그인 페이지가 보여 져야 한다

  하나의 사용자 스토리를 만족하기 위한 다양한 Acceptance Criteria를 Given, When Then 포맷으로 작성
  ```
- 좋은 테스트 원칙 (FIRST)
  - fast: 느린것에 대한 의존성 낮추기 (mock, 네트워크 등)
  - isolated: 최소한의 유닛으로 검증하기 (독립적이고, 집중적으로)
  - repeatable: 실행할때마다 동일한 결과를 유지 (환경에 영향을 받지 않도록)
  - self-validating: 스스로 결과 검증 (자동화를 통한 CI/CD)
  - timely: 시기 절적하게 (사용자에게 배포되기 이전에 테스트 코드 작성)
- Right-BICEP
  모든 요구사항이 정상 동작하는지 확인, 모든 결과가 정확한지 확인
  - Boundary conditions: 모든 코너 케이스에 대해 테스트
    - 유저가 0명일때, 10명일때, 예상보다 더 많을 때 등
    - 잘못된 포맷 인풋, null, 특수문자, 잘못된 이메일, 작은 숫자, 큰 숫자, 중복, 순서가 맞지 않음 등
  - Inverse relationship: 역관계를 적용해서 결과값 확인
  - Cross check: 다른 수단을 이용해서 결과값 확인
  - Error conditions: 불행한 경로에 대해 우아하게 처리 하는가?
    - 네트워크 에러, 메모리 부족, 데이터 베이스 중지 …
  - Performance characteristics: 성능확인은 테스트를 통해 정확한 수치로 확인
- 테스트 커버리지 (CORRECT)
  - conformance: 특정 포맷을 준수
    - 전화번호, 이메일, 아이디 , 파일 확장자 …
  - ordering: 순서 조건 확인 (순서가 중요한 경우)
  - range: 숫자의 범위 (제한된 범위보다 작거나 큰 경우)
  - reference: 외부 의존성 유무, 특정한 조건의 유무
  - existance: 값이 존재하지 않을 때 어떻게 동작 하는지?
  - cardinality: 0-1-N 법칙에 따라 검증
  - time: 상대, 절대, 동시의 일들
    - 순서가 맞지 않는경우, 소비한 시간, 지역 시간
