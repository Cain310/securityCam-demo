export function startlivestream() {
  var video = document.getElementById("my-video");

  const asset1 = "http://localhost:8080";

  var mimeCodec = 'video/mp4; codecs="avc1.4D601F, mp4a.40.2"';

  const BUFFER_LENGTH = 3;
  var sequences = [];

  var mediaSource = null;
  if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
    mediaSource = new MediaSource();
    video.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener("sourceopen", sourceOpen);
  } else {
    console.error("Unsupported MIME type or codec: ", mimeCodec);
  }

  var sourceBuffer = null;

  function sourceOpen(_) {
    sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
    sourceBuffer.mode = "sequence";
    fetchSequence();
    // video.addEventListener("timeupdate", check);
    console.log("I am checkingggg", check);
    video.addEventListener("canplay", function() {
      video.play();
    });
    video.addEventListener("seeking", seek);
  }

  const getNextUrl = () => {
    return asset1;
  };

  function fetchSequence() {
    const url = getNextUrl();
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      appendSegment(xhr.response);
    };
    xhr.send();
  }

  function appendSegment(chunk) {
    sequences.push(chunk);
    sourceBuffer.appendBuffer(chunk);
    if (sequences.length > BUFFER_LENGTH - 1) {
      sequences.splice(0, 1);
      // console.log("length after splice: ", sequences.length);
    }
    console.log("length after splice: ", sequences.length);
  }

  const check = setInterval(function() {
    // console.log("intervalingg", check);
    fetchSequence();
  }, 3600);

  // function checkBuffer(_) {
  //   console.log("id: ", sequences.id, sequences);
  //   if (sequences.length < BUFFER_LENGTH) {
  //     console.log("length after check: ", sequences.length);
  //     fetchSequence();
  //   }
  // }

  function seek(e) {
    console.log(e);
    if (mediaSource.readyState === "open") {
      sourceBuffer.abort();
      console.log(mediaSource.readyState);
    } else {
      console.log("seek but not open?");
      console.log(mediaSource.readyState);
    }
  }
}
