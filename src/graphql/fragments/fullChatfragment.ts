import gql from 'graphql-tag';
import message from "./message.fragment";
import chat from "./chat.fragment";

export default gql`
    fragment FullChat on Chat{
        ...Chat
        messages{
            ...Message
        }
    }
    ${chat}
    ${message}
`;


