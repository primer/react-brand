import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import {axe, toHaveNoViolations} from 'jest-axe'

import {Image} from './'

expect.extend(toHaveNoViolations)

describe('Image', () => {
  afterEach(cleanup)

  it('no a11y violations', async () => {
    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" isPicture={false} aspectRatio={undefined} />
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should pass a custom class to the image when provided', async () => {
    const testClass = 'test'

    const {container} = render(
      <Image
        src="https://source.unsplash.com/random"
        alt=""
        className={testClass}
        isPicture={false}
        aspectRatio={undefined}
      />
    )

    expect(container.querySelector(`img.${testClass}`)).toBeInTheDocument()
  })

  it('should return only an img element if no aspectRatio is provided and isPicture is false', async () => {
    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" isPicture={false} aspectRatio={undefined} />
    )

    expect(container.querySelector('.Image-container')).not.toBeInTheDocument()
    expect(container.querySelector('span')).not.toBeInTheDocument()
    expect(container.querySelector('picture')).not.toBeInTheDocument()
    expect(container.querySelector('.Image')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('should return an img element in a span tag if aspectRatio is provided and isPicture is false', async () => {
    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" isPicture={false} aspectRatio={'1:1'} />
    )

    expect(container.querySelector('.Image-container')).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('picture')).not.toBeInTheDocument()
    expect(container.querySelector('.Image')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('should return an img element in a picture tag if aspectRatio is provided and isPicture is true', async () => {
    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" isPicture={true} aspectRatio={'1:1'} />
    )

    expect(container.querySelector('.Image-container')).toBeInTheDocument()
    expect(container.querySelector('span')).not.toBeInTheDocument()
    expect(container.querySelector('picture')).toBeInTheDocument()
    expect(container.querySelector('.Image')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('should return an img element in a picture tag if aspectRatio is not provided and isPicture is true', async () => {
    const {container} = render(<Image src="https://source.unsplash.com/random" alt="" isPicture={true} />)

    expect(container.querySelector('.Image-container')).toBeInTheDocument()
    expect(container.querySelector('span')).not.toBeInTheDocument()
    expect(container.querySelector('picture')).toBeInTheDocument()
    expect(container.querySelector('.Image')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('should create an aspect ratio based on a provided ratio array', async () => {
    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" isPicture={false} aspectRatio={[1, 1]} />
    )

    expect(container.querySelector('span')?.style.aspectRatio).toEqual('1 / 1')
  })

  it('should create image of a specific width with aspect ratio', async () => {
    const testWidth = 100

    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" width={testWidth} isPicture={false} aspectRatio={[1, 1]} />
    )

    expect(container.querySelector('span')?.style.width).toEqual(`${testWidth}px`)
  })

  it('should create image of a specific height with aspect ratio', async () => {
    const testHeight = 100

    const {container} = render(
      <Image
        src="https://source.unsplash.com/random"
        alt=""
        height={testHeight}
        isPicture={false}
        aspectRatio={[1, 1]}
      />
    )

    expect(container.querySelector('span')?.style.height).toEqual(`${testHeight}px`)
  })

  it('should create image of a specific height and width ignoring aspect ratio when both are provided', async () => {
    const testHeight = 100
    const testWidth = 150

    const {container} = render(
      <Image
        src="https://source.unsplash.com/random"
        alt=""
        height={testHeight}
        width={testWidth}
        isPicture={false}
        aspectRatio={[1, 1]}
      />
    )

    expect(container.querySelector('span')?.style.height).toEqual(`${testHeight}px`)
    expect(container.querySelector('span')?.style.width).toEqual(`${testWidth}px`)
  })

  it('should set the height and width of the image to initial if no specific width is set', async () => {
    const {container} = render(<Image src="https://source.unsplash.com/random" alt="" />)

    expect(container.querySelector('img')?.getAttribute('height')).toEqual(`initial`)
    expect(container.querySelector('img')?.getAttribute('width')).toEqual(`initial`)
  })

  it('should create an img tag with the custom height and width applied as props', async () => {
    const testHeight = 100
    const testWidth = 150
    const {container} = render(
      <Image src="https://source.unsplash.com/random" alt="" height={testHeight} width={testWidth} />
    )
    expect(container.querySelector('img')?.getAttribute('height')).toEqual(`${testHeight}`)
    expect(container.querySelector('img')?.getAttribute('width')).toEqual(`${testWidth}`)
  })

  it('should pass loading and decoding properties correctly to the image tag', async () => {
    const testLoading = 'lazy'
    const testDecoding = 'async'
    const {container} = render(
      <Image
        src="https://source.unsplash.com/random"
        alt="Random Image"
        loading={testLoading}
        decoding={testDecoding}
      />
    )
    expect(container.querySelector('img')?.getAttribute('loading')).toEqual(testLoading)
    expect(container.querySelector('img')?.getAttribute('decoding')).toEqual(testDecoding)
  })

  it('should pass loading and decoding properties correctly to the image tag when there is a span wrapper', async () => {
    const testLoading = 'lazy'
    const testDecoding = 'async'
    const {container} = render(
      <Image
        src="https://source.unsplash.com/random"
        alt="Random Image"
        loading={testLoading}
        decoding={testDecoding}
        aspectRatio="1:1"
      />
    )
    expect(container.querySelector('img')?.getAttribute('loading')).toEqual(testLoading)
    expect(container.querySelector('img')?.getAttribute('decoding')).toEqual(testDecoding)
  })

  it('should pass loading and decoding properties correctly to the image tag when the picture tag is used', async () => {
    const testLoading = 'lazy'
    const testDecoding = 'async'
    const {container} = render(
      <Image
        src="https://source.unsplash.com/random"
        alt="Random Image"
        loading={testLoading}
        decoding={testDecoding}
        isPicture
      />
    )
    expect(container.querySelector('img')?.getAttribute('loading')).toEqual(testLoading)
    expect(container.querySelector('img')?.getAttribute('decoding')).toEqual(testDecoding)
  })
})
