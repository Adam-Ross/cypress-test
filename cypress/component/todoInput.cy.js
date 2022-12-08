import TodoInput from '../../src/components/TodoInput'

describe('todoInput.cy.js', () => {
  it('Contains the correct placeholder', () => {
    // cy.mount()
    cy.mount(<TodoInput />)
    cy.get('input').should('have.attr', 'placeholder', 'enter todo...')
  })
})