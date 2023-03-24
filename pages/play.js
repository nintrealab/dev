import { useRef, useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiPause } from "react-icons/hi";
import { TbPlayerPlayFilled,TbPlayerPauseFilled } from "react-icons/tb";

export default function Play() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'ណារ៍​​​​​​​​​​​​​​​​ អភ្ភិយ៍ផៃភួង',
    songArtist: 'Wind Ripple',
    songSrc: 'https://v1-nintrea.netlify.app//asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84[%E1%9E%97%E1%9E%B6%E1%9E%82%E1%9F%A1].mp3',
    songAvatar: 'https://v1-nintrea.netlify.app/asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84.jpg'
  })

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');

  const currentAudio = useRef()

  const handleMusicProgressBar = (e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  //Play Audio Function
  const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }else{
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [
    {
      songName: 'ណារ៍​​​​​​​​​​​​​​​​ អភ្ភិយ៍ផៃភួង',
      songArtist: 'Wind Ripple',
      songSrc: 'https://v1-nintrea.netlify.app//asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84[%E1%9E%97%E1%9E%B6%E1%9E%82%E1%9F%A1].mp3',
      songAvatar: 'https://v1-nintrea.netlify.app/asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84.jpg'
    },
    {
      songName: 'ណារ៍​​​​​​​​​​​​​​​​ អភ្ភិយ៍ផៃភួង',
      songArtist: 'Aurora Aksnes',
      songSrc: 'https://v1-nintrea.netlify.app/asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84[%E1%9E%97%E1%9E%B6%E1%9E%82%E1%9F%A2].mp3',
      songAvatar: 'https://v1-nintrea.netlify.app/asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84.jpg'
    },
  ]

  const handleNextSong = ()=>{
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const handlePrevSong = ()=>{
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const updateCurrentMusicDetails = (number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }

  const handleAudioUpdate = ()=>{
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress)? 0 : progress)
  }


  return (
    <>
      <div className="rounded-xl bg-transparent p-0 sm:p-5 col-span-1 overflow-hidden">
        <audio 
          src={`https://v1-nintrea.netlify.app//asset/audio/ahphai/%E1%9E%8E%E1%9E%B6%E1%9E%9A%E1%9F%8D-%E1%9E%A2%E1%9E%97%E1%9F%92%E1%9E%97%E1%9E%B7%E1%9E%99%E1%9F%8D%E1%9E%95%E1%9F%83%E1%9E%97%E1%9E%BD%E1%9E%84[%E1%9E%97%E1%9E%B6%E1%9E%82%E1%9F%A1].mp3`} 
          ref={currentAudio} 
          onEnded={handleNextSong} 
          onTimeUpdate={handleAudioUpdate}>
        </audio>
        <div className="flex flex-col gap-3">

          <div className='relative rounded-2xl overflow-hidden'>
            <div className='bg-gradient-to-b from-black/0 to-black p-5 absolute bottom-0 left-0 right-0 h-1/2'></div>
            <div className='absolute bottom-0 left-0 right-0 p-5'>
              <p className='text-sm font-medium text-slate-500'>Nintrea Novel</p>
              <p className='text-2xl font-medium line-clamp-1 text-white'>{currentMusicDetails.songName}</p>
              <p className='text-sm font-medium text-slate-500'>{currentMusicDetails.songArtist}</p>
            </div>
            <img 
              src={currentMusicDetails.songAvatar} 
              className="w-full md:h-[32rem] object-cover" 
              alt={`អំណានប្រឡោមលោករឿង៖ ${currentMusicDetails.songName}`}/>
          </div>
          
          <div className="flex w-full justify-between items-center">
            <p className='text-sm font-medium'>{musicCurrentTime}</p>
            <p className='text-sm font-medium'>{musicTotalLength}</p>
          </div>

          {/* mins range */}
          <input 
            type="range" 
            name="musicProgressBar" 
            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' 
            value={audioProgress} 
            onChange={handleMusicProgressBar} 
          />
          
          
          {/* player */}
          <div className="flex items-center justify-center flex-row gap-2 [&>button]:p-2 [&>button]:dark:shadow-slate-900 [&>button]:bg-white [&>button]:shadow-sky-100 [&>button]:dark:bg-slate-700 [&>button]:shadow-xl [&>button]:flex-shrink-0 [&>button]:rounded-full">

            <button type='button' onClick={handlePrevSong}>
              <HiOutlineChevronLeft className='text-2xl'/>
            </button>

            <button type='button' onClick={handleAudioPlay}>
              { isAudioPlaying ? <TbPlayerPauseFilled  className='text-2xl'/>:<TbPlayerPlayFilled  className='text-2xl'/> }
            </button>

            <button type='button' onClick={handleNextSong}>
              <HiOutlineChevronRight  className='text-2xl'/>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}