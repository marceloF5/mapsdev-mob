import styled from 'styled-components/native'

import { colors, metrics } from '~/styles'

export const SContainer = styled.View`
    background: ${() => colors.darkTransparent};
    flex: 1;
    justify-content: center;
`
export const SContainerContent = styled.View`
    background-color: ${() => colors.white};
    border-radius: ${() => metrics.baseRadius};
    margin: 0 ${() => metrics.baseMargin}px;
    padding: ${() => metrics.basePadding * 1}px;
`
export const STextTile = styled.Text`
    color: ${() => colors.dark};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: ${() => metrics.baseMargin / 3}px;
    text-align: center;
`
export const STextInput = styled.TextInput`
    align-self: stretch;
    border-color: ${() => colors.light};
    border-radius: ${() => metrics.baseRadius}px;
    border-width: 1;
    color: ${() => colors.regular};
    font-size: 14px;
    margin: ${() => metrics.baseMargin}px 5px;
    padding: ${() => metrics.basePadding / 2}px;
`
export const SActions = styled.View`
    flex-direction: row;
`
export const SButton = styled.TouchableOpacity`
    background: ${({ color }) => colors[color]};
    margin: 0 5px;
    padding: 10px 30px;
    border-radius: ${() => metrics.baseRadius};
    flex: 1;
    align-items: center;
`
export const STextButton = styled.Text`
    color: ${() => colors.white};
    font-size: 14px;
    font-weight: bold;
`
export const STextError = styled.Text`
    color: ${() => colors.danger};
    font-size: 12px;
    font-weight: bold;
    margin-bottom: ${() => metrics.baseMargin}px;
    text-align: center;
`
