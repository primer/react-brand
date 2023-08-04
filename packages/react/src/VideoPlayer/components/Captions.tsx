import React from 'react'
import clsx from 'clsx'
import {Text} from '../../Text'

import styles from './Captions.module.css'

type CaptionsProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  disabled?: boolean
  trackInformation?: TextTrackCueList
}

export const Captions = ({videoRef, disabled, trackInformation}: CaptionsProps) => {
  const [caption, setCaption] = React.useState('')

  React.useEffect(() => {
    const compareAndSetCaption = () => {
      //   Create logic to compare and set caption based on time
      if (trackInformation) {
        for (let i = 0; i < trackInformation.length; i++) {
          const cue = trackInformation[i]
          if (
            videoRef.current?.currentTime &&
            videoRef.current.currentTime >= cue.startTime &&
            videoRef.current.currentTime <= cue.endTime
          ) {
            setCaption(cue['text'])
            break
          }
        }
      }
    }

    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', compareAndSetCaption)
    }
    return () => window.removeEventListener('timeupdate', compareAndSetCaption)
  }, [videoRef, trackInformation])

  return (
    <div className={clsx(styles.Captions, (disabled || !caption) && styles.Captions__empty)}>
      <Text as="p" className={styles.Captions__text}>
        {caption}
      </Text>
    </div>
  )
}
