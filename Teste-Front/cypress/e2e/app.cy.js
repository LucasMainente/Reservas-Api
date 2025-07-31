class RegistroForm{
  elements ={
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    imageUrlInputFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }

  typeTitle(text){
    if (!text) return;
    this.elements.titleInput().type(text)
  }

  typeUrl(url){
    if (!url) return;
    this.elements.imageUrlInput().type(url)
  }
}

const registroForm = new RegistroForm();




describe('Resgistro de imagem', () => {
  describe('Enviar uma imagem com entradas inválidas', () => {
    const imagem = {
      titulo: 'cachorro fofo',
      url: 'https://picsum.photos/200/300?grayscale'
    }

    it('Estou na página de cadastro de imagens', () => {
      cy.visit('/')
    })
    
    it(`Quando eu digito "${imagem.titulo}" no campo do titulo`, () => {
      registroForm.typeTitle(imagem.titulo)
    })

    it(`Quando eu digito "${imagem.url}" no campo de URL`, () => {
      registroForm.typeUrl(imagem.url)
    })

    it('Eu clico no botão de envio', () => {
      registroForm.clickSubmit()
    })

    it('Então eu devo ver a mensagem "Please type a title for the image." acima do campo de titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image.")
    })

    it('E eu devo ver a mensagem "Please type a valid URL" abaixo do campo de URL da imagem', () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
})