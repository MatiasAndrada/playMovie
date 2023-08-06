import React, { useState, useRef } from 'react';
import { VideoControls } from './VideoControls';
import ReactPlayer from 'react-player';

export const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleProgress = (state) => {
    setProgress(state.playedSeconds);
    setDuration(state.loadedSeconds);
  };

  const toggleFullScreen = () => {
    if (!isFullscreen) {
      // Activar pantalla completa
      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
          videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
          videoRef.current.msRequestFullscreen();
        }
      }
    } else {
      // Salir de pantalla completa solo si el documento está en pantalla completa
      if (document.fullscreenElement || // estándar
          document.mozFullScreenElement || // Firefox
          document.webkitFullscreenElement || // Chrome, Safari y Opera
          document.msFullscreenElement // IE/Edge
      ) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
    setIsFullscreen((prevState) => !prevState);
  };

  

  return (
    <div className='relative border shadow-2xl shadow-black rounded-md overflow-hidden drop-shadow-sm group w-full h-full'>
      <ReactPlayer
        url={src}
        width='100%'
        height='100%'
        ref={videoRef}
        playing={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
        onProgress={handleProgress}
        onClick={() => setIsPlaying((prevState) => !prevState)}
        controls={false} // Desactivamos los controles predeterminados de React Player
        config={{
          youtube: {
            playerVars: {
              controls: 0, // Desactivamos los controles de YouTube
              showinfo: 0, // Desactivamos la información del video
              modestbranding: 1, // Desactivamos el branding de YouTube
              rel: 0, // Desactivamos los videos relacionados
              fs: 0, // Desactivamos el botón de pantalla completa
              autoplay : 0, // Activamos la reproducción automática
            },
          },
        }}
      />
      <VideoControls
        // Estados
        progress={progress}
        duration={duration}
        isPlaying={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
        // Funciones del Reproductor
        togglePlay={() => setIsPlaying((prevState) => !prevState)}
        handleVolumeChange={(e) => setVolume(parseFloat(e.target.value))}
        handlePlaybackRateChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
        toggleFullScreen={toggleFullScreen} // Pasamos la función toggleFullScreen aquí

        handleProgressChange={(e) => videoRef.current.seekTo(parseFloat(e.target.value))}
      />
    </div>
  );
};
