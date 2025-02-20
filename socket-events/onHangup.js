import { io } from "../server.js";

const onHangup = async (hangupData) => {
  try {
    const { ongoingCall, userHangingupId } = hangupData;
    if (!ongoingCall?.participants) {
      console.warn('Invalid hangup data structure');
      return;
    }

    const { caller, receiver } = ongoingCall.participants;
    const socketIdToEmitTo = caller.userId === userHangingupId 
      ? receiver.socketId 
      : caller.socketId;

    if (!socketIdToEmitTo) {
      console.warn('No valid socket ID to emit to');
      return;
    }

    io.to(socketIdToEmitTo).emit("hangup");
  } catch (error) {
    console.error('Error in onHangup handler:', error);
  }
};

export default onHangup;