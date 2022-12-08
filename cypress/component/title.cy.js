import Title from '../../src/components/Title'


describe('test.cy.js', () => {
  it('Contains the correct title', () => {
    // cy.mount()
    cy.mount(<Title />)
    cy.get('h1').should('contains.text', `Task tracker 8k - which means 8000... So, it's like task tracker 8000!`)
  })
})