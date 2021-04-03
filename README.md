# jinsta

insta clone

서버를 만들고, prisma를 서버코드에 추가한다.

1. npm install dotenv - .env 파일을 읽는다.

2. npm install graphql-yoga - GraphQLServer를 만든다.
   만드는 그래프큐엘 서버의 데이터 타입과 반응하는 방식을 정의해야한다.

3. .babelrc 파일 생성, preset에 @babel/preset-env 추가.
   npm install @babel/{node,preset-env}

4. morgan 미들웨어 추가. logger(로깅 전용 모듈) - cmd창에 로그를 나타내줌

\*그래프큐엘서버에는 express 서버가 내장 되어있다.
server.express로 접근가능

5. npm install graphql-tools merge-graphql-schemas - 폴더안 여러개의 graphql파일을 한 파일로 통합. (폴더안에는 resolver를 제외한 js파일이 존재해서는 안된다.)

6. prisma - ORM(Object-Relational-Mapping)
   why prisma? 데이터베이스에 관한 어려운 문제들을 해결!
   어플에 필요한 모델을 graphql로 정의할 수 있다.
   prisma init - prisma 프로젝트 생성 명령어
   prisma deploy - prisma 계정에 datamodel.prisma 업로드

7. .gitignore - cmd창에서 깃헙에 커밋할때, 여러가지 설정을 할 수 있음.
   (몇몇 파일을 커밋에서 제외 시킨다던지,)

8. sendMail은 Promise함수를 리턴.

9. private key와 public key를 알고 싶다면 비트코인 클론 강좌를 볼것.

10. JWT가 id 암호화, 토근 생성

11. 꼭 넣고 싶은 것 - 게시글 분류 알고리즘, 일일주간월간 보상, 랭킹
