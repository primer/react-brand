import * as doctocatComponents from '@primer/gatsby-theme-doctocat'
import * as octicons from '@primer/octicons-react'
// eslint-disable-next-line import/no-unresolved
import * as primerComponents from '@primer/react-brand'
import {Box} from '@primer/react'

const {default: _, ...octiconComponents} = octicons

const scopes = {
  ...doctocatComponents,
  ...primerComponents,
  ...octiconComponents,
  Box,
}

export default scopes
