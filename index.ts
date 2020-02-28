import { VideoOptions } from "./Model/VideoOptions";
import { YoutubeManager } from "./Managers/YoutubeManager";

function doPost(e) {
    let videoOptions = new VideoOptions();
    videoOptions.ThumbnailUrl = e.parameter["ThumbnailUrl"];
    videoOptions.VideoId = e.parameter["VideoId"];
    let response = processVideo(videoOptions);
    return ContentService.createTextOutput(
        response
    ).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
    let videoOptions = new VideoOptions();
    videoOptions.VideoId = "R180Z2exdDg";
    videoOptions.ThumbnailUrl = "https://www.dropbox.com/s/abyioel03kv26na/CSTFTSET_3_The_Salted_Egg_3_1920x1080.jpg?dl=1";
    let ytManager = new YoutubeManager();
    ytManager.setYoutubeThumbnailByUrl(videoOptions);
}

function processVideo(videoOptions: VideoOptions): string {
    let response;
    try {
        let ytManager = new YoutubeManager();
        ytManager.setYoutubeThumbnailByUrl(videoOptions);
        response = {
            'status': 'ok',
            'videoOptions': videoOptions,
            'videoId': videoOptions.VideoId
        };
    } catch (error) {
        response = {
            'status': 'error',
            'videoOptions': videoOptions,
            'message': error
        };
    }
    return JSON.stringify(response);
}