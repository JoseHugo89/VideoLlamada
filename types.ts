// types.ts
export interface Participant {
  userId: string;
  socketId: string;
}

export interface CallParticipants {
  caller: Participant;
  receiver: Participant;
}

export interface OngoingCall {
  participants: CallParticipants;
}

export interface WebRTCSignalData {
  sdp: any;
  ongoingCall: OngoingCall;
  isCaller: boolean;
}