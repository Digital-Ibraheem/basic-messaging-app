import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider.js'
import OpenConversation from './OpenConversation.js'
import Sidebar from './Sidebar.js'

export default function Dashboard({ id }) {
    const { selectedConversation } = useConversations()

    return (
        <div className='d-flex form'>
            <Sidebar id={id} />
            {selectedConversation && <OpenConversation />}
        </div>
    )
}
