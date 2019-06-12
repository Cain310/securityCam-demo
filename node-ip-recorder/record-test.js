const childProcess = require("child_process");
const path = require("path");

const inputURL =
  "rtsp://YOUR-CAM-USERNAME:YOUR-CAM-PASSWORD@YOUR-CAM-IP:YOUR-CAM-PORT/";

const savePath = "YOUR-CAM-PATH";

const startRecording = () => {
  const args = [
    "-rtsp_transport",
    "tcp",
    "-i",
    inputURL,
    "-f",
    "segment",
    "-segment_time",
    "5",
    "-segment_format",
    "mp4",
    "-segment_format_options",
    "movflags=frag_keyframe+empty_moov+default_base_moof",
    "-segment_time",
    "5",
    "-segment_list_type",
    "m3u8",
    "-c:v",
    "copy",
    "-strftime",
    "1",
    `${path.join(savePath, "test-%Y-%m-%dT%H-%M-%S.mp4")}`
  ];

  console.log("args", args);

  const ffmpegProcess = childProcess.spawn("ffmpeg", args, {
    detached: false,
    stdio: "inherit"
  });

  ffmpegProcess.on("exit", (code, signal) => {
    console.log("ffmpeg exited", code, signal);
  });

  ffmpegProcess.on("close", (code, signal) => {
    console.log("ffmpeg closed", code, signal);
  });

  ffmpegProcess.on("message", message => {
    console.log("ffmpeg message", message);
  });

  ffmpegProcess.on("error", error => {
    console.log("ffmpeg error", error);
  });
};

startRecording();
