import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../generated/prisma-client";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

// { Authorization: 'Bearer TOKEN'}

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

//미들웨어 생성
export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
console.log("passport is running");
//passport에 입력되는 정보가 없도록 하기 위해서 { sessions: false }
//verifyUser에서 사용자를 받아온후에,사용자가 존재한다면 그사용자정보를 req 객체에붙인다.
//그 다음에 graphql을실행하고 로그인 되어있다면 모든 graphql 요청에 사용자정보가 추가되어서 요청된다.

//strategy가 verifyUser의 모든 작업을 끝마친후, 결과물을 payload에 전달한다.
