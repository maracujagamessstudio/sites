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
            <p>by Maracujá Gamess</p>
        </div>
        <div class="navRight">
            <button class="buttonFechar">x</button>
            <ul>
                <li><a href="credits.html">credits</a></li>
                <li><a href="tutorials.html">tutorials</a></li>
                <li><a href="download.html">play</a></li>
                <li><a href="../ptBR/index.html">português <img style="vertical-align: middle; width: 32px;" src="../arquivos/brasil.png" alt="Brasil"></a></li>
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
        <p>This website uses cookies to ensure the best experience for you. By continuing to browse, you agree to the use of cookies. <br> <a style="color: white;" href="../../home/en/privacy-policy.html">Privacy Policy.</a></p>
        <button id="accept-cookies-btn" class="accept-cookies-btn">Accept</button>
    </div>

        <div class="footer-logo">
        <img src="../arquivos/schoolTeachSim2.png" alt="Logo">
        <p>developed by Maracujá Gamess</p>
    </div>
    <div class="footer-links">
        <a href="credits.html">Credits</a>
        <a href="privacypolicy.html">Privacy Policy</a>
        <a href="gametermsandpolicyprivacy.html">Game Terms and Policy Privacy</a>
        <a href="download.html">Download</a>
        <a href="../../home/en/contact.html">Contact</a>
    </div>
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