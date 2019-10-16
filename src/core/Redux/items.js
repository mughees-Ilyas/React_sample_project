const items = [
  {
    date: "2017/09/21",
    reason: "data Science Algorithm",
    status:"Pending"
  },
  {
      date: "2017/08/13",
      reason: "stakeholder dashboard",
      status:"Approved"
   },
    {
        date: "2017/08/13",
        reason: "email blast",
        status:"Denied"
    },
    {
        date: "2017/09/21",
        reason: "data Science Algorithm",
        status:"Pending"
    },
    {
        date: "2017/08/13",
        reason: "stakeholder dashboard",
        status:"Approved"
    },
    {
        date: "2017/08/13",
        reason: "email blast",
        status:"Denied"
    },
    {
        date: "2017/09/21",
        reason: "data Science Algorithm",
        status:"Pending"
    },
    {
        date: "2017/08/13",
        reason: "stakeholder dashboard",
        status:"Approved"
    },
    {
        date: "2017/08/13",
        reason: "email blast",
        status:"Denied"
    },
    {
        date: "2017/08/13",
        reason: "investigation",
        status:"Approved"
    },
    {
        date: "2017/08/13",
        reason: "stakeholder dashboard",
        status:"Approved"
    },
    {
        date: "2017/08/13",
        reason: "stakeholder dashboard",
        status:"Approved"
    },
    {
        date: "2017/08/13",
        reason: "stakeholder dashboard",
        status:"Approved"
    },
    {
        date: "2017/08/13",
        reason: "stakeholder dashboard",
        status:"Denied"
    },



];

const keys = [
    {
        key: 1,
        key_name:"user_id",
        description: "data Science Algorithm",
        type:"integer",
        isPersonal: true,
        possible_values: [
            {
                value:"null",
                description:"value when user is not found"
            }, {
                value:"(integer)",
                description:"ID key for user"
            }
        ]
    },
    {
        key: 2,
        key_name:"user_email",
        description: "some description",
        type:"String",
        isPersonal: false,
        possible_values: [
            {
                value:"null",
                description:"value when user is not found"
            }, {
                value:"(String)",
                description:"ID key for email"
            }
        ]
    }

];
export const dataItems = keys;
export default items;
