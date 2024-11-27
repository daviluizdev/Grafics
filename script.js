document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('graficoProfissional').getContext('2d');

    // Dados
    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];
    const saldoData = [1000, 1200, 1500, 1400, 1600];

    // Nova paleta de cores em roxo escuro e preto
    const backgroundColors = [
      '#2D033B', // Roxo muito escuro
      '#3E1F47', // Roxo escuro
      '#4B3067', // Roxo médio
      '#603882', // Roxo um pouco mais claro
      '#000000'  // Preto
    ];

    // Criando o gráfico de donut
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Saldo por Mês',
            data: saldoData,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors.map(color => color), // Bordas iguais às cores de fundo
            borderWidth: 1 // Bordas mais finas para um look mais moderno
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%', // Aumenta o tamanho do "buraco" no centro
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 14,
                family: 'Arial',
                weight: 'bold'
              },
              color: '#333333', // Cor escura para legendas
              boxWidth: 15,
              padding: 15
            }
          },
          title: {
            display: true,
            text: ' Circulação monetária mensal',
            font: {
              size: 22,
              family: 'Arial',
              weight: 'bold'
            },
            color: '#333333' // Título em cor escura
          },
          tooltip: {
            backgroundColor: '#333333', // Fundo escuro para o tooltip
            titleFont: {
              size: 14,
              weight: 'bold',
              color: '#FFFFFF' // Texto claro no título do tooltip
            },
            bodyFont: {
              size: 12,
              color: '#FFFFFF' // Texto claro no conteúdo do tooltip
            },
            padding: 10,
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                const label = tooltipItem.label;
                return `${label}: R$ ${value}`;
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20
          }
        }
      }
    });

    // Ajuste na descrição do gráfico
    const descricao = document.createElement('p');
    descricao.textContent = "Este gráfico demonstra a distribuição do saldo mensal em valores proporcionais.";
    descricao.style.fontSize = '15px';
    descricao.style.color = '#333333'; // Texto em cor escura
    descricao.style.textAlign = 'center';
    descricao.style.marginTop = '10px';

    // Insere a descrição abaixo do gráfico
    document.body.insertBefore(descricao, document.getElementById('chartContainer').nextSibling);

 
});
