import React, { useState } from "react";
import { Heading } from "../styled/Heading";
import styled from "styled-components";
import { rem } from "polished";
import { ContentSwitcher } from "../components/ContentSwitcher";
import {KeyData}  from "../components/KeyData";
import DataTable from "../components/DataTable";
import { Button } from "../styled/Button"
import { connect } from 'react-redux'
import { addData } from '../core/Redux/action/simpleAction'

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${rem(1)} solid #ddd;
  padding: ${rem(20)};
  flex: 1;
  margin: 0 ${rem(20)};
`;

const Page = styled.div`
  margin: 0 auto;
  padding: ${rem(16)};
  flex: 1;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;
const ContentButton = styled.div`
    padding-top: ${rem(16)};
`;

const Scrollable = styled.div`
  overflow: auto;
  flex: 1;
  max-height: calc(100vh - (${rem(64)}) - (${rem(48)}) - (${rem(32)}));
`;

function ManagerPage({dispatch, payload}) {

    // set state management for page
    const [updateKeys, setUpdateKeys] = useState(payload);
    const [activeKey, setActiveKey] = useState(Object.keys(payload) ? Object.keys(payload)[0] : '');
    const [isEdit, setEdit] = useState(false);

    // add a new key
    function addKeys() {
        let data =
            {
            name:"default name",
                description: "default description",
                type: "integer",
                isPersonal: false,
                possible_values: [
                {
                    value: "null",
                    description: "value when user is not found"
                }
            ]
        }
        dispatch(addData(data))
    }
    // make table rows for table component
    function returnTableRows(data) {
        let possible_values = data.possible_values;
        const rows = [];
        for (let i=0; i< possible_values.length ;i++){
            rows.push({value:possible_values[i].value, description:possible_values[i].description})
        }
        return rows;
    }
    let page = (
        <div>
            <Page>
                <Heading>Manage data</Heading>
                <Content>
                    <div>
                    <ContentSwitcher options={Object.keys(updateKeys)} data={updateKeys} active={activeKey} setActive={setActiveKey} isEdit={isEdit} setEdit={setEdit} />
                        <ContentButton>
                            <Button type="SecondaryHollow" onClick={() => addKeys()}>Add Key</Button>
                        </ContentButton>
                    </div>
                    <Scrollable>
                        <DataContainer>
                            <div>
                            <KeyData keyName={activeKey} data={updateKeys[activeKey]} setEdit={setEdit} isEdit={isEdit} dispatch={dispatch} />
                            <DataTable
                            title="Possible Values"
                            columns={[
                                { label: 'Value',  prop: 'value'},
                                { label: 'Description',  prop: 'description' },
                            ]}
                            rows={returnTableRows(updateKeys[activeKey])}
                            />
                                <ContentButton>
                                    {isEdit? (
                                        <Button type="SecondaryHollow" >Add possible values</Button>
                                    ):(
                                        <div/>
                                    ) }
                                </ContentButton>
                            </div>
                        </DataContainer>
                    </Scrollable>
                </Content>
            </Page>
            }
        </div>
    );

    if (payload) {
        return page;
    } else {
        return (<div> loading data</div>);
    }
}
const mapStateToProps = (state, ownProps) => ({...ownProps, ...state.simpleReducer});

export default connect(mapStateToProps)(ManagerPage);