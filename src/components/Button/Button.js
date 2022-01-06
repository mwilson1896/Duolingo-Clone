import PropTypes from 'prop-types';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styles from "./styles";

const Button =({ text, onPress, disabled }) => {
    return (
        <Pressable onPress= {onPress} style={[styles.container, disabled ? styles.disabledContainer: {}]}
        disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};

Button.defaultProps ={
    onPress: () => {},
    disabled: false,
};

export default Button;