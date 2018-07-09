import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

class ShoppingList extends Component {
  state = {
    items : [
      {id: uuid(), name: 'Eggs'},
      {id: uuid(), name: 'Milk'},
      {id: uuid(), name: 'Steak'},
      {id: uuid(), name: 'Water'}
    ]
  }

  render () {
    //using a little bit of destructuring
    const { items } = this.state
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter item')
            if (name) {
              this.setState(state => ({
                items: [...state.items, {id:uuid(), name }] //I tell it to take the items[] and add a new element with random id
              }))
            }
          }}
          
        >Add Item</Button>  
        <ListGroup>
          <TransitionGroup className ="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={()=> {
                    this.setState(state => ({
                      items: state.items.filter(item => item.id !== id)
                    }))
                  }}
                >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default ShoppingList