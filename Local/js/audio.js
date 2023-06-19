const recorder = require('node-record-lpcm16');
const fs = require('fs');

const audioStream = recorder.record({
    sampleRate: 16000,
    channels: 1,
    audioType: 'wav'
  });
  
  const outputFile = 'user_audio.wav';
  
  audioStream.pipe(fs.createWriteStream(outputFile));
  setTimeout(() => {
    audioStream.stop();
  }, 60000); 
  