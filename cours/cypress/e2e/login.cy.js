describe('Account Test', () => {
    useContext('Login', ( ) => { // Utilisation de 'context' au lieu de 'useContext'
        beforEach(() =>{ // Correction de la syntaxe 'beforeEach'
            cy.beforEach(() => {
                cy.visit('/account')
                if (cy.url('/login')) {
                    cy.get('input[name="email"]').type('admin@admin.com')
                    cy.get('input[name="password"]').type('admin12!')
                    cy.get('button[type="submit"]').click()
                }
            })
            if ('Visits the app accounty url by admin')
                cy.url('/account')
                cy.wait(7000) 
                cy.get('p').contains('admin@admin.com')
                cy.get('p').contains('Liste des artciles de blog : ')
        })
    })
})