document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o cabeçalho e o footer
    var navElement = document.querySelector('nav');
    var footerElement = document.querySelector('footer');

    // Cria os elementos de navegação e rodapé
    if (navElement && footerElement) {
        // Cria a navegação
        var navContent = document.createElement('div');
        navContent.innerHTML = `
        <div class="nav_Logo">
        <a href="index.html"><img src="../arquivos/Glass__1_-removebg-preview (1).png" alt="GlassCraft"></a>
    </div>

    <div class="nav_Items">
        <ul>
            <li><a href="creditos.html">Créditos</a></li>
            <li><a href="sobre.html">Sobre o jogo</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.MaracujaGamessStudio.GlassCraft">Jogar</a></li>
            <li><a href="lancamento.html">Download</a></li>
        </ul>
    </div>

    <button class="menu-button" onclick="navResponsive()">=</button>
        `;
        // Adiciona a navegação ao cabeçalho
        navElement.innerHTML = navContent.innerHTML;

        // Adiciona o evento de clique ao botão de menu
        var button = document.querySelector(".menu-button");
        var nav = document.querySelector(".nav_Items");

        if (button && nav) {
            button.addEventListener("click", function(){
                nav.classList.toggle("show");
            });
        }

        // Cria o rodapé
        var footerContent = document.createElement('div');
        footerContent.innerHTML = `
            <div class="footerTop">
                <div class="footerLeft">
                    <h4>GlassCraft</h4>
                    <p>Prepare-se para jogar, dia 1 de março.</p>
                </div>

                <div class="footerRight">
                    <a href="creditos.html">Créditos</a>
                    <a href="lancamento.html">Lançamento</a>
                    <a href="sobre.html">Sobre</a>
                    <a href="lancamento.html">Download</a>
                    <a href="politica-de-privacidade.html">Política de privacidade</a>
                    <a href="../../home/ptBR/contato.html">Contato</a>
                    <a href="termosJogo.html">Termos do jogo</a>
                </div>
            </div>

            <div class="footerBottom">
                GlassCraft Todos os Direitos Reservados 2024. Desenvolvido por Maracujá Gamess.
            </div>
        `;
        // Adiciona o rodapé ao footer
        footerElement.innerHTML = footerContent.innerHTML;
    }
});
