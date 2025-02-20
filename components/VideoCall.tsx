'use client'
import { useSocket } from "@/context/SocketContext";
import VideoContainer from "./VideoContainer";
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff } from "react-icons/md";
import { useEffect, useState } from "react";

const VideoCall = () => {
    const { localStream, peer, isCallEnded, ongoingCall, handleHangup } = useSocket()
    const [isMounted, setIsMounted] = useState(false);
    const [isMicOn, setIsMicOn] = useState(true)
    const [isVidOn, setIsVidOn] = useState(true)

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // Log para debugging
        if (localStream) {
            console.log('Local stream tracks:', localStream.getTracks());
        }
        if (peer?.stream) {
            console.log('Peer stream tracks:', peer.stream.getTracks());
        }
    }, [localStream, peer]);

    if (!isMounted) return null;
    if (isCallEnded) return <div className="mt-5 text-rose-500">Call Ended</div>;
    if (!localStream && !peer) return null;

    const toggleCamera = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVidOn(videoTrack.enabled);
            }
        }
    };

    const toggleAudio = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsMicOn(audioTrack.enabled);
            }
        }
    };

    const isOnCall = localStream && peer && ongoingCall ? true : false;

    return (
        <>
            <div className="mt-4 relative">
                {localStream && (
                    <VideoContainer 
                        stream={localStream} 
                        isLocalStream={true} 
                        isOnCall={isOnCall} 
                    />
                )}
                {peer?.stream && (
                    <VideoContainer 
                        stream={peer.stream} 
                        isLocalStream={false} 
                        isOnCall={isOnCall} 
                    />
                )}
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
                <button 
                    onClick={toggleAudio}
                    className="p-2 rounded-full hover:bg-gray-200"
                >
                    {isMicOn ? <MdMicOff size={28} /> : <MdMic size={28} />}
                </button>
                <button 
                    className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600"
                    onClick={() => handleHangup({ ongoingCall: ongoingCall ? ongoingCall : undefined })}
                >
                    End Call
                </button>
                <button 
                    onClick={toggleCamera}
                    className="p-2 rounded-full hover:bg-gray-200"
                >
                    {isVidOn ? <MdVideocamOff size={28} /> : <MdVideocam size={28} />}
                </button>
            </div>
        </>
    );
};

export default VideoCall;