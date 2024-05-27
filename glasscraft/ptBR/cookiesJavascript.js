var cookieConsentDiv = document.createElement("div");
cookieConsentDiv.id = "cookie-banner";
cookieConsentDiv.className = "cookie-banner";

cookieConsentDiv.innerHTML = `
<p>Este site utiliza cookies para garantir a melhor experiência para você. Ao continuar a navegar, você concorda com o uso de cookies. <br> <a style="color: white;" href="../../home/ptBR/politicadeprivacidade.html">Política de privacidade.</a></p>
<button id="accept-cookies-btn" class="accept-cookies-btn">Aceitar</button>
`;


// Criar o botão dentro do elemento div
var button = document.createElement("button");
button.textContent = "Aceitar Cookies";
button.onclick = function () {
    acceptCookies();
};



// Adicionar o elemento div ao documento
document.body.appendChild(cookieConsentDiv);

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