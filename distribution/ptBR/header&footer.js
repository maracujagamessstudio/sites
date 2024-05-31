document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o cabeçalho e o footer
    var navElement = document.querySelector('.top');
    var footerElement = document.querySelector('footer');

    // Cria os elementos de navegação e rodapé
    if (navElement && footerElement) {
        // Cria a navegação
        var navContent = document.createElement('div');
        navContent.innerHTML = `

        <header>
        <div class="logoSection">
            <a href="index.html"><img src="../arquivos/Distribution Simulator 2025logo.png"
                    alt="Distribution Simulator"></a>
            <span>por <a href="../../home/ptBR/index.html" style="height: auto;">Maracujá Gamess</a></span>
        </div>
        <nav>
            <button id="fecharButton">x</button>
            <ul>
                <li><a href="index.html#sobre">sobre</a></li>
                <li><a href="https://play.google.com/store/apps/dev?id=7991213677989686077">download</a></li>
                <li><a href="creditos.html">créditos</a></li>
                <li><a href="../en/index.html">english</a></li>
            </ul>
        </nav>

        <button id="openMenu">
            <div></div>
            <div></div>
            <div></div>
        </button>


    </header>
        `;
        // Adiciona a navegação ao cabeçalho
        navElement.innerHTML = navContent.innerHTML;


        // Cria o rodapé
        var footerContent;
        footerContent = `

        <div id="cookie-banner" class="cookie-banner">
        <p>Este site utiliza cookies para garantir a melhor experiência para você. Ao continuar a navegar, você concorda com o uso de cookies. <br> <a style="color: white;" href="../../home/ptBR/politicadeprivacidade.html">Política de privacidade.</a></p>
        <button id="accept-cookies-btn" class="accept-cookies-btn">Aceitar</button>
    </div>

    <div class="footerLeft">
    <img src="../arquivos/distributionsimulatorRetangular.png" alt="Logo Distribution Simulator">
    <span>um jogo por <a href="../../home/ptBR/index.html">Maracujá Gamess Studio</a></span>
</div>

<div class="footerRight">
    <a href="../../home/ptBR/politicadeprivacidade.html">Política de Privacidade</a>
    <a href="creditos.html">Créditos</a>
    <a href="termos-e-politica-de-privacidade.html">Termos de Uso de Política de Privacidade</a>
    <a href="../../home/ptBR/contato.html">Contato</a>
</div>
    
        `;
        // Adiciona o rodapé ao footer
        footerElement.innerHTML = footerContent;
    }

    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
    const cookieBanner = document.getElementById('cookie-banner');

    // Verifica se o usuário já aceitou os cookies anteriormente
    const cookiesAccepted = localStorage.getItem('cookieConsentWebsiteMaracujaGamess');

    if (!cookiesAccepted) {
        // Se os cookies ainda não foram aceitos, exibe o aviso
        cookieBanner.style.display = 'block';
    }

    // Quando o usuário clica em "Aceitar", oculta o aviso e armazena a aceitação no localStorage
    acceptCookiesBtn.addEventListener('click', function () {
        localStorage.setItem('cookieConsentWebsiteMaracujaGamess', true);
        cookieBanner.style.display = 'none';
    });
});

