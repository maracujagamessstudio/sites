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
        <p>Sua aventura começa aqui!</p>
    </header>

    <nav>
        <a href="index.html">Início</a>
        <a href="index.html#sobre">Sobre</a>
        <a href="index.html#jogos">Portfólio</a>
        <a href="contato.html">Contato</a>
    </nav>
        `;
        // Adiciona a navegação ao cabeçalho
        navElement.innerHTML = navContent.innerHTML;


        // Cria o rodapé
        var footerContent;
        footerContent = `

        <div id="cookie-banner" class="cookie-banner">
        <p>Este site utiliza cookies para garantir a melhor experiência para você. Ao continuar a navegar, você concorda com o uso de cookies. <br> <a style="color: white;" href="politicadeprivacidade.html">Política de privacidade.</a></p>
        <button id="accept-cookies-btn" class="accept-cookies-btn">Aceitar</button>
    </div>

        <p>&copy; 2024 Maracujá Gamess Studio. Todos os direitos reservados.</p> <a
        href="politicadeprivacidade.html">Política de privacidade</a><br>
        <a href="../en/index.html">English</a>
    
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

