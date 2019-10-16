import React, { useState} from "react";
import items from "../core/Redux/items";
import { Heading } from "../styled/Heading";
import DataTable from "../components/DataTable";
import styled from "styled-components";
import { rem } from "polished";
import {Label} from "../styled/Label"
import { ContentSwitcherHorizental } from "../components/ContentSwitcherHorizental";
import { Button } from "../styled/Button"
import { colors } from '../theme/colors';

const ButtonElement = styled.div`
    flex: 2;
    font-weight: 400;
    text-align: right;
`;

const Page = styled.div`
  margin: 0 auto;
  padding: ${rem(16)};
  flex: 1;
  max-width: ${rem(960)};
`;

const Banner = styled.div`
     display: flex;
    border-bottom: 1px solid ${colors.secondary};
    
`;

export default function RequestPage() {
    //set state management
        let keys = {All:true, Denied:false, Pending:true, Approved:true };
        const [activeKey, setActiveKey] = useState(Object.keys(keys) ? Object.keys(keys)[0] : '');
        const rows = [];
        // change row data on state change.
        for (let i=0; i< items.length ;i++){
            if (activeKey ==='All'){
                rows.push({date:items[i].date, reason:items[i].reason, status:items[i].status})
            } else if (activeKey === items[i].status) {
                rows.push({date:items[i].date, reason:items[i].reason, status:items[i].status})
            }
        }
            return (
            <div>
                <Page>
                    <Heading>Requests</Heading>
                    <Banner>
                        <ContentSwitcherHorizental options={Object.keys(keys)} active={activeKey} setActive={setActiveKey} />
                        <ButtonElement>
                            <Button type="PrimaryHollow">Create new request</Button>
                        </ButtonElement>
                    </Banner>
                    <DataTable
                        title="pending request"
                        columns={[
                            { label: 'date',  prop: 'date'},
                            { label: 'reason',  prop: 'reason', flex: '12' },
                            { label: 'status' , prop: 'status', template: (item) => {return <Label type={item.status === "Denied"? "danger":item.status === "Approved"?"success":"Pending"}>{item.status}</Label>}},
                        ]}
                        rows={rows}
                    />
                </Page>
            </div>
        );
}
