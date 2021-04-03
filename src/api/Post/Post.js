import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    id: ({id}) => prisma.post({id}).id(),
    files: ({ id }) => prisma.post({ id }).files(),
    comments: ({ id }) => prisma.post({ id }).comments(),
    user: ({ id }) => prisma.post({ id }).user(),
    likes: ({ id }) => prisma.post({ id }).likes(),
    isLiked: (parent, _, { response }) => {
      const { user } = response.req;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: { id: user.id },
          },
          {
            post: { id },
          },
        ],
      });
    },
    likeCounts: (parent) =>
      prisma
        .likesConnection({
          where: { post: { id: parent.id } },
        })
        .aggregate()
        .count(),
    commentCounts: (parent) =>
      prisma
        .commentsConnection({
          where: { post: { id: parent.id } },
        })
        .aggregate()
        .count(),
  },
};

//포스트 내용파일들, 달린 댓글들, 포스트 작성자, 달린 좋아요들
