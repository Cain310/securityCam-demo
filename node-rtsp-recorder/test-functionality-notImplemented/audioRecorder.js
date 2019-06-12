const Recorder = require("YOUR-PATH");

var rec = new Recorder({
  url: "rtsp://YOUR-CAM-USERNAME:YOUR-CAM-PASSWORD@YOUR-CAM-IP:YOUR-CAM-PORT/",
  timeLimit: 60,
  folder: "YOUR-CAM-PATH",
  name: "cam1",
  type: "audio"
});
rec.startRecording();

setTimeout(() => {
  console.log("Stopping Recording");
  rec.stopRecording();
  rec = null;
}, 125000);
