import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { styles } from './styles';
import { darkTheme } from '@/theme';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <View style={{ backgroundColor: darkTheme.errorBoudary.backgroundColor }}>
          <View style={styles.errorContainer}>
            <Text style={[styles.errorText,
            { color: darkTheme.errorBoudary.color }]}>Oops, Something went wrong.</Text>
            <Text style={[styles.errorText,
            { color: darkTheme.errorBoudary.color }]}>Try again later :)</Text>
            <Text style={[styles.errorText,
            { color: darkTheme.errorBoudary.color }]}>Error:</Text>
            <Text style={[styles.errorText,
            { color: darkTheme.errorBoudary.color }]}>{error && error.toString()}</Text>
          </View>
        </View>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
