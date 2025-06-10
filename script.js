const startDate = new Date('2023-01-15T00:00:00'); // **Mude esta data para a data de início do seu namoro!**

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Média de dias por mês
    const years = Math.floor(days / 365.25); // Média de dias por ano

    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    document.getElementById('countdown').innerHTML =
        `${years} anos, ${months % 12} meses, ${days % 30} dias, ` +
        `${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);

// Chama a função uma vez para exibir imediatamente ao carregar a página
updateCountdown();