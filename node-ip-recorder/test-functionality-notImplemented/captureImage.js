const Recorder = require("YOUR-PATH");

var rec = new Recorder({
  url: "rtsp://YOUR-CAM-USERNAME:YOUR-CAM-PASSWORD@YOUR-CAM-IP:YOUR-CAM-PORT/",
  folder: "YOUR-CAM-PATH",
  name: "cam1",
  type: "image"
});
rec.captureImage(() => {
  console.log("Image Captured");
});
