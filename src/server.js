import "./env";
// require('dotenv').config()
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { sendSecretMail } from "./utils";
import passport from "passport";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

// sendSecretMail("jinho971031@gmail.com", "123");

// console.log(process.env.PORT); .env파일에서 제대로 포트를 받아오는지 확인

const PORT = process.env.PORT || 4000;

// const server = new GraphQLServer({typeDefs, resolvers});
const server = new GraphQLServer({
  schema,
  context: ({ response }) => ({ response, isAuthenticated }),
});
//graphql-yoga안의 GraphQLServer 클래스를 사용하여 서버생성

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

//---------------------------------------------------------------
