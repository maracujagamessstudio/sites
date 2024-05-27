document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o cabeçalho e o footer
    var navElement = document.querySelector('nav');
    var footerElement = document.querySelector('footer');

    // Cria os elementos de navegação e rodapé
    if (navElement && footerElement) {
        // Cria a navegação
        var navContent = document.createElement('div');
        navContent.innerHTML = `
        <div class="navLeft">
        <a href="index.html"><img src="../arquivos/schoolTeachSim2.png" alt="School TeachSim Logo"></a>
        <p>por Maracujá Gamess</p>
    </div>
    <div class="navRight">
        <button class="buttonFechar">x</button>
        <ul>
        <li><a href="creditos.html">créditos</a></li>
        <li><a href="tutoriais.html">tutoriais</a></li>
        <li><a href="download.html">jogar</a></li>
                <li><a href="../en/index.html">english <img style="vertical-align: middle;" src="../arquivos/estados-unidos.png" alt="USA" style="width: 32px;"> </a></li>

        </ul>
    </div>

    <div class="mobile">
        <button class="mobileButton">
            =
        </button>
    </div>
        `;
        // Adiciona a navegação ao cabeçalho
        navElement.innerHTML = navContent.innerHTML;
        const mobileButton = document.querySelector('.mobileButton');
        const navRight = document.querySelector('.navRight');
        const buttonFechar = document.querySelector('.buttonFechar');
    
        // Função para fechar o menu lateral
        function fecharMenu() {
            navRight.classList.remove('active');
        }
    
        // Adiciona um ouvinte de evento de clique ao botão móvel
        mobileButton.addEventListener('click', () => {
            // Adiciona ou remove a classe "active" para mostrar ou ocultar o menu lateral
            navRight.classList.toggle('active');
        });
    
        // Adiciona um ouvinte de evento de clique ao botão Fechar
        buttonFechar.addEventListener('click', fecharMenu);
    
        // Adiciona um ouvinte de evento de clique ao documento inteiro
        document.addEventListener('click', (event) => {
            // Verifica se o clique ocorreu fora do menu lateral
            if (!navRight.contains(event.target) && !mobileButton.contains(event.target)) {
                // Fecha o menu lateral
                fecharMenu();
            }
        });



        // Cria o rodapé
        var footerContent;
        footerContent = `
        <div id="cookie-banner" class="cookie-banner">
        <p>Este site utiliza cookies para garantir a melhor experiência para você. Ao continuar a navegar, você concorda com o uso de cookies. <br> <a style="color: white;" href="politicadeprivacidade.html">Política de privacidade.</a></p>
        <button id="accept-cookies-btn" class="accept-cookies-btn">Aceitar</button>
    </div>

        <div class="footer-logo">
            <img src="../arquivos/schoolTeachSim2.png" alt="Logo">
            <p>desenvolvido por Maracujá Gamess</p>
        </div>
        <div class="footer-links">
        <a href="creditos.html">Créditos</a>
        <a href="politicadeprivacidade.html">Política de privacidade</a>
        <a href="termosepoliticadeprivacidade.html">Termos e Política de Privacidade do jogo</a>
        <a href="download.html">Download</a>
        <a href="../../home/ptBR/contato.html">Contato</a>
        </div>
    </footer>
    




        `;
        // Adiciona o rodapé ao footer
        footerElement.innerHTML = footerContent;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
    const cookieBanner = document.getElementById('cookie-banner');

    // Verifica se o usuário já aceitou os cookies anteriormente
    const cookiesAccepted = localStorage.getItem('cookieConsentWebsiteMaracujaGamess');

    if (!cookiesAccepted) {
        // Se os cookies ainda não foram aceitos, exibe o aviso
        cookieBanner.style.display = 'block';
    }

    // Quando o usuário clica em "Aceitar", oculta o aviso e armazena a aceitação no localStorage
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsentWebsiteMaracujaGamess', true);
        cookieBanner.style.display = 'none';
    });
});