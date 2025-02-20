import { io } from "../server.js";

const onCall = async (participants) => {
  try {
    const { receiver } = participants;
    if (!receiver?.socketId) {
      console.warn('No socket ID found for receiver');
      return;
    }

    io.to(receiver.socketId).emit("incomingCall", participants);
  } catch (error) {
    console.error('Error in onCall handler:', error);
  }
};

export default onCall;