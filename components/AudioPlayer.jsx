// components/AudioPlayer.js

const AudioPlayer = ({ src, type = 'audio/mp3', title = 'Audio Player' }) => {
    return (
      <div>
        <h2  style={{  color: '#092e9c', fontSize: '2rem', fontWeight: 'bold' }} >{title}</h2>
        <audio controls>
          <source src={src} type={type} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  
  export default AudioPlayer;
  