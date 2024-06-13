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
            <a href="index.html"><img src="../arquivos/CARDBOARDQuadrado.png"
                    alt="Cardboard Tower"></a>
            <span>by <a href="../../home/ptBR/index.html" style="height: auto;">Maracujá Gamess</a></span>
        </div>
        <nav>
            <button id="fecharButton">x</button>
            <ul>
                <li><a href="index.html#sobre">about</a></li>
                <li><a href="https://play.google.com/store/apps/dev?id=7991213677989686077">download</a></li>
                <li><a href="credits.html">credits</a></li>
                <li><a href="../ptBR/index.html">português</a></li>
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
            <p>This website uses cookies to ensure the best experience for you. By continuing to browse, you agree to the use of cookies. <br> <a style="color: white;" href="../../home/en/privacy-policy.html">Privacy Policy.</a></p>
            <button id="accept-cookies-btn" class="accept-cookies-btn">Accept</button>
        </div>

        <div class="footerLeft">
            <img src="../arquivos/carboardReatngular.png" alt="Logo Distribution Simulator">
            <span>a game by <a href="../../home/en/index.html">Maracujá Gamess Studio</a></span>
        </div>

        <div class="footerRight">
            <a href="../../home/en/privacy-policy.html">Policy Privacy</a>
            <a href="credits.html">Credits</a>
            <a href="terms-and-policy-privacy.html">Terms of Use and Policy Privacy</a>
            <a href="../../home/en/contact.html">Contact</a>
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

