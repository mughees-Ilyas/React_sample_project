import React, { useState }  from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';
import { Button } from '../styled/Button';
import {InputField} from '../styled/Input'
import { TextArea } from '../styled/TextArea'
import {editData} from "../core/Redux/action/simpleAction";


export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const KeyName = styled.h3`
  font-size: ${rem(28)};
  margin: 0;
`;

export const PropContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PropContainerEdit = styled(PropContainer)`
width:25%
`;

export const Title = styled.div`
  font-size: ${rem(16)};
  margin-bottom: ${rem(4)};
  margin-top:${rem(16)};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${rem(12)};
`;
export const ButtonProp = styled.div`
    align-self: baseline
`;

export function KeyData( {keyName, data, isEdit, setEdit, dispatch} ) {

    const [inputNameValue, setInputNameValue] = useState(data.name);
    const [inputDescriptionValue, setInputDescriptionValue] = useState(data.description);
    const [inputTypeValue, setInputTypeValue] = useState(data.type);
    const [inputValue, setInputValue] = useState(data.isPersonal? true:false);
    const [keyID, setKeyID] = useState(keyName);

    function resetState(shouldSave) {
        if (keyName !== keyID) {
            setKeyID(keyName);
            setInputNameValue(data.name);
            setInputDescriptionValue(data.description);
            setInputTypeValue(data.type);
            setInputValue(data.isPersonal ? true : false)
        }
        let newData = {
            id:keyName,
            data:{
            name:inputNameValue,
            description:inputDescriptionValue,
            type:inputTypeValue,
            isPersonal:inputValue,
            possible_values:data.possible_values
        }};
        if (shouldSave) {
            dispatch(editData(newData));
        }
    }
    function edit(save) {
        resetState(save);
        setEdit(!isEdit)
    }
    let view_page;
    if (isEdit)
    {
        view_page =  (
            <div>
                <Header>
                    <PropContainerEdit>
                        <Title>Key name</Title>
                        <InputField
                            id="input" type="text" value={inputNameValue} placeholder="placeholder"
                            onChange={e => setInputNameValue(e.target.value)} />
                    </PropContainerEdit>
                    <ButtonProp>
                        <Button onClick={()=> edit(true)}>Save</Button>
                    </ButtonProp>
                </Header>

                <PropContainer>
                    <Title>Description</Title>
                    <TextArea
                        name="description"
                        value={inputDescriptionValue}
                        rows="2"
                        onChange={e => setInputDescriptionValue(e.target.value)}
                        placeholder="enter description"
                    />
                </PropContainer>

                <PropContainerEdit>
                    <Title>Type</Title>
                    <InputField
                        type="text"
                        name="type"
                        value={inputTypeValue}
                        onChange={e => setInputTypeValue(e.target.value)}
                        placeholder="enter data type"
                    />
                </PropContainerEdit>

                <PropContainer>
                    <div>
                    <InputField
                        width= '2%'
                        type="checkbox"
                        name="type"
                        checked={inputValue}
                        onChange={ e => setInputValue(!inputValue)}
                        placeholder="enter data type"
                    />
                    is this personal data?
                    </div>
                </PropContainer>
            </div>
        );

    } else {

        if (keyName!==keyID){
            resetState();
        }
        view_page =  (
            <div>
                <Header>
                    <KeyName>{inputNameValue}</KeyName>
                    <ButtonProp>
                        <Button onClick={()=>edit(false)}>edit This</Button>
                    </ButtonProp>
                </Header>

                <PropContainer>
                    <Title>Description</Title>
                    <Description>{inputDescriptionValue}</Description>
                </PropContainer>

                <PropContainer>
                    <Title>Type</Title>
                    <Description>{inputTypeValue}</Description>
                </PropContainer>

                <PropContainer>
                    <Title>Sensitivity</Title>
                    <Description>
                        {inputValue? "This is personal data, and cannot be distributed in raw form": "This is not a personal data, and can be distributed in raw form"}
                    </Description>
                </PropContainer>
            </div>
        );
    }

    return view_page;
}
