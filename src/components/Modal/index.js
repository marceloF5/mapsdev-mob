import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as ModalActions } from '~/store/ducks/modal'
import { Creators as UsersActions } from '~/store/ducks/users'

import {
    Modal as ModalComponent, ActivityIndicator, Text, Alert,
} from 'react-native'
import {
    SContainer,
    SContainerContent,
    STextTile,
    STextInput,
    SActions,
    SButton,
    STextButton,
    STextError,
} from './styles'

class Modal extends Component {
    state = {
        userInput: '',
    }

    handleInputChange = text => this.setState({ userInput: text })

    handleFormSubmit = () => {
        const { users } = this.props

        if (users.loading) return
        const { userInput } = this.state
        if (!userInput) return

        const {
            addUsersRequest,
            modal: { coordinate },
        } = this.props
        console.tron.log(userInput)
        addUsersRequest(userInput, coordinate)
        this.setState({ userInput: '' })
    }

    handleHideModal = () => {
        console.tron.log(this.props)
        const { hideModal } = this.props
        hideModal()
        this.setState({ userInput: '' })
    }

    render() {
        const { modal, users } = this.props
        const { userInput } = this.state

        return (
            <ModalComponent
                visible={modal.visible}
                transparent
                animationType="slide"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                }}
            >
                <SContainer>
                    <SContainerContent>
                        <STextTile>Adicionar Novo Local</STextTile>
                        <STextInput
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="GitHuber User"
                            value={userInput}
                            onChangeText={this.handleInputChange}
                        />
                        {users.error && <STextError>{users.error}</STextError>}
                        <SActions>
                            <SButton color="regular" onPress={this.handleHideModal}>
                                <STextButton>Cancel</STextButton>
                            </SButton>
                            <SButton color="success" onPress={this.handleFormSubmit}>
                                {users.loading ? (
                                    <ActivityIndicator size="small" />
                                ) : (
                                    <STextButton>Save</STextButton>
                                )}
                            </SButton>
                        </SActions>
                    </SContainerContent>
                </SContainer>
            </ModalComponent>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modal,
    users: state.users,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Modal)
