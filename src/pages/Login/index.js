// import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

// import { Creators as LoginActions } from '~/store/sagas/login'

// import { ActivityIndicator } from 'react-native'
// import {
//     Container, Input, Button, ButtonText, Error,
// } from './styles'

// class Login extends Component {
//     state = {
//         username: '',
//     }

//     handleSubmit = () => {
//         const { username } = this.state
//         const { doLogin } = this.props

//         doLogin(username)
//     }

//     render() {
//         const { username } = this.state
//         const { error, loading } = this.props

//         return (
//             <Container>
//                 {error && <Error>User not found</Error>}
//                 <Input
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                     placeholder="Type your user"
//                     value={username}
//                     onChangeText={text => this.setState({ username: text })}
//                 />
//                 <Button onPress={this.handleSubmit}>
//                     {loading ? (
//                         <ActivityIndicator size="small" color="#FFF" />
//                     ) : (
//                         <ButtonText>Go on!</ButtonText>
//                     )}
//                 </Button>
//             </Container>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     error: state.login.error,
//     loading: state.login.loading,
// })

// const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Login)

import React from 'react'

import { View } from 'react-native'

// import { Container } from './styles';

const Login = () => <View />

export default Login
