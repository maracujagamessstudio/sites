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
        <img class="logoEmpresa" src="../arquivos/MaracujaGamessStudioLogoSemFundo.png" alt="" style="pointer-events: none;">
        <p>Your adventure starts here!</p>
    </header>

    <nav>
        <a href="index.html">Home</a>
        <a href="index.html#about">About</a>
        <a href="index.html#games">Portfolio</a>
        <a href="contact.html">Contact</a>
    </nav>
        `;
        // Adiciona a navegação ao cabeçalho
        navElement.innerHTML = navContent.innerHTML;


        // Cria o rodapé
        var footerContent;
        footerContent = `

        <div id="cookie-banner" class="cookie-banner">
        <p>This website uses cookies to ensure the best experience for you. By continuing to browse, you agree to the use
            of cookies. <br> <a style="color: white;" href="privacy-policy.html">Privacy Policy.</a></p>
        <button id="accept-cookies-btn" class="accept-cookies-btn">Accept</button>
    </div>

    <p>&copy; 2024 Maracujá Games Studio. All rights reserved.</p> <a
    href="privacy-policy.html">Privacy Policy</a> <br>
    <a href="../ptBR/index.html">Português</a>

    
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

