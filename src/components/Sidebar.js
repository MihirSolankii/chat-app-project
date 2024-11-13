import React, { useState } from 'react'
import {Tab,Nav, Button,Modal} from 'react-bootstrap'
import Conversation from './Conversation'
import Contact from './Contact'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'

const conversations_key="conversations"
    const contacts_key="contacts"
function Sidebar({id}) {
    const[activeKey,setActiveKey]=useState(conversations_key);
    const[modalOpen,setModalOpen]=useState(false);
 function closeModal(){
    setModalOpen(false);
 }
   const conversations=activeKey===conversations_key
    
  return (
    <div style={{width:'250px'}} className='d-flex flex-column'>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant='tabs' className='justify-content center'>
            <Nav.Item>
                <Nav.Link eventKey={conversations_key}>
                    ConverSations
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={contacts_key} > 
                   Contacts
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <Tab.Content className='border-right overflow-auto flex-grow-1'>
            <Tab.Pane eventKey={conversations_key}>
                <Conversation/>
            </Tab.Pane>
            <Tab.Pane eventKey={contacts_key}>
                <Contact/>
            </Tab.Pane>
        </Tab.Content>
        <div className='p-2 border-top border-right small'>
            Your Id:<span className='text-muted'>{id}</span>
        </div>
        <Button  onClick={()=>setModalOpen(true)}className='rounded-0'>
            New {conversations?'Conversation':'contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversations?
        <NewConversationModal closeModal={closeModal}/>:
        <NewContactModal closeModal={closeModal}/>
    }
      </Modal>
    </div>
  )
}

export default Sidebar
