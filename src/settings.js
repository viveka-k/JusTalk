import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ba230c14d1804e739524ba42ddcdafce"
const token = "006ba230c14d1804e739524ba42ddcdafceIABMFXke8ayiYpqJYVqkwae2G9HEWU+37HasECMBryAg+mTNKL8AAAAAEACWH508zur8YgEAAQDL6vxi"

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(config);
export const channelName = "main";
