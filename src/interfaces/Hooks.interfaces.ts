import { Dispatch, SetStateAction } from "react";

export type Recorder = {
    recordingMinutes: number;
    recordingSeconds: number;
    initRecording: boolean;
    mediaStream: MediaStream | null;
    mediaRecorder: MediaRecorder | null;
    audio: string | null;
    audio_b: string | null;
    audio_ba: Blob | null
};

export type UseRecorder = {
    recorderState: Recorder;
    startRecording: () => void;
    cancelRecording: () => void;
    saveRecording: () => void;
};  

export type MediaRecorderEvent = {
    data: Blob;
};

export type AudioTrack = MediaStreamTrack;
export type SetRecorder = Dispatch<SetStateAction<Recorder>>;