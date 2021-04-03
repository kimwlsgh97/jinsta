import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    sendMessage: async (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { user } = response.req;
      const { roomId, message, toId } = args;
      let room;

      if (roomId === undefined) {
        if (user.id !== toId) {
          room = await prisma.createRoom({
            participants: {
              connect: [{ id: toId }, { id: user.id }],
            },
          });
        }
      } else {
        room = await prisma.room({ id: roomId });
      }
      if (!room) {
        throw Error("Room not found");
      }

      const getToId = room.participants.filter(
        (participant) => participant.id !== user.id
      )[0].id;

      return prisma.createMessage({
        text: message,
        from: {
          connect: { id: user.id },
        },
        to: {
          connect: { id: roomId ? getToId : toId },
        },
        room: {
          connect: {
            id: room.id,
          },
        },
      });
    },
  },
};
``;
