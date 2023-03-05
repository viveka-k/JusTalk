import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = ""
const token = ""

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(config);
export const channelName = "main";
