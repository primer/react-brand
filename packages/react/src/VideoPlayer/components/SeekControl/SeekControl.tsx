import React, {useState, useEffect, useCallback} from 'react'

import {Text} from '../../../Text'
import {Range} from '../'
import styles from '../../VideoPlayer.module.css'

const getMinuteSecondTime = (time: number) => {
  // TODO I think this can be done with browser APIs
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)
  const x = minutes < 10 ? `0${minutes}` : minutes
  const y = seconds < 10 ? `0${seconds}` : seconds

  return `${x}:${y}`
}

type SeekControlProps = {
  videoRef: React.RefObject<HTMLVideoElement>
}

export const SeekControl = ({videoRef}: SeekControlProps) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const seek = useCallback(
    (time: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = time
      }
    },
    [videoRef],
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const onLoadedMetadata = () => {
      setDuration(video.duration)
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('loadedmetadata', onLoadedMetadata)

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
    }
  }, [videoRef])

  return (
    <>
      <Range
        type="range"
        min="0"
        max={duration || 0}
        step={0.0001}
        onInput={e => {
          seek(e.currentTarget.valueAsNumber)
        }}
        value={currentTime}
        className={styles.VideoPlayer__progressBar}
        tooltip
        tooltipFormatter={value => getMinuteSecondTime(value as number)}
        name="Seek"
      />
      <div className={styles.VideoPlayer__progressTime}>
        <Text as="p" className={styles.VideoPlayer__controlTextColor}>
          {<span>{getMinuteSecondTime(currentTime || 0) || '00:00'}</span>}
          {<span className={styles.VideoPlayer__totalTime}> / {getMinuteSecondTime(duration || 0) || '00:00'}</span>}
        </Text>
      </div>
    </>
  )
}
