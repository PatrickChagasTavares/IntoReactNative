import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';
import api from '../../services/api';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const reponse = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: Response.data });
  }

  render() {
    const { stars } = this.state;

    return (
      <Container>
        <Text>Page User</Text>
      </Container>
    );
  }
}
