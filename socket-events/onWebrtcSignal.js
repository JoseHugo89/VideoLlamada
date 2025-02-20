import { io } from "../server.js";

const onWebrtcSignal = async (data) => {
  try {
    const { isCaller, ongoingCall, sdp } = data;
    if (!ongoingCall?.participants) {
      console.warn('Invalid signal data structure');
      return;
    }

    const { caller, receiver } = ongoingCall.participants;
    const targetSocketId = isCaller ? receiver.socketId : caller.socketId;

    if (!targetSocketId) {
      console.warn(`No socket ID found for ${isCaller ? 'receiver' : 'caller'}`);
      return;
    }

    io.to(targetSocketId).emit("webrtcSignal", {
      sdp,
      ongoingCall,
      isCaller,
    });
  } catch (error) {
    console.error('Error in onWebrtcSignal handler:', error);
  }
};

export default onWebrtcSignal;