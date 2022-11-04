class Video {
  constructor(title, duration, url) {
    this.title = title;
    this.duration = duration;
    this.url = url;
  }
}
function get() {
  let vs = [];
  let v = new Video("JavaScript for beginners", "1h", "https://www.youtube.com/watch?v=PkZNo7MFNFg");
  vs.push(v);
  v = new Video("Tutorial node.js for beginners", "1h18", "https://www.youtube.com/watch?v=TlB_eWDSMt4");
  vs.push(v);
  v = new Video("Full course on Node.js", "3h26", "https://www.youtube.com/watch?v=Oe421EPjeBE");
  vs.push(v);
  v = new Video("Extra", "3h26", "https://www.youtube.com/watch?v=Oe421EPjeBE");
  vs.push(v);
  return vs;
}

module.exports.get = get;
