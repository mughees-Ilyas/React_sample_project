let keys = {
    1 : {
        name:"user_id",
        description: "data Science Algorithm",
        type: "integer",
        isPersonal: true,
        possible_values: [
            {
                value: "null",
                description: "value when user is not found"
            },
            {
                value: "(integer)",
                description: "ID key for user"
            }
        ]
    },
    2 : {
        name:'user_email',
        description: "some description",
        type: "String",
        isPersonal: false,
        possible_values:
            [
                {
                    value: "null",
                    description: "value when user is not found"
                },
                {
                    value: "(String)",
                    description: "ID key for email"
                }
            ]
    }
};
let data = JSON.parse(localStorage.getItem('keys'));

if (data) {
    keys = data;
}
export default keys;