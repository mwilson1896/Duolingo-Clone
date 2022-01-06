import React, {useState} from 'react';
import {View, Text } from 'react-native';
import styles from './styles';
import Button from '../Button';
import WordOption from '../WordOption';

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
    const[parts, setParts] = useState(question.parts);
    const onButtonPress = () => {
        if (checkIfCorrect) {
            onCorrect();
        } else  {
            onWrong();
        }
    };

    const checkIfCorrect = () => {
        return(parts.filter(part => part.isBlank && part.selected !== part.text).length === 0);
    }

    const addSelectedOptions = (option) => {
        if (isSelected(option)) {
            return;
        }
        const newParts = [...parts];
        for (let i = 0; i < newParts.length; i++) {
            if(newParts[i].isBlank && !newParts[i].selected) {
                newParts[i].selected = option;
                break;
            }
        }
        setParts(newParts);
    };

    const removeSelectedOption = (index) => {
        const newParts = [...parts];
        newParts[index].selected = null;
        setParts(newParts);
    };

    const isSelected = (option) => {
        return (parts.filter(part => part.isBlank && part.selected === option).length > 0);
    }

    const isReadyToContinue = () => {
        return (parts.filter((part) => part.isBlank && !part.selected).length > 0);
    }
    
    return (
        <>
            <Text style={styles.title}>Finish the sentence</Text>
            <View style={styles.row}>
                {parts.map((part, index) => {
                    if (part.isBlank) {
                        return(
                        <View style={styles.blank}>
                            {part.selected && (<WordOption 
                            text={part.selected} 
                            onPress={() => removeSelectedOption(index)}
                             />)}
                        </View>)
                    } else {
                        return(<Text style={styles.text}>{part.text} </Text>)
                    }
                }
                )}
            </View>

            <View style={styles.optionsContainer}>
                {question.options.map((option) => (
                <WordOption 
                text={option} 
                isSelected={isSelected(option)} 
                onPress={() => addSelectedOptions(option)} />
                ))}
            </View>

            <Button 
            text="Continue" 
            onPress={onButtonPress} 
            disabled={!isReadyToContinue} />
        </>
    );
};

export default FillInTheBlank;
