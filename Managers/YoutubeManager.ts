import { VideoOptions } from "../Model/VideoOptions";

export class YoutubeManager {

    constructor() {
    }

    /**
     * setYoutubeThumbnailByUrl
     */
    public setYoutubeThumbnailByUrl(video: VideoOptions) {
        let blob = UrlFetchApp.fetch(video.ThumbnailUrl).getBlob();
        blob.setContentTypeFromExtension();
        YouTube.Thumbnails.set(video.VideoId, blob);
    }
}
