import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { colors, metrics } from '~/styles'

export default (styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
}))
export const SCalloutContainer = styled.View`
    width: ${() => metrics.screenWidth * 0.5};
`
export const SImage = styled.Image`
    border-color: ${() => colors.primary};
    border-radius: ${() => metrics.screenWidth * 0.075};
    border-width: 5px;
    height: ${() => metrics.screenWidth * 0.15};
    width: ${() => metrics.screenWidth * 0.15};
`
export const SName = styled.Text`
    font-size: 16;
    font-weight: bold;
`
export const SBio = styled.Text`
    color: ${() => colors.regular};
    font-size: 12px;
    margin-top: 5px;
`
