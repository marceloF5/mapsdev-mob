// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import { Creators as RepositoriesActions } from '~/store/sagas/repositories'

// import { ActivityIndicator, Text } from 'react-native'
// import { Container } from './styles'

// class Repositories extends Component {
//     componentDidMount() {
//         const { loadRepositories } = this.props

//         loadRepositories()
//     }

//     render() {
//         const { repositories } = this.props
//         return (
//             <Container>
//                 {repositories.loading ? (
//                     <ActivityIndicator size="small" />
//                 ) : (
//                     repositories.data.map(repository => (
//                         <Text key={repository.id}>{repository.name}</Text>
//                     ))
//                 )}
//             </Container>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     repositories: state.repositories,
// })

// const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Repositories)

import React from 'react'

import { View } from 'react-native'

// import { Container } from './styles';

const Repositories = () => <View />

export default Repositories
