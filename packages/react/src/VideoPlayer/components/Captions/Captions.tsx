import React, {useEffect, useState} from 'react'
import clsx from 'clsx'

import {Text} from '../../../Text'
import styles from './Captions.module.css'
import {useVideo} from '../../hooks/useVideo'

export const Captions = () => {
  const [caption, setCaption] = useState('')
  const {ref} = useVideo()

  const videoRef = ref.current
  const trackInformation = videoRef?.textTracks[0]?.cues

  useEffect(() => {
    if (!videoRef) {
      return
    }

    const compareAndSetCaption = () => {
      if (!trackInformation) {
        return
      }

      for (let i = 0; i < trackInformation.length; i++) {
        const cue = trackInformation[i]

        if (videoRef.currentTime >= cue.startTime && videoRef.currentTime < cue.endTime) {
          setCaption(cue['text'])
          break
        }

        setCaption('')
      }
    }

    videoRef.addEventListener('timeupdate', compareAndSetCaption)

    return () => window.removeEventListener('timeupdate', compareAndSetCaption)
  }, [videoRef, trackInformation])

  if (!caption) {
    return null
  }

  return (
    <div className={clsx(styles.Captions)}>
      <Text as="p" className={styles.Captions__text}>
        {caption}
      </Text>
    </div>
  )
}
