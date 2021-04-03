import { prisma } from "../../../generated/prisma-client";

export default {
  Like: {
    user: ({ id }) => prisma.like({ id }).user(),
    post: ({ id }) => prisma.like({ id }).post(),
  },
};

//좋아요한 유저 정보, 좋아요한 포스트
